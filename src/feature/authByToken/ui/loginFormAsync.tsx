import { FC, lazy } from 'react';
import { LoginFormProps } from './loginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => import('./loginForm'),
);
