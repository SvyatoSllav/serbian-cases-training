import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import Logo from 'shared/assets/icons/logo.svg';
import { FeedbackForm } from 'shared/ui/FeedBackForm/FeedBackForm';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => (
    <div className={classNames(cls.header, {}, [className])}>
        <div className={cls.logo}>
            <Logo />
        </div>
        <Navbar />
        <FeedbackForm />
    </div>
);
