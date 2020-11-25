const obj1 = "abc"
console.log(JSON.stringify(obj1))
const obj2 = 123
console.log(JSON.stringify(obj2))
const obj3 = false
console.log(JSON.stringify(obj3))
const obj4 = { a: 123 }
console.log(JSON.stringify(obj4))
const obj5 = { func: () => console.log('Hi!') }
console.log(JSON.stringify(obj5))
const obj6 = { func: () => console.log('Hi!'), a: 123 }
console.log(JSON.stringify(obj6))
const obj7 = {property: undefined}
console.log(JSON.stringify(obj7))