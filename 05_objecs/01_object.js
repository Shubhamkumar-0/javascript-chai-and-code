//objects literals
// In JavaScript, an object is a complex data type that allows you to store collections of data and more complex entities. Objects are essential for organizing and manipulating data in a structured way.

const mysm=Symbol("key1");

const jsuser={
    name:"shubham", //name=="name" default so need to write like "name"
    age:18,
    [mysm]:"key1-1",
    location:"punjab",
    email:"shubhamkumarhrt1@gmail.com",
    isloggedin:false,
    lastloggedin:["monday","saturday"],

}
// console.log(jsuser.age);//18
// console.log(jsuser["age"]);//18
// console.log(jsuser[mysm])

jsuser.email="shubh@.com"//we can overwrite using equal to sign
// Object.freeze(jsuser)
jsuser.email="hii@gmail.com"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello js user")
}
jsuser.greet=function(){
    console.log(`hello js user, ${this.name}.`)
}
console.log(jsuser.greeting())
console.log(jsuser.greet())