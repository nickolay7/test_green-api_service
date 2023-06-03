import { FC, Suspense } from 'react';

import { Modal } from 'shared/ui/modal';
import { Spinner } from 'shared/ui/spinner';
import { LoginFormAsync } from './loginFormAsync';

interface LoginModalProps {
    isModalOpen: boolean;
    toggleHandler: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { isModalOpen, toggleHandler } = props;

    const onSuccess = () => {
        setTimeout(() => toggleHandler(), 1000);
    };

    return (
        <Modal isModalOpen={isModalOpen} toggleHandler={toggleHandler}>
            <Suspense fallback={<Spinner />}>
                <LoginFormAsync onSuccess={onSuccess} />
            </Suspense>
        </Modal>
    );
};
