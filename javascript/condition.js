let marks  = 99.99
//grades from A...E
if(marks > 100){
  console.log('incorrect marks input');
}
else if(marks <= 100 && marks >=61){
  console.log('your grade is A');
}
else if(marks >= 51 && marks <= 60){
  console.log('your grade is B');
}
else if(marks >=41 && marks <=50){
  console.log('your grade is C');
}
else if(marks >= 30 && marks <=40){
  console.log('your marks is D');
}
else if( marks >=0 && marks <=29){
  console.log('your marks is E');
}
else{
  console.log('did not do exam');
}


let name = ('Elie')
if (name === 'Elie' || name === 'Bavon'){
    console.log('same person');
}

let name1 = ('Elie')
if (name1 === 'Elie' && name1 === 'Bavon'){
    console.log('same person');
}

let name2 = ('Abigael')
if (name2 === 'Elie' || name2 === 'Bavon'){
    console.log('same person');
}
else{
    console.log('not you')
}    