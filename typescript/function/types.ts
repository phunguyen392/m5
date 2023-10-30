//function
function add(a: number, b: number): number {
    return a + b;
  }
  console.log(add(1,2));
  //arrow function
  const multiply = (a: number, b: number): number => {
    return a * b;
  }
console.log(multiply(2,4));
  //function type
  type MathOperation = (a: number, b: number) => number;
const abc: MathOperation = (a: number, b: number): number => {
  return a + b;
}
console.log(abc(2,4));
//function method

const calculator = {
  add(a: number, b: number): number {
    return a + b;
  }
};
console.log(calculator.add(2, 4));
//function contructor
class Person {
  name: string;
  phone: string;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

const person = new Person("John", "123456789");
console.log(person);
