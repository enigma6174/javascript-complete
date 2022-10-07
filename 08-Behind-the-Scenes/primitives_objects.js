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
