import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(cls.footer, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <span>© 2024 Native Serbian</span>
        </div>
    );
};
