const user = {
    name: "ryan",
    lastname: "ray",
    age: 30,
    showFullName() {
      return `${this.name} ${this.lastname}`;
    },
  };
  
  const account = {
    number: "1231231231123123",
    amount: 100,
    deposit(quantity) {
      this.amount = this.amount + quantity;
    },
    withdraw(quantity) {
      this.amount = this.amount - quantity;
    },
  };
  
  account.deposit(100);
  account.deposit(50);
  account.deposit(50);
  account.withdraw(10);
  account.withdraw(200);
  console.log(account);
  