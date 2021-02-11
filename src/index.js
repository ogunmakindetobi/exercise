/*let country = " Ireland";
const continent = "Europe";
let population = 5;
console.log(country);
console.log(continent);
console.log(population);
*/

// boolean and typeof
/* var javaIsFun = true;
console.log(javaIsFun);
console.log(typeof javaIsFun);
console.log(typeof 23);
console.log(typeof 'tobi');
*/

/*
var isIsland = false;
var language;
console.log(typeof isIsland);
console.log(typeof "population");
console.log(typeof "country");
console.log(typeof "language");


let age;
age = 24;

const birthYear = 1995;


const ageToby = 2021 - 1995
const ageTina= 2037 - 2018;
console.log(ageToby, ageTina);


let name ="tobi";
let nameLetters=name.split("");
console.log(nameLetters);



// Run this in a javascript console
let counter = 0

for (counter = 5; counter < 10; counter = counter) { 
  console.log(counter);
}

// Math operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 1990;
console.log(ageJonas, ageSarah);

// assigment operator.
let x = 10 + 5; // 15
x += 10; // x = x + 10
x * 4; // x = x * 4
x++; // x = x + 1
x--;
console.log(x);

// conparison operator
console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)


let markWeight= 78;
let markHeight= 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let BMIMark = markHeight / johnWeight ** 2;
let BMIJohn = johnWeight / (johnHeight * johnHeight)
console.log(BMIMark, BMIJohn)

 

// Aray element
let secoundList= ["candy", "icecream"]

const shoppingList = ["milk", " tomatoes", " toffu", " cheese"];
console.log(shoppingList)
console.log([0])
console.log(shoppingList.length);
shoppingList.pop(); //remove element cheease
shoppingList.push("bread", "fish");// Its push element back into array.

// at the begging
shoppingList.unshift("apple");// push eletemt before array
shoppingList.shift();

console.log(secoundList.concat(secoundList));// means the list wr shoud'nt buy..adding in shoppingList.


// working with Array

const priceList=[2,5,6,56,100,123,56]
const sortedList = priceList.sort(function compare(a, b){
return a - b;
})


// fliter arrays

const fliteredList = priceList.fliter(function flterHelper(element){
if(element > 50){
return true
}
return false
})

 // sum all the numbers

 const sum = priceList.reduce(function reduceHelper(acc, element){
return acc + element
 }, 100)
 console.log(sum)


 let num1 = [2,3,4,5,6,7];
let num2 = num1.map(multiply);
function multiply(value){
return value *2
}
console.log(num1,num2)


let carsName = ["honda", "bmw", " benz", "peajots"]
carsName.unshift("a new one");
console.log(carsName)


const emptyList = [null]; // change this line
console.log(emptyList)



const americanCars = ["Ford", "Tesla"];
const germanCars = ["BMW", "Mercedes"];
console.log(americanCars.concat(germanCars))


const italianFood = ["Pizza", "Pasta"];
const germanFood = ["Wrust", "Sauerbraten"];
const spanishFood = ["Tortilla", "Paella"];

// TODO: Build the full european food list
const europeanFood = null; // italianFood.concat( ... )
console.log(italianFood.concat(germanFood,spanishFood))


const productList = [
  {
    name: "Milk",
    price: 3,
  },
  {
    name: "Banana",
    price: 14,
  },
  {
    name: "Muffin",
    price: 9,
  },
];
productList.sort((a,b) => a.price - b.price)
console.log(productList)


// for Each function

const numbers=[1,2,3,4,5,10,50]
let sum = 0;
 numbers.forEach(item =>{
  sum += item;
 });

 console.log(sum);


// 3.2 Filter cars based on color
// TODO: Filter the red cars using a customer filter function
const carList = [
  {
    name: "Mercedes",
    color: "BLUE",
  },
  {
    name: "BMW",
    color: "RED",
  },
  {
    name: "Tesla",
    color: "BLACK",
  },
  {
    name: "Mercedes",
    color: "RED",
  },
];


const redCarList = carList.filter((item) =>{
return item.color === 'RED'
}); 
console.log(redCarList)


const listItems = [
{name: 'Bike', price: 100 },
{name: 'Tv', price: 200 },
{name: 'Album', price: 10 },
{name: 'Book', price: 5},
{name: 'Phone', price: 500 },
{name: 'Computer', price: 1000},
{name: 'Keyboard', price: 25 }
]

const nameItems = listItems.reduce((currentTotal, item) => {
return item.price  + currentTotal  
},0);
console.log(nameItems)
*/

