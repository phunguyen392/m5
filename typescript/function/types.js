//function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//arrow function
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(2, 4));
var abc = function (a, b) {
    return a + b;
};
console.log(abc(2, 4));
//function method
var calculator = {
    add: function (a, b) {
        return a + b;
    }
};
console.log(calculator.add(2, 4));
//function contructor
var Person = /** @class */ (function () {
    function Person(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    return Person;
}());
var person = new Person("John", "123456789");
console.log(person);
