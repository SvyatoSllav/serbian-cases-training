import React from 'react';
import { Table } from 'shared/ui/Table/Table';
import { classNames } from 'shared/lib/classNames/classNames';
import { nounData } from 'app/data/tables/noun';
import cls from './NounPage.module.scss';

interface NounPageProps {
    className?: string;
}

export const NounPage = ({ className }: NounPageProps) => (
    <div className={classNames(cls.nounPage, {}, [className])}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h2 className={cls.title}>
            Существительные
        </h2>
        <Table
            sections={nounData.sections}
            headers={nounData.headers}
        />
    </div>
);
