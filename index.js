// ANSWERS:  **I DIDN'T KNOW WHERE WE WERE SUPPOSED TO PUT THESE SO I'M PUTTING THEM HERE AND IN A TXT DOC. 

// 1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

// forEach() — executes a provided function once for each array element.
// map() — creates a new array with the results of calling a provided function on every element in the calling array.

// .forEach() doesn’t actually return anything. It simply calls a provided function on each element in your array. It can also mutate the array it's calling.
// .map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

// 2. Explain the difference between a callback and a higher order function.

// Higher order function receives a callback as a parameter.
// A callback is a function that gets passed IN as a parameter to a higher order function.

// 3. What is closure?

// - closures give us the ability to put functions together
// - it's the ability to access function from a parent level scope in a child level scope even after that function has been terminated
// - code that's been identified elsewhere that we can use later
// - lexical scope === belonging - where do I come from?
// - we can pass varibales down, but we can't pass them back up
// - INHERITANCE IS A ONE-WAY CHAIN --> YOU CAN PASS VALUES DOWN BUT NOT BACK UP SO A CHILD FUNCTION CAN ACCESS CONTENT AT THE PARENT LEVEL BUT THE PARENT LEVEL CAN'T ACCESS THAT OF THE CHILD LEVEL (CAN GO DOWN BUT NOT BACK UP)

// 4. Describe the four rules of the 'this' keyword.

// 'this' refers to the parent object

// - 1. Window Binding: global scope, no declared object
// - 2. Implicit Binding: declared object
// - 3. 'new' Binding: 'new' operator with constructors/classes
// - 4. Explicit Binding: call(this, arg1, arg2, ...)/apply(this, array) so this refers to the specific object you choose

// 5. Why do we need super() in an extended class?

// The super keyword refers to the parent class. It is used to call the constructor of the parent class and to access the parent's properties and methods.//


//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 

// INHERITANCE IS A ONE-WAY CHAIN --> YOU CAN PASS VALUES DOWN BUT NOT BACK UP...
// .....SO A CHILD FUNCTION CAN ACCESS CONTENT AT THE PARENT LEVEL BUT THE PARENT LEVEL CAN'T ACCESS THAT OF THE CHILD LEVEL



/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */

function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(9));


// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
The zoos want to display both the scientific name and the animal name in front of the habitats. 
Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
*/

const displayNames = [];
zooAnimals.forEach((item) => {
  displayNames.push({
    'Name': item.animal_name,
    'Scientific': item.scientific_name
  });
});
console.log(displayNames);



/* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
The zoo needs a list of all their animal's names converted to lower case. 
Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
For example: ['jackal, asiatic', .....]
*/


const lowCaseAnimals = zooAnimals.map(function (item) {
  return item.animal_name.toLowerCase();
});
console.log(lowCaseAnimals);


/* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
The zoo is concerned about animals with a lower population count. 
Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
*/

const lowPopulationAnimals = (zooAnimals.filter((item) => item.population <= 5));
console.log(lowPopulationAnimals);


/* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
The zoo needs to know their total animal population across the United States. 
Using USApop find the total population from the zoos array using the .reduce() method. 
Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
*/

const USApop = zooAnimals.reduce((total, item) => {
  return total + item.population;
}, 0);
console.log(USApop);


// 🦁🦁🦁 Callbacks 🦁🦁🦁  
/* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
  * Use the higher-order function consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as an argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

// WHAT I DID BEFORE I READ THE REST OF THE INSTRUCTIONS. DECIDED TO LEAVE IT BECAUSE IT WAS MORE WORK THAN THE ACTUAL ASSIGNMENT. 
// const cheer = ['go', 'bananas', 'bee', 'ay', 'en', 'aye', 'enn', 'ayeh', 'ess'];
// // higher-order function:
// function consume(a, b, cb) {
//   cb(a[b]);
// }
// // callback function:
// function logIndex(chosenItem) {
//   console.log(chosenItem)
// }
// consume(cheer, 2, logIndex);

function consume(a, b, cb) {
  return cb(a, b);
}

/* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
// 🦁🦁🦁 Use add to return the sum of two numbers 🦁🦁🦁

// function add(a, b) {
//   return a + b;
// }
const add = (a, b) => a + b;

// 🦁🦁🦁 Use multiply to return the product of two numbers 🦁🦁🦁

const multiply = (a, b) => a * b;

// 🦁🦁🦁 Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!" 🦁🦁🦁

// function greeting(/*Your Code Here */) {
//   return /*Your Code Here */
// }

const greeting = (a, b) => `Hello ${a} ${b}, nice to meet you!`

// 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// 🦁💪 Stretch: If you haven't already, convert your array method callbacks into arrow functions - make sure you comment out this section before you submit your work 🦁💪


// WOO-HOO!!! ALREADY DID IT!


// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴
/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/
function CuboidMaker(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
}


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */

CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
}


/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 
  2 * (length * width + length * height + width * height)  */

CuboidMaker.prototype.surfaceArea = function () {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
}

/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */


let cuboid = new CuboidMaker(4, 5, 5);


// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄
class CuboidMakerTwo extends CuboidMaker {
  constructor(attr) {
    super(attr)
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }

}

const cuboidTwo = new CuboidMakerTwo({
  length: 4,
  width: 5,
  height: 5
})


//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130


// 🦄 💪 Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 🦄 💪






/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  //console.log('its working');
  return 'bar';
}
export default {
  foo,
  summation,
  animalNames,
  lowerCaseNames,
  lowPopulationAnimals,
  USApop,
  consume,
  add,
  multiply,
  greeting,
  CuboidMaker,
  CuboidMakerTwo
}
