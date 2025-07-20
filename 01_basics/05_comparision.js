console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

console.log(null == undefined); // true (both are considered "empty" values)
console.log(null === undefined); // false (strict equality does not perform type coercion)

console.log(null < 0); // false (null is coerced to 0, and 0 is not less than 0)
console.log(null <= 0); // true (null is coerced to 0, and 0 is equal to 0)



console.log(undefined == null); // true (both are considered "empty" values)
console.log(undefined === null); // false (strict equality does not perform type coercion)

console.log("5" > 3); // true (string "5" is coerced to number 5)
console.log("5" < 3); // false (string "5" is coerced to number 5)
console.log("5" == 5); // true (string "5" is coerced to number 5)
console.log("5" === 5); // false (strict equality does not perform type coercion)