/*let markWeight= 78;
let markHeight= 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let BMIMark = markHeight / johnWeight ** 2;
let BMIJohn = johnWeight / (johnHeight * johnHeight)
console.log(BMIMark, BMIJohn)


let firstName = "Alicia";
let job = "socialmedia";
let birthYear = "1990";
let year = 2027;

const alica = `i'am ${firstName}, a ${job}`
console.log(alica)


// 2.4 Use forEach to iterate over an array
const carList = [
  "red_ford",
  "blue_ford",
  "green_ferrari",
  "red_toyota",
  "yellow_tesla"
];
carList.forEach(function extractRedCars(item, index, array) {
  if (item) {
  }
  console.log(carList);
  // if a car is red
  // push the cart to the red list: redCarList.push(car)
});



const carList = [
  "red_ford",
  "blue_ford",
  "green_ferrari",
  "red_toyota",
  "yellow_tesla",
];
const redCarList = []

// TODO: Modify this function to push the red cars in the redCarList
carList.forEach(item => {
if(carList  === 
  
// forEach 

 const wordList = ["I", "am", "a", "rockstar", "!"];

 // Task: Modify this function build a sentence
 // function sentenceBuilder(sentence, word) { }
 
 const sentence = wordList.reduce((memory, item) => {
   return memory + "_" + item
 }, ""); 
  console.log(sentence)
  
//reduce...
 const sumNumberList = [1, 3, 45, 67, 75, 3, 8, 93, 4, 45, 18];

 const sum = sumNumberList.reduce((sum, item) =>{
console.log(sum, item)
   return sum + item
 },0)
console.log(sum) 

//Arrays (excs)
// 4.1 Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
	return arr[0]
}

// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500
  


// 4.2 Given two arguments, return an array which contains these two arguments.
function makePair(num1, num2) {
	return [num1,num2]
}
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]
  
  
  
  
  // 4.3 Create a function to find the biggest value in the array
  function max(arr) {
    let max = 0;

    arr.forEach(element => {
        if (element > max) {
            max = element
        }
    });

    return max
}
console.log(max([1, 0, 2]))
console.log(max([1, 4, 3]))
max([1, 0, 2])
max([1, 4, 3]) 
max([1, 5, 9, 3]) 
  


const wordList = ["i", "am", "a", "rockstar", "!"];
const sentence = wordList.reduce((memory, item) =>{
return  memory + "-" + item
},"");
  console.log(sentence)
  

 function makePair(num1, num2) {
  return num1 + num2
  }

 const longestWord = 'The black sheep is at the backyard'

 const word = longestWord.split('')
 console.log(word[4,8,10])
 

 let hiddenQuote = [
  "Those",
  "people",
  "who",
  "are",
  "happy",
  "enough",
  "to",
  "think",
  "they",
  "can",
  "change",
  "the",
  "world",
  "are",
  "the",
  "ones",
  "who",
  "-Michael Jordan'",
];
// .1
const quote = hiddenQuote.shift();
const quote1 = hiddenQuote.unshift("The");
const quote2 = hiddenQuote.pop("-Michael Jordan","happy");
const quote3 = hiddenQuote.push("do");
const quote4 = hiddenQuote.indexOf(4)
 console.log(hiddenQuote)
   */


/*const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' +(year - birthYear)  + 'years old ' + job + '!';
  console.log(jonas)
  

 let markWeight= 78;
 let markHeight= 1.69;
 let johnWeight = 92;
 let johnHeight = 1.95;
 let BMIMark = markHeight / johnWeight ** 2;
 let BMIJohn = johnWeight / (johnHeight * johnHeight)

if(markWeight >  johnWeight){
 let BMIMark
}else{
let BMIJohn
}
console.log(`Mark's ${BMIMark}, is higher than john's ${BMIJohn}` )
*/

const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);

  console.log(Number('Joans'))
  console.log(typeof NaN)

  console.log(String(23),23)
  
  
  
  
  
