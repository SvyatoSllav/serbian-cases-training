import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Главная страница')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/noun" className={cls.mainLink}>
                    {t('Существительные')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/adjective" className={cls.mainLink}>
                    {t('Прилагательные')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/pronoun" className={cls.mainLink}>
                    {t('Местоимения')}
                </AppLink>
            </div>
        </div>
    );
};
