import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Table.module.scss';

interface RowData {
  singular: string;
  plural: string;
  note?: string;
}

interface SectionData {
  title: string;
  description: string;
  rows: RowData[];
}

interface TableProps {
  className?: string;
  sections: SectionData[];
  headers?: string[];
}

export const Table: React.FC<TableProps> = ({ className, sections, headers }) => (
    <div className={classNames(cls.tableContainer, {}, [className])}>
        {sections.map((section) => (
            <div className={cls.section} key={section.title}>
                <div className={cls.sectionHeader}>
                    <h3>{section.title}</h3>
                    <p className={cls.description}>{section.description}</p>
                </div>
                <table className={cls.table}>
                    <thead>
                        <tr>
                            {headers?.map((header) => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {section.rows.map((row) => (
                            <tr key={`${row.singular}-${row.plural}`}>
                                <td>{row.singular}</td>
                                <td>{row.plural}</td>
                                <td className={cls.note}>{row.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ))}
    </div>
);
