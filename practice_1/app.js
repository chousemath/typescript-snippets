"use strict";
// string type
var myName = 'Max';
// Type '55' is not assignable to type 'string'.
// reassigning to number throws err
// in regular JS, we can do this
// myName = 55
var hisName;
hisName = 'John';
// number type
var myAge = 26.5;
// Type '"potato"' is not assignable to type 'number'.
// myAge = 'potato'
// boolean type
var hasHobbies = true;
// Type '1' is not assignable to type 'boolean'.
// hasHobbies = 1
var iAmAwesome;
iAmAwesome = false;
// explicity assign types
var myKoreanAge;
myKoreanAge = 28;
// Type '"28"' is not assignable to type 'number'.
// myKoreanAge = '28'
// array type
var foods = ['pizza', 'pineapple'];
alert(foods[1]);
// Type 'number[]' is not assignable to type 'string[]'.
// Type 'number' is not assignable to type 'string'.
// TypeScript is expecting an array of strings
// foods = [1, 2]
// the `any` type allows for relaxed reassignment
var sizes;
sizes = ['a', 'b'];
sizes = [1, 2];
// tuple type
// order is important in a tuple type
var identifier = ['Joseph', 26];
var cityState = ['Baltimore', 'Maryland'];
var bankDeposit = [999, 'AJF26KAJASDF'];
// enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // outputs: 1
// you can also explicity declare values for each enum
var Car;
(function (Car) {
    Car[Car["Toyota"] = 111] = "Toyota";
    Car[Car["Hyundai"] = 222] = "Hyundai";
    Car[Car["Mitsubishi"] = 333] = "Mitsubishi";
})(Car || (Car = {}));
console.log(Car.Toyota + Car.Hyundai + Car.Mitsubishi); // outputs: 666
// any type
// this is basically a regular, JavaSCript, dynamic type
var myVar;
myVar = 'dog';
myVar = 123;
myVar = false;
// explicitly declaring return type of function
function returnMyAge() { return myAge; }
alert('my age is: ' + returnMyAge());
// void type explicity declares that a function does not return anything
function justShout() { alert('just shout baby!'); }
justShout();
// explicity declare function argument types
function add(num1, num2) { return num1 + num2; }
alert(add(123, 321));
function subtract(num1, num2) {
    return num1 - num2;
}
alert(subtract(100, 1));
function concatStrings(string1, string2) {
    return string1 + ' ' + string2;
}
// function types
var myNewFunc;
myNewFunc = subtract;
alert(myNewFunc(200, 50));
var myNewFunc2;
myNewFunc2 = concatStrings;
alert(myNewFunc2('Hello', 'world!'));
// object types
// for objects in TypeScript, name of properties is important
var obj1 = { a: 1, b: 'hello' };
// Type '{}' is not assignable to type '{ 'a': number; 'b': number; }'.
// Property ''a'' is missing in type '{}'.
// obj1 = {}
// reassignment is okay so long as all the property names match up
obj1 = { a: 123, b: '321' };
// you can be explicit with the names and types of properties
var obj2 = { x: 32.5, y: 124.2 };
// create complex objects
var obj3 = {
    val1: [1, 2, 3],
    val2: function (myString) {
        return myString.split('');
    }
};
alert(obj3.val2("hello"));
