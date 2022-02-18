function square(value) {
    let square = value * value
    return square
}
console.log(square(12))

function manUGoal(value) {
    let goal = value
    goal++
    return goal
}
console.log(manUGoal(2))

let nums = [1, 2, 3, 4, 5]
for (let i = 0; i < nums.length; i++){
  if(i == 2){
    console.log('i have stopped');
    break;
  }
  console.log(nums[i])
}

//for ...in
const names = {
    fname: 'Alamin',
    sname: 'Juma',
    lname: 'Magoti',
}
for (const name in names) {
    // console.log(name)
    // console.log(names[name])
    console.log(`${name}` + ` ${names[name]}`.toUpperCase())
}

function reverse(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
     reversed =reversed + str[i]
    }
    return reversed
  }
  console.log(reverse('cat'));
  function isPalindrom(str){
    if(str === reverse(str)){
      console.log(`${str} is a palidrom`)
    }
    else {
      console.log(`${str} is not a palidrom`)
   }
   return str
  }
  console.log(isPalindrom('cat'));
  console.log(isPalindrom('mum'));
  console.log(isPalindrom('MUM'));
  console.log(isPalindrom('mum MUM'));






