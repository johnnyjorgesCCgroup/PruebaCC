//objeto
const user1 = {
    name: "ryan",
    lastname: "ray",
    age: 30,
    showFullName() {
      return `${this.name} ${this.lastname}`;
    },
  };
  
  //constructor
  function Person() {
    this.name = "";
    this.lastname = "";
    this.age = 0;
    this.showFullName = function () {
      return `${this.name} ${this.lastname}`;
    };
  }
  
  //creando nuevo objeto
  const user2 = new Person();
  user2.name = "Johnny";
  user2.lastname = "Jorges";
  user2.age = 26;
  console.log(user2.showFullName());
  
  const user3 = new Person();
  user2.name = "Johnny";
  user2.lastname = "Jorges";
  user2.age = 26;
  console.log(user3.showFullName());
  
  const user4 = new Person();
  user2.name = "Johnny";
  user2.lastname = "Jorges";
  user2.age = 26;
  console.log(user2.showFullName());
  
  console.log(user3.showFullName());
  