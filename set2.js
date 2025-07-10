//1. array sum
const sum = (a, b) => a + b;
console.log(sum(5,4));

//2. Template Literals - Greeting Message
function greet(name) {
    console.log(`Hello, ${name}! Welcome`);
}
greet('Alice')

//3. Destructuring Arrays - First Two Elements
let arr = [10, 20, 30, 40];
let [first, second] = arr;
console.log(first, second);

//4. Destructuring Objects - User Name and Age
const obj = {fname: 'Alice', age: 30, city: "New York"}
const {fname, age} = obj;
console.log(fname)
console.log(age);

//5. Spread Operator - Concatenate Arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a = [...a1, ...a2];
console.log(a);

//6. Default Parameters - Simple Power Function
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log(power(2));

//7. map() - Double Numbers
const num = [1, 2, 3, 4];
console.log(num.map(n => n*2));

//8. filter() - Even Numbers
const n = [1, 2, 3, 4, 5, 6];
console.log(n.filter(num => num % 2 == 0));

//9. Classes - Basic Dog Class
class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }

    bark() {
      return `${this.name} says Woof!`;
    }
  }

  const myDog = new Dog("Buddy", "Golden Retriever");
  console.log(myDog.bark());

//10. Modules - Simple Export/Import
// refer app.mjs and math.mjs

//11. Rest Parameters - Sum All Arguments
function sumAll(...numbers) {
    return numbers.reduce((sum, curr) => sum + curr, 0);
}
console.log(sumAll(1, 2, 3));

//12. Object Destructuring with Renaming and Defaults
const obj1 = { id: 1, email: "john@example.com" };
let {id : userId, firstName: fullName = "Guest", email} = obj1;
console.log(userId, fullName, email);

//13. Nested Destructuring - User Address
const ob = { user: { names: "Jane", address: { street: "Main St", city: "Anytown" } } };
const {user: {names, address: {street, city}} }= ob;
console.log(names, street, city);

//14. Spread Operator - Deep Clone (Shallow)
const o1 = {a: 1, b: {c: 2}};
const copy1 = {...o1};
copy1.a = 10;
console.log(o1.a);
console.log(copy1.a);
copy1.b.c = 20;
console.log(o1.b.c);
console.log(copy1.b.c);
// Top-level primitives (like a: 1) are copied by value.
// Nested objects (like b: { c: 2 }) are copied by reference, so both original.b and copy.b point to the same object in memory.

//15. Promises - Simulate API Call
function fetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id % 2 === 0){
                resolve({id: id, data: "Some data"});
            }else{
                reject("Id must be even");
            }
        }, 1000);
    });
}
fetchData(4)
    .then(result => {
        console.log("Resolved:", result);
    })
    .catch(error => {
        console.error("Rejected:", error);
    })
fetchData(5)
    .then(result => {
        console.log("Resolved:", result);
    })
    .catch(error => {
        console.error("Rejected:", error);
    })


//16. Async/Await - Fetch and Handle Error
async function getData(id) {
    try {
        const result = await fetchData(id);
        console.log("Data:", result);
    } catch(error) {
        console.error("Error:", error);
    }
}
getData(9);
getData(8);

//17. reduce() - Calculate Total Price
const p = [{item: "A", price: 10}, {item: "B", price: 20 }, { item: "C", price: 30 }];
const totalPrice = p.reduce((total, current) => {
    return total + current.price;
}, 0);//initial value of total=0
console.log(`Total price = ${totalPrice}`);
//or
//const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
//console.log(totalPrice);

//18. reduce() - Group by Property
const b = [{ type: "fruit", name: "apple" }, { type: "vegetable", name: "carrot" }, { type: "fruit", name: "banana" }];
const c = b.reduce((acc, {type, name}) => {
    (acc[type] = acc[type] || []).push({ name });
    return acc;
}, {});
console.log(c);
// or
// const grouped = items.reduce((acc, currentItem) => {
//     const { type, name } = currentItem;
  
//     // Initialize the array for this type if it doesn't exist
//     if (!acc[type]) {
//       acc[type] = [];
//     }
  
//     // Push only the { name } object
//     acc[type].push({ name });
  
//     return acc;
//   }, {});

//19. Classes - Inheritance (Animal Kingdom)

class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound() {
        return `${this.name} says 'Woof`;
    }
}


class Dog1 extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    makeSound(){
        return 'woof';
    }
}


const genericAnimal = new Animal("Animal");
console.log(genericAnimal.name);
console.log(genericAnimal.makeSound());
const dog = new Dog1("Dog", "breed");
console.log(dog.name);
console.log(dog.breed);
console.log(dog.makeSound());

//20. Modules - Default Export and Named Import
//refer utils.js and app.js

//21. Ternary Operator - Conditional Rendering Logic
function displayStatus(isLoggedIn) {
    return isLoggedIn ? "Welcome back!" : "Please log in.";
}
console.log(displayStatus(true));

//22. find() - Find First User by ID
const user = [{id: 1, na: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"}];
const useers = user.find(u => u.id === 2)
console.log(useers);

//23. some() and every() - Array Check
// some() returns true if at least one element satisfies the condition. 
// every() returns true only if all elements satisfy the condition.
const numb = [2, 4, 6, 8];
console.log(numb.some(e => e > 5));
console.log(numb.every(e => e % 2 === 0));

//24. Classes - Getters and Setters
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    set dimensions({ width, height }) {
        this.width = width;
        this.height = height;
    } 
}

const r = new Rectangle(5, 3);
console.log(r.area);
r.dimensions = { width: 4, height: 2};
console.log(r.area);

// 25. Promise.all() - Parallel API Calls
async function fetchAllData() {
    try {
        const results = await Promise.all([
            fetchData(1),
            fetchData(2),
            fetchData(3)
        ]);
        console.log("Resolved data:", results);
    }catch(error){
        console.error("Error:", error);
    }
}
fetchAllData();

//26. Promise.race() - Fastest API Call
async function fetchFastest() {
    try {
        const result = await Promise.race([
            fetchData(1),
            fetchData(2),
            fetchData(3)
        ]);
        console.log("First settled result:", result);
    } catch (error) {
        console.error("First settled error:", error);
    }
}
fetchFastest();

//27. Generator Functions - Simple Sequence
function* idGenerator() {
    let id = 1;
    while(true) {
        yield id;
        //pauses the generator and returns the current id each time .next() is called.
        id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//28. Modules - Mix of Named and Default Exports
//refer utils.js and app.js

//29. Destructuring Function Parameters
function displayUserInfo({ nam, a, ci = "Unknown"}) {
    console.log(`Name: ${nam}, Age: ${a}, City: ${ci}`);
}
displayUserInfo({ nam: "Alice", a: 30, ci: "New York" });

//30. Symbol - Unique ID
function createUniqueId() {
    return Symbol();
}
const id1 = createUniqueId();
const id2 = createUniqueId();
console.log(id1);
console.log(id2);
console.log(id1 === id2);