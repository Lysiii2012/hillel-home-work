const promptAnswer = prompt('Введіть число від 100')

function resUser(promptAnswer) {
    const numberInput = parseFloat(promptAnswer);

    if (isNaN(numberInput)){
        console.log('Ви ввели не число');
        return false
    }

    if (numberInput < 100){
        console.log('Ви ввели число менше 100');
    }
    if (numberInput > 100){
        console.log(`Ви ввели число : ${numberInput}`);
        return 
    }

}
resUser(promptAnswer)