// const numbers = [1,2,3,4,5]
// const onlyeven=numbers.filter((number)=>number%2==0) 
// console.log(onlyeven)

// const array = [1,2,3,4,5, null, undefined, 'a','b',{}]
// console.log(array.filter(el=>!!el))// лайфхак для отобрания 0


// //sort - сортирует
// const number = [1,2,3,4,456,789,-65,2,456]
// const sortedNumbers1 = number.sort((a,b)=> a - b)
// console.log(sortedNumbers1)


// const numbers = [ 'd',1,2,3,4,5,'10', 'a']// если массив начианется с буквы, то редьюс двльше не идет
// const result = numbers.reduce((a,b)=>a==+a && b ==+b ? +a+ +b: a, 0)
// console.log(result)

// const number = [1,2,3,4,456,789,-65,2,456]
// const result = number.reduce((a,b) => a+b)
// console.log(result)

const numbers = [1,2,3,4,456,789,-65,2,456]
const result = numbers.map(number => ++number )//number+1  - preincrement
console.log(result)

