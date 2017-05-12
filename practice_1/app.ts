// string type
let myName = 'Max'
// Type '55' is not assignable to type 'string'.
// reassigning to number throws err
// in regular JS, we can do this
// myName = 55
let hisName: string
hisName = 'John'

// number type
let myAge = 26.5
// Type '"potato"' is not assignable to type 'number'.
// myAge = 'potato'

// boolean type
let hasHobbies = true
// Type '1' is not assignable to type 'boolean'.
// hasHobbies = 1
let iAmAwesome: boolean
iAmAwesome = false

// explicity assign types
let myKoreanAge: number
myKoreanAge = 28
// Type '"28"' is not assignable to type 'number'.
// myKoreanAge = '28'

// array type
let foods = ['pizza', 'pineapple']
alert(foods[1])
// Type 'number[]' is not assignable to type 'string[]'.
// Type 'number' is not assignable to type 'string'.
// TypeScript is expecting an array of strings
// foods = [1, 2]

// the `any` type allows for relaxed reassignment
let sizes: any
sizes = ['a', 'b']
sizes = [1, 2]

// tuple type
// order is important in a tuple type
let identifier: [string, number] = ['Joseph', 26]
let cityState: [string, string] = ['Baltimore', 'Maryland']
let bankDeposit: [number, string] = [999, 'AJF26KAJASDF']

// enum type
enum Color { Red, Green, Blue }
let myColor: Color = Color.Green
console.log(myColor) // outputs: 1

// you can also explicity declare values for each enum
enum Car {
  Toyota     = 111,
  Hyundai    = 222,
  Mitsubishi = 333
}
console.log(Car.Toyota + Car.Hyundai + Car.Mitsubishi) // outputs: 666

// any type
// this is basically a regular, JavaSCript, dynamic type
let myVar: any
myVar = 'dog'
myVar = 123
myVar = false
