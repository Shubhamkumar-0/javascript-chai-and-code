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


