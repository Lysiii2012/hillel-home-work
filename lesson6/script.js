const userText = prompt('Введіть текст')
const userOption = prompt('Які літери видаляємо?')

function userAnswer(userText , userOption) {
   const textArray =  userText.split('');
   const filterArray = textArray.filter(item => item === ' ' || !userOption.includes(item));

   return filterArray.join('');
}

const res = userAnswer(userText , userOption);
console.log(res)