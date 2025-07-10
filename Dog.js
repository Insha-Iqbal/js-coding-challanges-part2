class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }

    bark() {
      return `${this.name} says: Woof!`;
    }
  }

  const myDog = new Dog("Buddy", "Golden Retriever");
  console.log(myDog.bark());