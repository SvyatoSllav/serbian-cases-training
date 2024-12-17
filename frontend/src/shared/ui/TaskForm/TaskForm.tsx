import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { getTaskData } from './mockApi'; // Пусть путь соответствует структуре проекта
import cls from './TaskForm.module.scss';

interface TaskFormProps {
    className?: string;
    onClose: () => void;
    selectedCard?: string;
}

export const TaskForm = ({ className, selectedCard, onClose }: TaskFormProps) => {
    const [taskData, setTaskData] = useState<{
        question: string;
        options: string[];
        correctAnswer: string;
    } | null>(null);

    useEffect(() => {
        if (selectedCard) {
            getTaskData(selectedCard).then((data: any) => setTaskData(data as any));
        }
    }, [selectedCard]);

    const handleOptionClick = (option: string) => {
        if (taskData && option === taskData.correctAnswer) {
            alert('Правильно!');
        } else {
            alert('Неправильно!');
        }
    };
    const questionTitle = `Задание для ${selectedCard}`;

    if (!taskData) {
        return <div className={classNames(cls.taskForm, {}, [className])}>Загрузка...</div>;
    }

    return (
        <div className={classNames(cls.taskForm, {}, [className])}>
            <button onClick={onClose} className={cls.closeButton}>
                ×
            </button>
            <h2>{questionTitle}</h2>
            <span className={cls.question}>{taskData.question}</span>
            <div className={cls.options}>
                {taskData.options.map((option, index) => (
                    <button
                        key={index}
                        className={cls.optionButton}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <button className={cls.hintButton}>Подсказка</button>
        </div>
    );
};
