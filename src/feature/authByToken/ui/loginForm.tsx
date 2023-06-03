import {memo, useCallback, useState} from 'react';

import {Input} from 'shared/ui/input';
import {Button} from 'shared/ui/button';
import {Text, TextAlign} from 'shared/ui/text';

import cls from './login.module.scss';
import {ElementTheme} from 'shared/types/ui';
import {useAppDispatch} from "app/providers/storeProvider/config/hooks";
import {setAuthData} from "../model/slice/authSlice";

export interface LoginFormProps {
    onSuccess?: () => void;
}

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
    const [id, setId] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useAppDispatch();

    const onInputId = useCallback(
        (val: string) => {
            setId(val);
        },
        [],
    );

    const onInputToken = useCallback(
        (val: string) => {
            setToken(val);
        },
        [],
    );

    const onSetAuthData = () => {
        const authData = {
            id,
            token,
        };

        dispatch(setAuthData(authData));

        onSuccess?.();
    };

    return (
        <div className={cls.loginForm}>
            <Text title={' Учетные данные'} align={TextAlign.CENTER} />
            <Input
                name="username"
                type="text"
                onChange={onInputId}
                value={id}
                placeholder='введите идентификатор'
                autoFocus
                label={false}
            />
            <Input
                name="password"
                type="text"
                onChange={onInputToken}
                value={token}
                placeholder='введите токен'
                label={false}
            />
            <Button
                onClick={onSetAuthData}
                variant={ElementTheme.OUTLINE}
            >
                Сохранить
            </Button>
        </div>
    );
});

export default LoginForm;
