import dayjs from "dayjs";
import { IServerMessage, IMessage, ITitleMessage } from "../../../types";

export const normalizeDialog = (
  dialog: IServerMessage[]
): (ITitleMessage | IMessage)[] => {
  const newDialog: (ITitleMessage | IMessage)[] = [];

  dialog?.forEach((item, i) => {
    if (i === 0 || dialog[i - 1]) {
      const first = dayjs((i === 0 ? item : dialog[i - 1]).date);
      const diff = first.diff(item.date, "day");

      if (i === 0 || diff) {
        newDialog.push({
          type: "title",
          id: `item-title-${item.id}`,
          date: item.date,
        });
      }
    }

    if (i === 0 || item.is !== dialog[i - 1].is) {
      newDialog.push({
        type: "message",
        id: `item-message-${item.id}`,
        avatar: item.avatar,
        isReverse: item.is === "my",
        isRemovable: item.is === "my",
        messages: [
          {
            text: item.message,
            status: item.status!,
            id: item.id,
            date: item.date,
          },
        ],
      });
    } else {
      const position = newDialog.length - 1;
      const currentItem = newDialog[position] as IMessage;

      newDialog[position] = {
        ...currentItem,
        messages: currentItem.messages.concat({
          text: item.message,
          status: item.status!,
          id: item.id,
          date: item.date,
        }),
      };
    }
  });

  return newDialog;
};
