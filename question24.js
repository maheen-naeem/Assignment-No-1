//question no 24
//test for equality and inequality
var step1 = "Hello";
var step2 = "hello";
console.log(step1 === step2); //false
console.log(step1 !== step2); //true
//test using the lowercase function
var var1 = "Hello";
var var2 = "hello";
console.log(var1.toLowerCase() === var2); //true
console.log(var1.toLowerCase() !== var2); //false
/* Numerical tests involving equality and inequality , greater
 than and less than , greater than or equal to , and less than or equal to */
var num1 = 15;
var num2 = 20;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 < num2); //true
console.log(num1 > num2); //false
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
var z = 15;
console.log(x < y && y < z); //true, both conditions are true
console.log(x < y || y > z); //true, at least one is true
console.log(x > y && y < z); //False,both conditions are false
console.log(x > y && y > z); //False,both conditions are false
//Test whether an item is in an array
var fruits = [
    "Apple", "Banana", "Orange", "Grape"
];
console.log(fruits.includes("Banana")); //true
console.log(fruits.includes("sparrow")); //false
//Test whether an item is not in an array
var color = [
    "red", "white", "green", "purple"
];
console.log(!color.includes("maroon")); //true
console.log(!color.includes("green")); //false
