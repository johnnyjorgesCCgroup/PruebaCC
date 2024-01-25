//instancia o new

const mankind = {
    Person: function(){
      this.name = ""
      this.lastname = ""
      }
    }
  
  //instancia
  const person = new mankind.Person()
  console.log(person)
  console.log(mankind + "\n")
  
  
  //constructor
  function Person1(name, lastname){
    this.name = name
    this.lastname = lastname
    this.displayName = function(){
      return `${this.name} ${this.lastname}`
      }
    }
  
  //instancia
  const john = new Person1("Johnny", "Jorges")
  john.name = "John"
  console.log(john.displayName())
  
  const mario = new Person1("Mario", "Rossi")
  console.log(mario.displayName())
  
  const maria = new Person1("Maria", "Rossette")
  console.log(maria.displayName() + "\n")
  
  //crear una funcion solo para john instanciando de person1
  john.greet = function(){
    return `Hello I'm ${this.name}`
  }
  
  //crear una funcion para todo person1 pero que solo se pueda llamar en la instancia
  Person1.prototype.greet = function(){
    return `Hello I'm ${this.name}`
  }
  
  Person1.prototype.age = 100
  
  console.log(john.greet())
  console.log(mario.greet())
  console.log(maria.greet() + "\n")
  
  const s = new String("hello world")
  String.prototype.concatTest = function() {
    return this + " " + "test";
  }
  
  console.log("My name is " + s.concatTest())
  
  console.log(s.concatTest())
  
  