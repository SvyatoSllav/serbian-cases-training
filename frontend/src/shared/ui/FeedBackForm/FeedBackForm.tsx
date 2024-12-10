import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FeedbackForm.module.scss';

interface FeedbackFormProps {
    className?: string;
}

export const FeedbackForm = ({ className }: FeedbackFormProps) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('access_key', 'af42efa7-2175-402b-908c-c1ed2a5f361c');

        // Преобразуем FormData в объект
        const object: Record<string, string> = {};
        formData.forEach((value, key) => {
            object[key] = value as string;
        });

        const json = JSON.stringify(object);
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log('Success', res);
            handleClose();
        }
    };

    return (
        <div className={classNames(cls.feedbackForm, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button className={cls.button} onClick={handleOpen}>
                Связаться с нами
            </button>
            {open && (
                <div className={cls.dialogOverlay} onClick={handleClose}>
                    <div className={cls.dialog} onClick={(e) => e.stopPropagation()}>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <h2 className={cls.dialogTitle}>Закажите обратную связь</h2>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <p className={cls.dialogText}>Мы Вам перезвоним!</p>
                        <form onSubmit={onSubmit}>
                            <div className={cls.field}>
                                {/* eslint-disable-next-line i18next/no-literal-string */}
                                <label htmlFor="name">Имя</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Введите ваше имя"
                                />
                            </div>
                            <div className={cls.field}>
                                <label htmlFor="phone">Номер телефона</label>
                                <input
                                    id="phone"
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+7 (978) 123-4567"
                                />
                            </div>
                            <div className={cls.actions}>
                                <button type="button" className={cls.cancelButton} onClick={handleClose}>
                                    Отмена
                                </button>
                                <button type="submit" className={cls.submitButton}>
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
