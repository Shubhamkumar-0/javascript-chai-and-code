// immediately invoked function expression (iife)
// ---->using small bracket for this method...
// t is often used to create a local scope and avoid polluting the global namespace.


// name iife
(function chai(){
    console.log(`db connected`)
})();

// un-name iife
(()=>{
    console.log('dbms');
})();

// parameter pass
((name)=>{
    console.log(`${name}`);
})("shubham");