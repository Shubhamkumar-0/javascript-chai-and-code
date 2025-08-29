// {} ---> this is scope.
if(true){
    let a=10;
    const b=20;
    var c=30;
}
// console.log(a)// error
// console.log(b)//error
console.log(c)//30

// GLOBLE SCOPE:->Variables declared in the global scope are accessible from anywhere in your code, including inside functions.
// LOCAL SCOPE:->ariables declared within a function (or block) are local to that function and cannot be accessed from outside it. This is known as function scope or block scope (for let and const).

let a=300;
if(true){
    let a=20;
    console.log("inner:",a);//20-->local scopr variable access
}
console.log("outer:",a);//300 --> global scope variable access


// ...............nested scope.............
function one(){
    const name="shubham";

    function two(){
        const age=20;
        console.log(name);//shubham
        console.log(age)
    }
    // console.log(age);-->error
    two();
    console.log(name);
}
one();


