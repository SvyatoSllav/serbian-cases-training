import { classNames } from 'shared/lib/classNames/classNames';
import { pronounData } from 'app/data/tables/pronoun';
import { PronounTable } from 'shared/ui/PronounTable/PronounTable';
import cls from './PronounPage.module.scss';

interface PronounPageProps {
    className?: string;
}

export const PronounPage = ({ className }: PronounPageProps) => (
    <div className={classNames(cls.pronounPage, {}, [className])}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h2 className={cls.title}>
            Местоимения
        </h2>
        {pronounData.sections.map((section) => (
            <div className={cls.section}>
                <PronounTable
                    className={cls.table}
                    headers={section.headers}
                    subHeaders={section.subHeaders}
                    rows={section.rows}
                />
            </div>
        ))}
    </div>
);
