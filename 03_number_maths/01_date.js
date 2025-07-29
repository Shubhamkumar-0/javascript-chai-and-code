let mydate=new Date()
console.log(mydate.toString());//Tue Jul 29 2025 05:03:07 GMT+0000
console.log(mydate.toDateString());//Tue Jul 29 2025
console.log(mydate.toLocaleString());//7/29/2025, 5:03:07 AM
console.log(typeof mydate);// object


let nd=new Date(2025,6,29)
let nd1=new Date(2025,6,29,5,3);
console.log(nd1.toString());
// Tue Jul 29 2025 05:03:00 GMT+0000

let nd2=new Date("2025-07-29")
console.log(nd2.toDateString())
// Tue Jul 29 2025

let nd3=new Date("07-29-2025")
console.log(nd3.toDateString())
// Tue Jul 29 2025


/************ TIME STAMP ************** */
let ts=Date.now();
console.log(ts)//1753765599199 mili second
console.log(nd3.getTime());//1753747200000
console.log(Math.floor(Date.now()/1000));


let d=new Date();
console.log(d);
console.log(d.getMonth());
console.log(d.getDate());