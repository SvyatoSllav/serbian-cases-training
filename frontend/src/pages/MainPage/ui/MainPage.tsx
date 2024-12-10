import React from 'react';
import { CardGrid } from 'shared/ui/CardGrid/CardGrid';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage = ({ className }: MainPageProps) => (
    <div className={classNames(cls.mainPage, {}, [className])}>
        <h1 className={cls.mainPageHeader}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            Выберите тему тренировки и правильно поставьте вариант падежа. Уживаjте!
        </h1>
        <CardGrid />
    </div>
);
