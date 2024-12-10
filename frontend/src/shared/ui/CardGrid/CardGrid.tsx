import { classNames } from 'shared/lib/classNames/classNames';
import NominativeIcon from 'shared/assets/icons/card/nominative.svg';
import GenitiveIcon from 'shared/assets/icons/card/genitive.svg';
import LocativeIcon from 'shared/assets/icons/card/locative.svg';
import AccusativeIcon from 'shared/assets/icons/card/accusative.svg';
import OtherIcon from 'shared/assets/icons/card/other.svg';
import { Card } from 'shared/ui/Card/Card';
import cls from './CardGrid.module.scss';

interface CardGridProps {
    className?: string;
}

const cards = [
    { title: 'Номенотив', Icon: NominativeIcon },
    { title: 'Генетив', Icon: GenitiveIcon },
    { title: 'Локатив', Icon: LocativeIcon },
    { title: 'Акузатив', Icon: AccusativeIcon },
    { title: 'Датив', Icon: OtherIcon },
    { title: 'Инструментал', Icon: OtherIcon },
    { title: 'Вокатив', Icon: OtherIcon },
    { title: 'Микс', Icon: OtherIcon },
];

export const CardGrid = ({ className }: CardGridProps) => (
    <div className={classNames(cls.cardGrid, {}, [className])}>
        {cards.map((card) => (
            <Card title={card.title} Icon={card.Icon} />
        ))}
    </div>
);
