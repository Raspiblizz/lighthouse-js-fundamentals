/* The logic should help learners decide which school they should attend. Replace the comment inside the function with your code.

The function returns one of the following strings, based on the value of age:

 Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases. */


let age = ""


console.log(whichSchool(10))

let age = ""
const whichSchool = function (age) {
 
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));


let age = ""
const whichSchool  = function (age) {
  if (age < 13) {
    return 'Elementary School';
   } else if (age => 13 && age <= 18) {
    return 'Secondary School';
  } else { 
    return 'LightHouse Labs';
  } 
}

console.log(whichSchool(10))




const whichSchool  = function (age) {
  for (i = 13; i < 18; i++) {
  expect(whichSchool(i)).to.be.equal("Secondary School");
 }
  for (i = 19; i < 100; i++) {
  expect(whichSchool(i)).to.be.equal("Lighthouse Labs");
}
  for (i = 1; i < 12; i++) {
  expect(whichSchool(i)).to.be.equal("Elementary School");
 }
}


/* (fruit.length > 5)

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));


let fruit = 'orange'
if (fruit.length > 5) {
  console.log('The fruit name has more than five characters.') 
} else { 
  console.log('The fruit name has five characters or less.')
} */ 
