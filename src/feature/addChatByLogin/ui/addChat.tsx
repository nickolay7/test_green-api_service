import React, {useState} from 'react';
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {classNames} from "shared/helpers/classNames";

import cls from "./addChat.module.scss";
import {VStack} from "shared/ui/stack";
import {useAppDispatch} from "app/providers/storeProvider/config/hooks";
import {addChat} from "../model/slice/addChatSlice";
import {ElementTheme} from "shared/types/ui";

export const AddChat = () => {
    const [isOpen, setOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const dispatch = useAppDispatch();

    const onAdd = () => {
        setOpen(true);
    };

    const onChange = (val: string) => setPhone(val);

    const onAddChat = () => {
        setOpen(false);
        dispatch(addChat(phone));
        setPhone("");
    };



    return (
        <>
            <Button onClick={onAdd} variant={ElementTheme.OUTLINE_INVERTED}>
                Добавить чат
            </Button>
            <div className={classNames(cls.addPhone, { [cls.opened]: isOpen })}>
                <VStack gap="gap8">
                    <Input value={phone} onChange={onChange} placeholder='Введите номер телефона...' name='phone' label={false} />
                    <Button onClick={onAddChat}>
                        Сохранить
                    </Button>
                </VStack>
            </div>
        </>
    );
};
