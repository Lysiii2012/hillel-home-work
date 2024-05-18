const userText = prompt('Введіть текст')
const userOption = prompt('Які літери видаляємо?')
let notF = ''

function userAnswer(userText , userOption) {
   const textArray =  userText.split('');
   const filterArray = textArray.filter(item => item === ' ' || !userOption.includes(item));
   const notFaund = textArray.filter(item => item !== ' ' && !userOption.includes(item));
    
   notF =  notFaund.join(' ')
   return filterArray.join('');
  
}

const res = userAnswer(userText , userOption);
console.log(res)
console.log(`А цих літер не було в вашому тексті ${notF}`)