import Theme from "./Theme";

import {Button} from "shared/ui/button";
import {useAppDispatch} from "app/providers/storeProvider/config/hooks";
import {reAuth} from "feature/authByToken/model/slice/authSlice";

import "./styles.scss";
import {AddChat} from "../../feature/addChatByLogin";
import {resetError} from "../../feature/messageExchange/model/slice/messageExchangeSlice";
import {ElementTheme} from "../../shared/types/ui";

export interface HeaderProps {
    authReset?: () => void;
}

const Header = ({ authReset }: HeaderProps) => {
    const dispatch = useAppDispatch();

  const onReload = () => {
    dispatch(reAuth());
    dispatch(resetError());
    authReset?.();
  };

  return (
    <div className="header">
        <AddChat />
        <Button onClick={onReload} variant={ElementTheme.OUTLINE_INVERTED}>Перезайти</Button>
        <Theme />
    </div>
  );
};

export default Header;
