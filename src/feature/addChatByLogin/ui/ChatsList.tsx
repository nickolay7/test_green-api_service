import React from 'react';
import {useAppDispatch, useAppSelector} from "app/providers/storeProvider/config/hooks";
import {getChats, getCurrentChatLogin} from "../model/selectors/addChatSelector";
import {VStack} from "shared/ui/stack";
import {Text} from "shared/ui/text";
import {setCurrentChat} from "../model/slice/addChatSlice";

import cls from './addChat.module.scss';
import {classNames} from "../../../shared/helpers/classNames";

const ChatsList = () => {
    const chats = useAppSelector(getChats);
    const currentLogin = useAppSelector(getCurrentChatLogin);
    const dispatch = useAppDispatch();
    const logins = Object.keys(chats);
    const onChooseChat = (login: string) => {
        dispatch(setCurrentChat(login));
    }

    return (
        <VStack className={cls.chatList}>
            {logins.map((login) => {
                return (
                    <div
                        key={login}
                        onClick={() => onChooseChat(login)}
                        className={classNames('', {[cls.active]: login === currentLogin})}
                    >
                        <Text title={login} />
                    </div>
                );
            })}
        </VStack>
    );
}

export default ChatsList;
