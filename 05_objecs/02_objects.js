// const tinder=new Object() ye ek singleton object hai
// const tinders={}     and ye ek non singleton objects
// both are same 

const tinders={
    id:"123abd",
    email:"tinder@gamil.com",
    name:"tind",
    islogged:false,
} 



const id={
    email:"shuhu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shubham",
            lastname:"kumar"
        }
    }
}
console.log(id.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={1:"a",2:"b"}
// const obj3={obj1,obj2}
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

const obj3=Object.assign(obj1,obj2)
// const obj3={...obj1,...obj2} both same
console.log(obj3) //{ '1': 'a', '2': 'b' }


// object inside the array
const users=[
    {
        id:1,
        email:"id1@.com"
    },
     {
        id:2,
        email:"id2@.com"
    },
     {
        id:3,
        email:"id3@.com"
    },
     {
        id:4,
        email:"id4@.com"
    },
]

users[1].email
console.log(tinders);
console.log(Object.keys(tinders))//return array
// [ 'id', 'email', 'name', 'islogged' ]

console.log(Object.values(tinders))//return array
// [ '123abd', 'tinder@gamil.com', 'tind', false ]

console.log(tinders.hasOwnProperty("islooged"));//false