const arrayNums = [1, 3, 55, 85, 0, 1, 4, 6, 3, 5, 6, 102, 33, 102];

const doubledNums = arrayNums.filter((num, index, arr) => arr.indexOf(num) !== index);

const uniqueDuplicates = doubledNums.filter((num, index) => doubledNums.indexOf(num) === index)

console.log(uniqueDuplicates)