import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PronounTable.module.scss';

interface SubHeader {
    title: string;
    columns: string[];
}

interface Row {
    [key: string]: string | undefined; // Ключ — название колонки, значение — содержимое
}

interface PronounTableProps {
    className?: string;
    headers: string[];
    subHeaders?: SubHeader[];
    rows: Row[];
}

export const PronounTable = ({
    className, headers, subHeaders, rows,
}: PronounTableProps) => (
    <div className={classNames(cls.pronounTable, {}, [className])}>
        <table className={cls.table}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th colSpan={subHeaders?.[index]?.columns.length || 1}>
                            {header}
                        </th>
                    ))}
                </tr>
                {subHeaders && (
                    <tr>
                        {subHeaders.map((subHeader) => subHeader.columns.map((col) => (
                            <th>{col}</th>
                        )))}
                    </tr>
                )}
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr>
                        {/* eslint-disable-next-line max-len */}
                        {headers.flatMap((header, headerIndex) => subHeaders?.[headerIndex]?.columns.map((col) => (
                            <td>{row[col]}</td>
                        )) || <td>{row[header]}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
