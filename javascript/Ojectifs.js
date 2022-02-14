let info ={
    // String
    name: 'Elblessing',
    secondName: 'Bavon',
    //numbers
    age: 24,
    //boolean values
    isMale: true,
    //arrays
    marks: [24,35,54,56],
}

function reverse(str) {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i]
    
    }
    return reverse
}

// let car = {
//     name: 'ferrari',
//     wheels: 3,
//     cost: '35 kenya million',
//     numberOfWheels: function(){
//         return this.wheels + 1
//     }
// }
// info.car = car
// console.log(info);
// console.log(car.wheels);
// console.log(car.numberOfWheels());

let car = {
    name: 'ferrari',
    wheels: 4,
    cost: '35 kenya million',
    ferrariInfo: function(){
    console.log(`name is  ${this.name} and the cost is ${this.cost}`);
    }
}
info.car = car
console.log(car.wheels);
console.log(car.ferrariInfo());

console.log(info.name + ' ' + info.secondName)
console.log(info.marks[1]);
console.log(info.age);
console.log(info.isMale);
console.log(info.marks);
console.log(info.marks[info.marks.length - 1]);
console.log(info.name.charAt(info.name.length - 1))
// To modify the name to the second
info.name = 'Migisha'
console.log(info.name);
info.secondName = 'Elie'
console.log(info);
info.brother = 'Espoire'
console.log(info);
console.log(reverse('cat'));

