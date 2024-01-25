//herencia

/*function Person() {
  this.name = "";
  this.lastname = "";
}

function Programmer() {
  this.language = "";
}

//esta heredando las propiedades de la clase persona
Programmer.prototype = new Person();

const person = new Person();
person.name = "Andres";
person.lastname = "Sabino";
console.log(person);

//instancia para ver que tipo de dato es programador
const programmer = new Programmer();
programmer.name = "Johnny";
programmer.lastname = "Jorges";
programmer.language = "Javascript";

console.log(programmer);*/

// herencia con class

class Person {
    constructor(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }
  }
  
  //super sirve para jalar la informacion de la clase padre
  class Programmer extends Person {
    constructor(name, lastname, language) {
      super(name, lastname);
      this.language = language;
    }
  }
  
  const person = new Person("maria", "perez");
  
  console.log(person);
  
  const programmer = new Programmer("Johnny", "Jorges", "Javascript");
  
  console.log(programmer);
  