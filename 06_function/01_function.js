// function name(){
//     console.log("s");
//     console.log("h");
//     console.log("u");
//     console.log("b");
//     console.log("h");
//     console.log("a");
//     console.log("m");
// }
// name();

function add(n1,n2){
    // console.log(n1+n2);
    return n1+n2;
}
add(2,4);//6
add(3,"4");//34
add(2)//NaN
add(2,null)//2

// we can store the value in variable also but when we stor then inside the function use return keyword and outside the function print the stored value ..
const result=add(2,4);
console.log("result:",result);


function user(name){
    if(name==undefined){
        console.log("please enter the name");
    }else{
      return `${name} just logged in`
    }
}
// const name=user("shubham");
const n1=user();
// console.log(name);//shubham just logged in
console.log(n1);


const userr={
    name:"shubham kumar",
    price:20000
}
function handleobject(anyobject){
    console.log(`name is ${anyobject.name} aand prices is ${anyobject.price}`);

}
handleobject(userr);