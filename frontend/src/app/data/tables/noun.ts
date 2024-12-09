export const nounData = {
    headers: ['Единственное число', 'Множественное число', 'Примечание'],
    sections: [
        {
            title: 'Номенотив',
            description: 'Отвечает на вопросы Кто? Шта?',
            rows: [
                { singular: 'Мужской род: -', plural: 'Мужской род: и', note: 'В мужском роде слова с одним слогом расширяются за счёт окончаний ов, еви (нож-ножеви) Замена согласных: к→ч (язык→языки), г→з (носорог→носорози), х→с (орах→ораси)' },
                { singular: 'Женский род: а', plural: 'Женский род: е', note: '' },
                { singular: 'Средний род: о, е', plural: 'Средний род: а', note: '' },
            ],
        },
        {
            title: 'Генетив',
            description: 'Отвечает на вопросы: Кого? Чего? Одакле? Када? Используется с предлогами: из, од, код, без, око, поред',
            rows: [
                { singular: 'Мужской род: а', plural: 'Мужской род: а', note: '' },
                { singular: 'Женский род: е', plural: 'Женский род: а', note: '' },
                { singular: 'Средний род: а', plural: 'Средний род: а', note: '' },
            ],
        },
        {
            title: 'Локатив',
            description: 'Отвечает на вопросы: О ком? На чём? Где? Используется с предлогами: на, по',
            rows: [
                { singular: 'Мужской род: у', plural: 'Мужской род: има', note: '' },
                { singular: 'Женский род: и', plural: 'Женский род: ама', note: '' },
                { singular: 'Средний род: у', plural: 'Средний род: има', note: '' },
            ],
        },
        {
            title: 'Аккузатив',
            description: 'Отвечает на вопросы: Кого? Шта? Куда? С предлогами: за, у, на, по. С днями недели, глаголами движения',
            rows: [
                { singular: 'Мужской род: -, а', plural: 'Мужской род: е', note: 'Окончание -а только с одушевленными существительными' },
                { singular: 'Женский род: у', plural: 'Женский род: е', note: '' },
                { singular: 'Средний род: -, о, е', plural: 'Средний род: а', note: '' },
            ],
        },
        {
            title: 'Датив',
            description: 'Отвечает на вопросы: Кому? Чему? Используется с предлогами: ка, према',
            rows: [
                { singular: 'Мужской род: у', plural: 'Мужской род: има', note: '' },
                { singular: 'Женский род: и', plural: 'Женский род: ама, има', note: 'У существительных женского рода в дативе меняются согласные: к→ч, г→з, х→с (рука→руци)' },
                { singular: 'Средний род: у', plural: 'Средний род: има', note: '' },
            ],
        },
        {
            title: 'Инструментал',
            description: 'Отвечает на вопросы: С кем? С чем? С чиме? Используется с предлогами: са, за',
            rows: [
                { singular: 'Мужской род: ом, ем', plural: 'Мужской род: има', note: '' },
                { singular: 'Женский род: ом, ий, ю', plural: 'Женский род: ама', note: '' },
                { singular: 'Средний род: ом, ем', plural: 'Средний род: има', note: '' },
            ],
        },
    ],
};