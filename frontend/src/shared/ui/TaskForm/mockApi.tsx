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

interface TaskData {
    examples: Example[];
}

export const getTaskData = async (): Promise<TaskData> => ({
    examples: [
        {
            test: 'Немам кључа од (нови) (аутомобил).',
            answer: 'Немам кључа од новог аутомобила.',
            options: [
                {
                    word: 'нови',
                    correct_option: 'новог',
                    correct_option_help: '- генитив, мужской род, единственное число.',
                    wrong_options: ['нови', 'нов', 'новом'],
                },
                {
                    word: 'аутомобил',
                    correct_option: 'аутомобила',
                    correct_option_help: '- генитив, мужской род, единственное число.',
                    wrong_options: ['аутомобил', 'аутомобилом', 'аутомобилу'],
                },
            ],
        },
        {
            test: 'Говорим о проблему (његов) (колега).',
            answer: 'Говорим о проблему његовог колеге.',
            options: [
                {
                    word: 'његов',
                    correct_option: 'његовог',
                    correct_option_help: '- генитив, мужской род, единственное число.',
                    wrong_options: ['његов', 'његовом', 'његова'],
                },
                {
                    word: 'колега',
                    correct_option: 'колеге',
                    correct_option_help: '- генитив, мужской род, единственное число.',
                    wrong_options: ['колега', 'колегом', 'колеги'],
                },
            ],
        },
        // Add more examples as needed
    ],
});
