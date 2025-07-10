const accountId=144553
let accountEmail="shubham@google.com"
var accountPassoword="12345"
accountCity="Patna"
let accountState;

// accountId=2 not allowed
accountEmail="hello.gamail.com"
accountPassoword="54321"
accountCity="Nalanda"
console.log(accountId)
/*
prefer not to use var
because of issues in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassoword,accountCity,accountState])