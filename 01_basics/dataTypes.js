let name="shubham"
let age=19
let isloggedin=false


/**premitive.....
 * number
 * bigint
 * boolean
 * string=""
 * bull=standalone value
 * undefined
 * symbol=unique
 * 
 * non-premitive.....
 * object
 * 
 */
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(" ");



//DataType conversion.......& Operation......
let score=33;
console.log(typeof score);
console.log(typeof(score));
console.log(" ");


let str="33abc";
console.log(typeof str);
console.log(typeof(str));
console.log(" ");


let conv=Number(str);
console.log(typeof conv);
console.log(conv); //NaN

/**conversion in number then
 * "33"=33
 * "33abc"=NaN
 * true=1;
 * false=0;
 */

let bool=1;
let b=Boolean(bool);//1=>true
console.log(b);//true

/*false will come only for 0 
other wise its always true in boolean conversion

1=>true; 0=>false
""=>false (because its empty string)
"shubham"=>true
*/

let num=33;
let st=String(num);
console.log(" ");
console.log(st);//33
console.log(typeof(st));//string