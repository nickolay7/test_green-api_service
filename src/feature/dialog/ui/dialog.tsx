import Item from "./Item";
import Title from "./Title";

import { normalizeDialog } from "./helpers";

import "./styles.scss";
import {useAppSelector} from "app/providers/storeProvider/config/hooks";
import {getChats, getCurrentChatLogin} from "feature/addChatByLogin/model/selectors/addChatSelector";

export const Dialog = () => {
  const currentChatLogin = useAppSelector(getCurrentChatLogin);
  const chats = useAppSelector(getChats);

  const normalizedDialog = currentChatLogin && normalizeDialog(chats[currentChatLogin]);

  return (
    <div className="dialog">
      <div className="overflow">
        {normalizedDialog && normalizedDialog?.map((item) =>
          item.type === "message" ? (
            <Item {...item} key={item.id} />
          ) : (
            <Title key={item.id} date={item.date} />
          )
        )}
      </div>
    </div>
  );
};
