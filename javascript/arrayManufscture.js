let catFamily = ['Lion', 'cheetah', 'Leopard', 'cat', 'Bravon']
//lenght = family.length
console.log(catFamily.length);

//Access element
console.log(catFamily[1]);

// print whole array
console.log(catFamily);
console.log(catFamily[catFamily.length -1]);

// Array modification
catFamily[catFamily.length -4];

// change Bravon to jaguar
catFamily[catFamily.length -5] = 'jaguar';
console.log(catFamily);

// Add new value at the end of the array
catFamily.push ('panter')
console.log(catFamily);

// remove a value at the end of the array
catFamily.pop();
console.log(catFamily);

// remove a value from the beginning of an array
catFamily.shift();
console.log(catFamily);

//get index of an array element
console.log(catFamily.indexOf('Lion'));

// print Lion
console.log([catFamily.indexOf('Lion')]);

// Join array element together
let name =['Elie', 'Bavon']
console.log(name.join (''));

let sisters = ['fatmnah' , 'Mich' , 'Hidaya'];
let brother = ['Hassan' , 'Bavon' , ' Jamal'];
let family = sisters.concat(brother);
console.log(family);





const months = ['Jan', 'March', 'April', 'June'];
months.splice(4, 2, 'May');
console.log(months);

let newmonths= months.slice(0,3)
console.log(newmonths);
console.log(months);

// isArray()
console.log(Array.isArray(months));

//Includes()
console.log(months.includes('March'));
console.log(months.includes('December'));




// This is for Splice
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
