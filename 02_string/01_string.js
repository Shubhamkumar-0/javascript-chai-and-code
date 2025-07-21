const name="shubham "
console.log(name)
const num=50;
// console.log(name+num+" value")
console.log(`hello my name is ${name} and my roll number is ${num}`);

const gamename=new String("shubham")
console.log(gamename.length)//7
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));//u
console.log(gamename.indexOf('u'));//2


// slice->substring
const str="kohli"
const str1=str.substring(0,2); //last index will not include
console.log(str1);//ko
console.log(str);//kohli->oringinall value remain
const str2=str.substring(-2,2); //negative index also can take
console.log(str2);//ko


// Trim................................
let st = "   Hello, World!   ";
let trimmedStr = st.trim();
console.log(trimmedStr); // Output: "Hello, World!"

let startTrimmed = st.trimStart();
let endTrimmed = st.trimEnd();

console.log(startTrimmed); // Output: "Hello, World!   "
console.log(endTrimmed);   // Output: "   Hello, World!"


