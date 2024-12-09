import { classNames } from 'shared/lib/classNames/classNames';
import { VFC, SVGProps } from 'react';
import cls from './Card.module.scss';

interface CardProps {
    title: string;
    icon: VFC<SVGProps<SVGSVGElement>>;
    className?: string;
}

export const Card = ({ title, icon, className }: CardProps) => (
    <div className={classNames(cls.card, {}, [className])}>
        <p className={cls.title}>{title}</p>
    </div>
);
