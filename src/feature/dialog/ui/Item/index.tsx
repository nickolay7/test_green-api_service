import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import Icon from "../../../../shared/ui/Icon";
import { IMessageItem } from "../../../../types";

import "./styles.css";

interface IProps {
  isReverse: boolean;
  isRemovable: boolean;
  messages: IMessageItem[];
  avatar: string;
}

const Item = ({
  isReverse,
  isRemovable,
  messages,
  avatar,
}: IProps) => {

  return (
    <div
      className={classNames("item", {
        reverse: isReverse,
        removable: isRemovable,
      })}
    >
      {
          !avatar.startsWith('http') ? avatar : <img src={avatar} className="avatar" alt="Avatar" />
      }
      <div className="list">
        {messages.map((item) => (
          <div className="list-item" key={item.id}>
            <div className="text">{item.text}</div>
            <div className="time">{dayjs(item.date).format("HH:mm")}</div>
            <Icon
              size={15}
              className="message-status"
              name={
                item.status === "sent" ? "MessageSent" : "MessageRead"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
