const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"

// accountId = 2 //Not possible
accountEmail = "abbc@gmail.com"
accountPassword = "9900"
accountCity = "patna"
let accountState //Undefined

console.log(accountId)
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])