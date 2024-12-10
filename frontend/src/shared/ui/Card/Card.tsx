import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    title: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>; // SVG icon component
}

export const Card = ({ className, title, Icon }: CardProps) => (
    <div className={classNames(cls.card, {}, [className])}>
        <div className={cls.icon}>
            <Icon />
        </div>
        <span className={cls.title}>{title}</span>
    </div>
);
