// This file is just a reference. If you try to run without commenting things out, you will run into errors

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`)
  }
}

module.exports = Person
