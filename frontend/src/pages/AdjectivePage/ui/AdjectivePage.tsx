import React from 'react';
import { Table } from 'shared/ui/Table/Table';
import { adjectiveData } from 'app/data/tables/adjective';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AdjectivePage.module.scss';

interface AdjectivePageProps {
    className?: string;
}

export const AdjectivePage = ({ className }: AdjectivePageProps) => (
    <div className={classNames(cls.adjectivePage, {}, [className])}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h2 className={cls.title}>
            Прилагательные
        </h2>
        <Table
            sections={adjectiveData.sections}
            headers={adjectiveData.headers}
        />
    </div>
);
