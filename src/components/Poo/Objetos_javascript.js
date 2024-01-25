//nuevo objeto creado a partir del constructor object
const person = new Object(12);

console.log(person);

const person2 = {};
console.log(person2.constructor === Number);

const string = new Object("hello world");
string.name = "hola mundo";
string.descripcion = "lorem ipsum";
string.test = function () {
  return this + " " + "test";
};

console.log(string.name, string.descripcion, string.test());

const user = {
  name: "",
  lastname: "",
  age: 30,
  showName() {
    return this.name;
  },
};

console.log(Object.keys(user));
console.log(Object.values(user));
