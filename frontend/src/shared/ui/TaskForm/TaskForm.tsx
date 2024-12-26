import React, { useEffect, useState, useRef } from 'react';
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
    const [tasks, setTasks] = useState<TaskData[]>([]);
    const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(0);
    const [isHintVisible, setIsHintVisible] = useState(false);
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const formRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        getTaskData()
            .then((data: TaskData[]) => setTasks(data))
            .catch((err) => console.error('Ошибка загрузки данных:', err));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const currentTask = tasks[currentTaskIndex];

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const toggleHint = () => {
        setIsHintVisible((prev) => !prev);
    };

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible((prev) => !prev);
    };

    const showNextTask = () => {
        setSelectedOption(null);
        setIsHintVisible(false);
        setIsAnswerVisible(false);
        setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
    };

    const questionTitle = `Задание для ${selectedCard || 'выбранной карточки'}`;

    if (!currentTask) {
        return <div className={classNames(cls.taskForm, {}, [className])}>Загрузка...</div>;
    }

    return (
        <div className={cls.overlay}>
            <div ref={formRef} className={classNames(cls.taskForm, {}, [className])}>
                <button onClick={onClose} className={cls.closeButton}>
                    ×
                </button>
                <h2 className={cls.title}>{questionTitle}</h2>
                <p className={cls.question}>{currentTask.question}</p>

                {isAnswerVisible ? (
                    // Полный ответ
                    <div className={cls.fullAnswer}>
                        {currentTask.fullAnswer.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className={cls.options}>
                            {currentTask.options.map((option, index) => (
                                <button
                                    key={index}
                                    className={classNames(cls.optionButton, {
                                        [cls.correct]: selectedOption === option && option === currentTask.correctOption,
                                        [cls.incorrect]: selectedOption === option && option !== currentTask.correctOption,
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
                            {isHintVisible && <div className={cls.hint}>{currentTask.hint}</div>}
                        </div>
                    </>
                )}

                <div className={cls.extraButtons}>
                    <button className={cls.extraButton} onClick={toggleAnswerVisibility}>
                        {isAnswerVisible ? 'Скрыть ответ' : 'Показать ответ'}
                    </button>
                    <button className={cls.extraButton} onClick={showNextTask}>
                        Другой пример
                    </button>
                    <button className={cls.extraButton}>Сообщить об ошибке</button>
                </div>
            </div>
        </div>
    );
};
