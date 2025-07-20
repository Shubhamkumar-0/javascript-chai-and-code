console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

console.log(null == undefined); // true (both are considered "empty" values)
console.log(null === undefined); // false (strict equality does not perform type coercion)

console.log(null < 0); // false (null is coerced to 0, and 0 is not less than 0)
console.log(null <= 0); // true (null is coerced to 0, and 0 is equal to 0)


console.log(0 == false); // true (0 is loosely equal to false)
console.log(0 === false); // false (strict equality does not perform type coercion)
