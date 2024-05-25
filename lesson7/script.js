function resUserInput() {
    let attemptsLeft = 10;

    for (let current = 0; current < attemptsLeft; current++) {
        let promptAnswer = prompt('Введіть число більше 100');
        let tryWrite = attemptsLeft - current - 1;

        if (promptAnswer === null || promptAnswer.trim() === "") {
            console.log(`Давайте введемо ще раз, залишилося: ${tryWrite} спроб`);
            continue;
        }

        let num = Number(promptAnswer);

        if (isNaN(num)) {
            console.log('Ви ввели не число. Спробуйте ще раз.');
            continue;
        }

        if (num > 100) {
            console.log(`Ви ввели число: ${num}`);
            return;
        } else if (num === 100) {
            console.log('Потрібно не 100, а більше 100. Спробуйте ще раз.');
        } else {
            console.log(`Ви ввели число: ${num}, воно менше 100. Спробуйте ще раз, залишилося: ${tryWrite} спроб`);
        }
    }
    
    console.log("Дякуємо за увагу, Ваша остання цифра: " + promptAnswer);
}

resUserInput();
