import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PronounTable.module.scss';

interface SubHeader {
    title: string;
    columns: string[];
}

interface Row {
    [key: string]: string | undefined;
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
                        <th
                            key={`header-${index}`} // Уникальный ключ
                            colSpan={subHeaders?.[index]?.columns.length || 1}
                        >
                            {header}
                        </th>
                    ))}
                </tr>
                {subHeaders && (
                    <tr>
                        {subHeaders.flatMap((subHeader, subHeaderIndex) => subHeader.columns.map((col, colIndex) => (
                            <th key={`subHeader-${subHeaderIndex}-${colIndex}`}>
                                {col}
                            </th>
                        )))}
                    </tr>
                )}
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <tr key={`row-${rowIndex}`}>
                        {headers.flatMap((header, headerIndex) => subHeaders?.[headerIndex]?.columns.map((col, colIndex) => (
                            <td key={`cell-${rowIndex}-${headerIndex}-${colIndex}`}>
                                {row[col]}
                            </td>
                        )) || (
                            <td key={`cell-${rowIndex}-${headerIndex}-default`}>
                                {row[header]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
