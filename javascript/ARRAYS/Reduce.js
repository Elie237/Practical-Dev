let food = [
    {name: 'chicken',price: 450},
    {name: 'pilau',price:400},
    {name: 'chips',price:200},
    ];
let price = [400,450,300,200]
let totalprice = price.reduce((prev,next) => {return prev+next});
console.log(totalprice);    


// let food = [
//     {name: 'chicken',price: 450},
//     {name: 'pilau',price:400},
//     {name: 'chips',price:200},
//     ];
// let price = [400,450,300,200]
// let totalprice = price.reduce((check) => {return check.price > 200});
// console.log(totalprice); 


const race = "100m dash"

const runners = ["Usain Bolt","Asafa Powell","Justin Gatlin"]

result = runners.map((runners) => ({runners}))
console.log(result)
