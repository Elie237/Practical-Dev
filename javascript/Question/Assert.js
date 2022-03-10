const info = {
    name: 'Amina',
    age:23,
}
info['age']=24
console.log(info)
// info.age =27
// console.log(info)

const info2 = {
    name: 'Amina',
    age:27,
}
let key ='age';
let value = 31;
info2['age']= value;
console.log(info2)
console.assert(JSON.stringify(info)===JSON.stringify(info2),'wrong result')