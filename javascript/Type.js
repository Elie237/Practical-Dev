//My Name
var myName='Dessai Kibeho';
console.log(myName);
// My Age
var myAge=24;
console.log(myAge);
// my age in 5 years
var myAgeIn5years = myAge+5;
console.log(myAgeIn5years);
var fT ='nor';
var KT ='no';
if (fT===KT) {
    console.log(true);
} else{
    console.log(false);
}
var mykdk='';
console.log(mykdk);
var firtName='Dessai'
var secondName='Kibeho'
var fullName= firtName+' '+secondName
console.log(fullName);
var Name='Dessai Kibeho';
var charD=Name.charAt(7)
console.log(charD + " This is the 8th character");
var LastChar=Name.charAt(Name.length-1)
console.log(LastChar);
/*
substring(start, end)
substr(start, length)*/
console.log(Name.substring(1,8));
console.log(Name.substr(1,8));
// up case and lower  local My name
var upcaseMynames = 'Dessai Kibeho'
console.log(upcaseMynames.toUpperCase());
console.log(upcaseMynames.toLowerCase());
//up  case and lower case local My name
console.log(upcaseMynames.toLocaleLowerCase());
console.log(upcaseMynames.toLocaleUpperCase());
// split() without element
let message = "30 weeks of code"
console.log(message.split());
// split() with element "a space"
console.log(message.split(' '));
// split() with element "w"
console.log(message.split('w'));
// split() with element ", "
let messages = 'Dessai, Kibeho, Kambale'
console.log(messages.split(', '))
// Trim
let msg='    Vanny Kibeho     '
let msg1='vanny Kibeho'
console.log(msg.trim());
console.log(msg1);
// Concat
let kdk1='Dessai'
let kdk2=' Kibeho'
let kdk10='dessai'
console.log(kdk1.concat(kdk2));
// includes
let kdk3="I am dessai kibeho in this fck world"
console.log(kdk3.includes('be'));
console.log(kdk3.includes('0'));
// replace
let kdk4=kdk3.replace('dessai','Kambale')
console.log(kdk4);
//CharCodeAt
let kdk5=kdk3.charCodeAt(0);
let kdk6=kdk10.charCodeAt(0);
console.log(kdk6);
//startsWith
console.log(kdk3.startsWith('I'));
console.log(kdk3.startsWith('i'));
//endsWith
console.log(kdk3.endsWith('world'))
console.log(kdk3.endsWith('World'))