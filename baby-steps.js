const numbers = [...process.argv.slice(2)]
// console.log(numbers)

const answer = numbers.reduce((previousValue, currentValue , currentIndex, array ) =>{
    const number = +currentValue
return previousValue+number;
},0 )
console.log(answer);