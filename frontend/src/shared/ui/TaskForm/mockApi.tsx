export const getTaskData = (selectedCard: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                question: `Идемо у (парк) са (пси) и (деца)`,
                options: ['парка', 'парку', 'парк'],
                correctAnswer: 'парку',
            });
        }, 500); // Имитация задержки API
    });
};
