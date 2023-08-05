// Sample JavaScript code (100 lines)

// Lines 1-20
console.log("Hello, world!");

function add(a, b) {
  return a + b;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// Lines 21-40
for (let i = 0; i < doubled.length; i++) {
  console.log(`Doubled number at index ${i}: ${doubled[i]}`);
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Lines 41-60
const people = [person1, person2];

function displayPeople(people) {
  for (const person of people) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }
}

displayPeople(people);

const isEven = num => num % 2 === 0;

// Lines 61-80
const evenNumbers = numbers.filter(isEven);

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(`Sum of even numbers: ${sum(evenNumbers)}`);

const greet = name => `Hello, ${name}!`;

// Lines 81-100
function greetPeople(people) {
  for (const person of people) {
    console.log(greet(person.name));
  }
}

greetPeople(people);

// End of sample code
