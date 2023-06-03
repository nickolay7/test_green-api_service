import { ReactNode } from 'react';
import { classNames } from '../../../helpers/classNames';
import { useModal } from '../../../hooks/useModal';

import cls from './modal.module.scss';

interface ModalProps {
    className?: string;
    children: string | ReactNode;
    isModalOpen: boolean;
    toggleHandler: () => void;
    lazy?: boolean;
}
export const Modal = ({ className, children, ...otherProps }: ModalProps) => {
    const { isModalOpen, toggleHandler, lazy } = otherProps;
    const { onClose, isClosed, isMounted } = useModal({
        toggleHandler,
        isModalOpen,
        animationDelay: 400,
    });

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div
            className={classNames(
                cls.modal,
                { [cls.open]: isModalOpen, [cls.isClosing]: isClosed },
                [className],
            )}
        >
            <div className={cls.overlay} onClick={onClose}>
                <div
                    className={classNames(cls.content, {})}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
