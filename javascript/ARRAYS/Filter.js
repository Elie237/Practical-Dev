// let food = [
// {name: 'chicken',price: 450},
// {name:'pilau',price:400},
// {name:'chips',price:200},
// ];
let price = [400,450,300,200]
let expensiveFoods=price.filter((check) => {return check > 200})
console.log(expensiveFoods);

let food = [
    {name: 'chicken',price: 450},
    {name: 'pilau',price:400},
    {name: 'chips',price:200},
    ];
let filteredFoods = food.filter((check) => {return check.price > 200})
console.log(filteredFoods);    