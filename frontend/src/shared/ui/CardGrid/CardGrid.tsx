import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import nominativeIcon from 'shared/assets/icons/nominative.svg';
import genitiveIcon from 'shared/assets/icons/genitive.svg';
import cls from './CardGrid.module.scss';

interface CardGridProps {
    className?: string;
}

const cardData = [
    { title: 'Номинатив', icon: nominativeIcon },
    { title: 'Генетив', icon: genitiveIcon },
    // Add more cards
];

interface CardGridProps {
  className?: string;
}

export const CardGrid = ({ className }: CardGridProps) => (
    <div className={classNames(cls.grid, {}, [className])}>
        {cardData.map((card) => (
            <Card title={card.title} icon={card.icon} />
        ))}
    </div>
);
