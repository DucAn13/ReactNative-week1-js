// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are 
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the 
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% 
// above and 10% below the recommended portion (see hint).
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
// the recommended food portion and add it to the object as a new property. Do 
// not create a new array, simply loop over the array. Forumla: 
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
// food, and the weight needs to be in kg)
dogs.map(x=>{
    x.recommendedFood = x.weight ** 0.75 * 28;
    console.log(x);
    return x;
})
// 2. Find Sarah's dog and log to the console whether it's eating too much or too 
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
// the owners array, and so this one is a bit tricky (on purpose) 
dogs.filter(x=>x.owners.includes('Sarah')).forEach(x=>{
    (x.curFood>x.recommendedFood*1.1)&&console.log('Eating too much');
    (x.curFood<x.recommendedFood*0.9)&&console.log('Eating too little');
})
// 3. Create an array containing all owners of dogs who eat too much 
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
// ('ownersEatTooLittle').
let ownersEatTooMuch=[];
dogs.filter(x=>x.curFood>x.recommendedFood*1.1).forEach(x=>x.owners.forEach(x=>ownersEatTooMuch.push(x)))
let ownersEatTooLittle=[];
dogs.filter(x=>x.curFood<x.recommendedFood*0.9).forEach(x=>x.owners.forEach(x=>ownersEatTooLittle.push(x)))
// 4. Log a string to the console for each array created in 3., like this: "Matilda and 
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
// too little!"
console.log(ownersEatTooMuch.join(' and ')+'\'s dogs eat too much!');
console.log(ownersEatTooLittle.join(' and ')+'\'s dogs eat too little!');
// 5. Log to the console whether there is any dog eating exactly the amount of food 
// that is recommended (just true or false)
console.log('eating exactly recommend: '+dogs.map(x=>{return x.curFood==x.recommendedFood}))
// 6. Log to the console whether there is any dog eating an okay amount of food 
// (just true or false)
console.log('eating exactly recommend: '+dogs.map(x=>{return x.curFood>=x.recommendedFood*0.9&&x.curFood<=x.recommendedFood*1.1}))
// 7. Create an array containing the dogs that are eating an okay amount of food (try 
// to reuse the condition used in 6.)
let okayDog=dogs.filter(x=>x.curFood>=x.recommendedFood*0.9&&x.curFood<=x.recommendedFood*1.1)
console.log('7/');
okayDog.forEach(x=>console.log(x))
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
// portion in an ascending order (keep in mind that the portions are inside the 
// array's objects �)
let copyDogs=dogs
copyDogs.sort((x,y)=>x.recommendedFood-y.recommendedFood)
console.log('8/');
copyDogs.forEach(x=>console.log(x))
// The Complete JavaScript Course 26
// Hints:
// § Use many different tools to solve these challenges, you can use the summary 
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means: 
// current > (recommended * 0.90) && current < (recommended * 
// 1.10). Basically, the current portion should be between 90% and 110% of the 
// recommended portion.