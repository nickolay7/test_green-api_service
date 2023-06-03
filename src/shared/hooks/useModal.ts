import { useCallback, useEffect, useRef, useState } from 'react';

interface useModalProps {
    toggleHandler: () => void;
    isModalOpen: boolean;
    animationDelay: number;
}

export const useModal = ({
    toggleHandler,
    isModalOpen,
    animationDelay,
}: useModalProps) => {
    const [isClosed, setClosed] = useState(false);
    const [isMounted, setMounted] = useState(false);
    const timerIdRef = useRef<ReturnType<typeof setTimeout>>();

    const onClose = useCallback(() => {
        setClosed(true);
        timerIdRef.current = setTimeout(() => {
            toggleHandler();
            setClosed(false);
        }, animationDelay);
    }, [animationDelay, toggleHandler]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    useEffect(() => {
        setMounted(true);
    }, [isModalOpen]);

    useEffect(() => {
        if (!isModalOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            if (timerIdRef.current instanceof NodeJS.Timeout) {
                clearTimeout(timerIdRef.current);
            }
        };
    }, [isModalOpen, onKeyDown]);

    return { onClose, isClosed, isMounted };
};
