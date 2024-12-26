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
                    {headers.map((header) => (
                        <th
                            key={header} // Используем значение заголовка как ключ
                            colSpan={subHeaders?.find((sh) => sh.title === header)?.columns.length || 1}
                        >
                            {header}
                        </th>
                    ))}
                </tr>
                {subHeaders && (
                    <tr>
                        {subHeaders.flatMap((subHeader) => subHeader.columns.map((col) => (
                            <th key={`${subHeader.title}-${col}`}>{col}</th>
                        )))}
                    </tr>
                )}
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`}>
                        {headers.flatMap((header) => (
                            subHeaders?.find((sh) => sh.title === header)?.columns.map((col) => (
                                <td key={`${header}-${col}`}>{row[col]}</td>
                            )) || <td key={`${header}-default`}>{row[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
