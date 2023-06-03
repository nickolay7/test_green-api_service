import { memo } from 'react';
import { classNames } from '../../../helpers/classNames';
import cls from './text.module.scss';

export enum TextVariant {
    RED = 'red',
    PRIMARY = 'primary',
}

export enum TextSize {
    S_TEXT = 's-size',
    M_TEXT = 'm-size',
    L_TEXT = 'l-size',
}

export enum TextAlign {
    LEFT = 'text-left',
    RIGHT = 'text-right',
    CENTER = 'text-center',
}

export type HeaderTagType = 'h1' | 'h2' | 'h3';

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

export const Text = memo(({ className, ...otherProps }: TextProps) => {
    const {
        title,
        text,
        variant = TextVariant.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M_TEXT,
        'data-testid': dataTestId = 'Text',
    } = otherProps;

    const sizeToHeaderMap: Record<TextSize, HeaderTagType> = {
        [TextSize.S_TEXT]: 'h3',
        [TextSize.M_TEXT]: 'h2',
        [TextSize.L_TEXT]: 'h1',
    };

    const HeaderTag = sizeToHeaderMap[size];

    const mods = {
        [cls[size]]: size,
        [cls[align]]: align,
    };

    return (
        <div className={classNames(cls.text, mods, [className, cls[variant]])}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <HeaderTag
                    data-testid={`${dataTestId}.Paragraph`}
                    className={cls.text}
                >
                    {text}
                </HeaderTag>
            )}
        </div>
    );
});
