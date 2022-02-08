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
