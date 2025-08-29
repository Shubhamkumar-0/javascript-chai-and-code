const user={
    name:"shubham",
    price:999,
    message:function(){
        // console.log(`${this.name} , welcome to website`);
        console.log(this);  //{ name: 'shubham', price: 999, message: [Function: message] } <--context 1
                            //{ name: 'kohli', price: 999, message: [Function: message] }   <--context 2
    }
}
user.message();//shubham , welcome to website  <--context 1
user.name="kohli";
user.message();//kohli , welcome to website    <--context 2

const add =(n1,n2)=>{
    return n1+n2; //explicit return.
}
console.log(add(3,5));

//in one line's statement there is no need to write retun keyword and {} .. and its called implict return.
const addt =(n1,n2)=>n1+n2;
const addtt =(n1,n2)=>(n1+n2);
console.log(addt(8,5));
console.log(addtt(5,5));

// const object =(n1,n2)=>(name:"shubham");--->>undefined. so use small bracket
const object1 =(n1,n2)=>({name:"shubham"});
console.log(object1())  //{ name: 'shubham' }