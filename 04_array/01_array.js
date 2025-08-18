const arr=[1,2,3,4,5]
const arr1=["hii","hello","heyy",2,3]
const arr2=new Array(1,2,3,4,5)
console.log(arr);
console.log(arr1);
console.log(arr2);

arr.push(6)
arr.push(8)
arr.push(9)
arr.push(0)
arr.pop()
arr.pop()
arr.pop()
console.log(arr)

const a=arr.join()//convert it in string
console.log(a) //1,2,3,4,5,6
console.log(typeof a)//string


const marvel=["thor","ironman"]
const dc=["superman"]
// marvel.push(dc)     //["thor","ironman",["superman"]]
//generate multiple array so its not a good method.
// console.log(marvel)

const all=marvel.concat(dc) //[ 'thor', 'ironman', 'superman' ]
//generate a single new array inside add all the value not the whole arry .its a good method to add the data of one to another array
console.log(all)


const newall=[...marvel,...dc] //[ 'thor', 'ironman', 'superman' ]
console.log(newall)


console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]

let score1=100
let score2=200
let score3=200
console.log(Array.of(score1,score2,score3));//[ 100, 200, 200 ]