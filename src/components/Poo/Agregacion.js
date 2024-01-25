//agregacion

const company = {
    name: "fazt tech",
    employees: [],
  };
  
  class Person {
    constructor(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }
  }
  
  const john = new Person("John", "ray");
  const maria = new Person("Maria", "Perez");
  
  company.employees.push(john);
  company.employees.push(maria);
  
  console.log(company);
  