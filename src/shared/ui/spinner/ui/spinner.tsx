import { classNames } from '../../../helpers/classNames';
import './spinner.scss';

export interface LoaderProps {
    className?: string;
}

export const Spinner = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
