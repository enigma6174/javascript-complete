const myObj = {
  name: "john",
  age: 30,
  isEmployed: true,
};

const myArr = [10, 20, 30];

const newObj = myObj;
const newArr = myArr;

myObj.name = "john doe";
myArr.push(99);

console.log("modified myObj and myArr");
console.log("\n");

console.log(myObj);
console.log(myArr);
console.log(newObj);
console.log(newArr);

newArr.push(-111);
newObj.isEmployed = false;

console.log("\nmodified newObj and newArr");
console.log("\n");

console.log(myObj);
console.log(myArr);
console.log(newObj);
console.log(newArr);

console.clear();

const person = {
  name: "john doe",
  age: 30,
  isEmployed: true,
};

const employee = {
  eid: 1001,
  ename: "Harry Smith",
  dept: "Sales",
  locations: ["New York", "Boston"],
  payData: {
    bonus: 2000,
    isDue: false,
    salary: 55000,
  },
};

const personCopy = Object.assign({}, person);
const employeeCopy = Object.assign({}, employee);

console.log(person);
console.log(personCopy);
console.log(employee);
console.log(employeeCopy);

console.log("\nmodifying person and personCopy");

// Modifications to person or personCopy will not reflect on each other
person.name = "Harry Miller";
personCopy.age = 69;
personCopy.isEmployed = false;

console.log(person);
console.log(personCopy);

console.log("\nmodifying employee and employeeCopy");

// Modifications to objects of employee and employeeCopy will reflect on each other
// Object.assign does not perform a deep copy
employee.locations.push("Staten Islan", "Bronx");
employeeCopy.payData.isDue = true;
employeeCopy.payData.bonus = 3500;

// Modifications to primitive types of employee and employeeCopy will not reflect on each other
employee.ename = "Joe Walsh";
employeeCopy.eid = 5500;
employeeCopy.dept = "Human Resource";

console.log(employee);
console.log(employeeCopy);
