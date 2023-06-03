import {ChangeEvent, FormEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "app/providers/storeProvider/config/hooks";
import {sendMessage} from "../model/services/sendMessage";
import {
  getGetMessageSelector,
  getSendMessageSelector,
} from "../model/selectors/messageExchangeSelectors";
import {Text} from "shared/ui/text";
import {getMessage} from "../model/services/getMessage";

import "./styles.scss";

export const Sender = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const sendingError = useAppSelector(getSendMessageSelector);
  const gettingError = useAppSelector(getGetMessageSelector);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
    dispatch(sendMessage(value));
  };

  const onGetMessage = () => {
    dispatch(getMessage());
  };

  if (sendingError || gettingError) {
    return <Text title="Неверные учетные данные!!!" text="Нажмите перезайти. И введите корректные учетные данные..."/>;
  }

  return (
      <>
        <form className="sender" onSubmit={onSubmit}>
          <input
              placeholder="Введите сообщение"
              value={value}
              onChange={onChange}
              required
          />
          <button>Отправить</button>
        </form>
        <button className="get-button" onClick={onGetMessage}>Проверить входящие сообщения</button>
      </>
  );
};
