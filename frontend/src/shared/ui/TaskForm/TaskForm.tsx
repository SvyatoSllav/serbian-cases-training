import React, { useState, useEffect } from 'react';
import data from 'app/data/genitiv.json';
import cls from './TaskForm.module.scss';

interface Option {
  word: string;
  correct_option: string;
  correct_option_help: string;
  wrong_options: string[];
}

interface Example {
  test: string;
  answer: string;
  options: Option[];
}

interface GenitivData {
  examples: Example[];
}

interface TaskFormProps {
  className?: string;
  onClose: () => void;
  selectedCard?: string;
}

export const TaskForm = ({ className, onClose, selectedCard }: TaskFormProps) => {
    const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
    const [selectedWord, setSelectedWord] = useState<string | null>(null);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [highlightedOption, setHighlightedOption] = useState<string | null>(null);
    const [showFullAnswer, setShowFullAnswer] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const genitivData: GenitivData = data;
    const currentExample = genitivData.examples[currentExampleIndex];

    useEffect(() => {
        const firstWord = currentExample.options.find((opt) => !answers[opt.word])?.word || null;
        setSelectedWord(firstWord);
        setShowHint(false);
    }, [currentExampleIndex]);

    const handleWordClick = (word: string) => {
        if (!answers[word]) {
            setSelectedWord(word);
            setHighlightedOption(null);
            setShowHint(false);
        }
    };

    const handleNextExample = () => {
        setAnswers({});
        setSelectedWord(null);
        setShowFullAnswer(false);
        setCurrentExampleIndex((prevIndex) => (prevIndex + 1) % genitivData.examples.length);
    };

    const handleOptionSelect = (word: string, option: string) => {
        const correctOption = currentExample.options.find((opt) => opt.word === word)?.correct_option;

        if (option === correctOption) {
            setAnswers((prev) => ({
                ...prev,
                [word]: option,
            }));
            setHighlightedOption(null);

            const allWordsAnswered = Object.keys(answers).length + 1 === currentExample.options.length;

            if (allWordsAnswered) {
                setTimeout(() => handleNextExample(), 1000);
            } else {
                const nextWord = currentExample.options.find(
                    (opt) => !answers[opt.word] && opt.word !== word,
                )?.word;

                if (nextWord) {
                    setTimeout(() => {
                        setSelectedWord(nextWord);
                    }, 1000);
                }
            }
        } else {
            setHighlightedOption(option);
        }
    };

    return (
        <div className={cls.overlay} onClick={onClose}>
            <div
                className={`${cls.taskForm} ${className || ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className={cls.closeButton}>
                    ×
                </button>

                <h2 className={cls.title}>
                    {`Задание для ${selectedCard || 'выбранной карточки'}`}
                </h2>

                <div className={cls.question}>
                    {currentExample.test.split(/(\(.+?\))/).map((part, index) => {
                        const match = part.match(/\((.+?)\)/);
                        if (match) {
                            const word = match[1];
                            const isCompleted = !!answers[word];
                            return (
                                <span
                                    key={index}
                                    className={`${cls.clickableWord} ${
                                        isCompleted ? cls.completedWord : cls.activeWord
                                    } ${selectedWord === word ? cls.selectedWord : ''}`}
                                    onClick={() => handleWordClick(word)}
                                >
                                    {isCompleted ? (
                                        <span className={cls.correctAnswer}>{answers[word]}</span>
                                    ) : (
                                        `(${word})`
                                    )}
                                </span>
                            );
                        }
                        return (
                            <span key={index} className={cls.question}>
                                {part}
                            </span>
                        );
                    })}
                </div>

                {selectedWord && (
                    <div className={cls.options}>
                        {currentExample.options
                            .find((opt) => opt.word === selectedWord)
                            ?.wrong_options.concat(
                                currentExample.options.find((opt) => opt.word === selectedWord)
                                    ?.correct_option || [],
                            )
                            .sort()
                            .map((option, index) => {
                                const isCorrect = option === currentExample.options.find((opt) => opt.word === selectedWord)?.correct_option;
                                const isSelected = highlightedOption === option;
                                const isSelectedCorrect = answers[selectedWord || ''] === option;
                                return (
                                    <button
                                        key={index}
                                        className={`${cls.optionButton} ${
                                            isSelectedCorrect
                                                ? cls.correct
                                                : isSelected
                                                    ? cls.incorrect
                                                    : ''
                                        }`}
                                        onClick={() => handleOptionSelect(selectedWord, option)}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                    </div>
                )}

                {selectedWord && (
                    <div className={cls.hintContainer}>
                        <button className={cls.hintButton} onClick={() => setShowHint((prev) => !prev)}>
                            Подсказка
                        </button>
                        {showHint && (
                            <div className={cls.hint}>
                                {
                                    currentExample.options.find((opt) => opt.word === selectedWord)
                                        ?.correct_option_help || 'Подсказка отсутствует'
                                }
                            </div>
                        )}
                    </div>
                )}

                <div className={cls.extraButtons}>
                    <button
                        className={cls.extraButton}
                        onClick={() => setShowFullAnswer((prev) => !prev)}
                    >
                        {showFullAnswer ? 'Скрыть ответ' : 'Показать ответ'}
                    </button>
                    <button className={cls.extraButton} onClick={handleNextExample}>
                        Другой пример
                    </button>
                </div>

                {showFullAnswer && (
                    <div className={cls.fullAnswer}>
                        <p>{currentExample.answer}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
