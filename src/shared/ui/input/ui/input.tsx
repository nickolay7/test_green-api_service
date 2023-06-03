import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import { classNames } from '../../../helpers/classNames';
import cls from './input.module.scss';

type InputAttrs = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly'
>;
export interface InputProps extends InputAttrs {
    className?: string;
    value?: string;
    onChange?: (value: string, key: string) => void;
    placeholder: string;
    autoFocus?: boolean;
    readonly?: boolean;
    name: string;
    label?: boolean;
    'data-testid'?: string;
}
export const Input = memo(({ className, ...otherProps }: InputProps) => {
    const {
        value,
        placeholder,
        autoFocus,
        onChange,
        readonly,
        name,
        label = true,
        'data-testid': dataTestId = 'test',
    } = otherProps;

    const onInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.target.value, name);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {label && (
                <label className={cls.label} htmlFor={name}>
                    {name}
                </label>
            )}
            <input
                id={name}
                className={cls.input}
                value={value}
                name={name}
                onChange={onInput}
                placeholder={placeholder}
                autoFocus={autoFocus}
                readOnly={readonly}
                data-testid={dataTestId}
            />
        </div>
    );
});
