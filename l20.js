// class- this is shablons for objects - part of oop (obj orient progr)
// const cat = {
//     name : 'bars',
//     age : 1,
//     say : function (){
//         console.loge ( 'meow')
//     }
// }
// console.log(`${cat.name} age is ${cat.age}`)

// class Cat {
//     constructor(name='', age=0, color=''){
//         this.age=age
//         this.name = name
//         this.color = color
//     }// анонимная функция типа
//     name = 'Barsik'
//     age = 1
//     color = 'black'
//     say = function (){
//               console.log ( 'meow')
// }}
// console.log(Cat)
// const cat2= new Cat('Bar', 1 , 'blak')
// console.log(cat2)
// cat2.say()

class User {
    constructor(name = '', email = '', password = '', birthDate  =''){
this.name=name
this.email=email
this.password= password
this.birthDate= birthDate
    }
login = function ( email, password){
    if (email==this.email &&  password==this.password){
        console.log('U LOG IN')
    } else {
        console.log( 'fuck u')
    }
    
}

}
const user1 = new User ( 'Aiym', 'aiym.email.com', 'ad1010', '19.20.2002')
console.log(user1)
user1.login('aiym.email.com','ad1010')

class Rectangle{
    constructor (length = 0, wirdth = 0){
    this.length = length
    this.wirdth = wirdth
    }
    getS= function ( length, wirdth){
      console.log( this.length*this.wirdth)
       
} 
getP= function ( length, wirdth){
    console.log( this.length+this.wirdth)
     
} 
}
const rectangle1= new Rectangle ( 10, 10)

rectangle1.getS()
rectangle1.getP()


async function sum (a,b){// async for asinhroonnyi functiom
    return a+b
}
console.log(sum(10,100))


async function sum (a,b){
    for ( let i = 0; i <1000; i++){
        if (i=12)
    
    return a+b*2}
}
console.log(sum(10,100))

async function sum (a,b){
    
    
    return await setTimeout (() =>{// await cant be without async. and in syns func i cant use async
     return    a+b 
    }, 3000)
    
}
console.log(sum(10,100))

// console.log( new Promise ((resolve, reject)=>{
//     cons
// }))

sum (100,400).then(res=>console.log(res))