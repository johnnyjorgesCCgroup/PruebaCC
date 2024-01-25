//encapsulación
function Company(name){
    let employees = []
    this.name = name
  
    //metodo get para leer variables
    this.getEmployees = function(){
      return employees
    }
  
    this.addEmployees = function(employee){
      employees.push(employee)
    }
  }
  
  const company = new Company("Coca Cola")
  
  company.addEmployees({name: "Juan"})
  
  console.log(company)
  console.log(company.getEmployees())
  
  