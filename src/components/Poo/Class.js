class Person {
    constructor(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }
    greet() {
      return `Hello I'm ${this.name} ${this.lastname}`;
    }
  }
  
  const user = new Person("Johnny", "Depp");
  const user2 = new Person("Tony", "Stark");
  
  console.log(user.greet());
  console.log(user2.greet());
  
  console.log(typeof Person);
  
  