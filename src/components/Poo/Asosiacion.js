//asociación

class Person {
    constructor(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }
  }
  
  const john = new Person("John", "ray");
  const maria = new Person("Maria", "Perez");
  
  //asociación padre
  maria.parent = john;
  
  //asociación hijo
  maria.children = john;
  
  console.log(maria);
  console.log(john);
  