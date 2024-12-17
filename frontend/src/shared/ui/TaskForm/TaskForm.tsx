import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { getTaskData } from './mockApi'; // Импорт mock API
import cls from './TaskForm.module.scss';

interface TaskFormProps {
    className?: string;
    onClose: () => void;
    selectedCard?: string;
}

interface TaskData {
    question: string;
    options: string[];
    hint: string;
    correctOption: string;
    fullAnswer: string; // Полный ответ
}

export const TaskForm = ({ className, onClose, selectedCard }: TaskFormProps) => {
    const [taskData, setTaskData] = useState<TaskData | null>(null);
    const [isHintVisible, setIsHintVisible] = useState(false);
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        if (selectedCard) {
            getTaskData(selectedCard)
                .then((data: TaskData) => setTaskData(data))
                .catch((err) => console.error('Ошибка загрузки данных:', err));
        }
    }, [selectedCard]);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const toggleHint = () => {
        setIsHintVisible((prev) => !prev);
    };

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible((prev) => !prev);
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
            <h2 className={cls.title}>{questionTitle}</h2>
            <p className={cls.question}>{taskData.question}</p>

            {isAnswerVisible ? (
                // Полный ответ
                <div className={cls.fullAnswer}>
                    {taskData.fullAnswer}
                </div>
            ) : (
                <>
                    <div className={cls.options}>
                        {taskData.options.map((option, index) => (
                            <button
                                key={index}
                                className={classNames(cls.optionButton, {
                                    [cls.correct]: selectedOption === option && option === taskData.correctOption,
                                    [cls.incorrect]: selectedOption === option && option !== taskData.correctOption,
                                })}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className={cls.hintContainer}>
                        <button onClick={toggleHint} className={cls.hintButton}>
                            Подсказка
                        </button>
                        {isHintVisible && <div className={cls.hint}>{taskData.hint}</div>}
                    </div>
                </>
            )}

            <div className={cls.extraButtons}>
                <button className={cls.extraButton} onClick={toggleAnswerVisibility}>
                    {isAnswerVisible ? 'Скрыть ответ' : 'Показать ответ'}
                </button>
                <button className={cls.extraButton}>Другой пример</button>
                <button className={cls.extraButton}>Сообщить об ошибке</button>
            </div>
        </div>
    );
};
