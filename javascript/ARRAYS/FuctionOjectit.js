function pow(a){
    return a*a
}
let info = {
    pow: pow(5),
    massage:'the power is ${this.pow}',
}
console.log(info.massage)


// //function inside the object
// const hero ={
//     name:'Bruce wayne',
//     alias:'Batman',
//     catchphrase:"We will fight",
//     message: function(){
//         return '${this.alia} and ${this.name} ,${this.catchphrase}'
//     },
//     arrowMsg:()=>{
//         alis = 'Mahdi',
//         name = 'Ahmed',
//         return '${alia} and ${name} ,${catchphrase}'
//     }
// }
// console.log(hero.message())



const carOne = {
    color: 'blue',
    status: {
      running: true,
      passengers: 4,
      wiperFluid: 'empty'
    },
    age: 5,
    miles: 50000,
    value: '8000'
  }
  const carTwo = {
    color: 'green',
    status: {
      running: 'yes',
      passengers: 2,
      fuelTank: 'empty'
    },
    value: 9000
  }
  const combinedCar = {
  ...carOne,
  ...carTwo
  }
  console.log(combinedCar)

  
const object = {
    name: 'faisal',
    age: 25,
    is: true,
}
let faisalinfo ={...object}
console.log(faisalinfo)   


letname ='Bavon'
name = 'Elie'
console.log(name)
  
  
  
  