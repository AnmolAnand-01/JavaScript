// console.log(2 > 1);                 //true
// console.log(2 >= 1);                //true
// console.log(2 < 1);                 //false
// console.log(2 == 1);                //false
// console.log(2 != 1);                //true


// console.log("2" > 1);               //true->due to conversion of string "2" to number 2
// console.log("02" > 1);              //true->due to conversion of string "02" to number 2

// console.log(null > 0);                 //false
// console.log(null == 0);                //false
// console.log(null >= 0);                //true -> the reason is that an equality check == and comparision check >,<,>=,<= work differently. Comprision convert null to a number, treating it as 0. That's why (3rd case) null>=0 is true and case1 and case2 are false.

// console.log(undefined == 0);           //false
// console.log(undefined > 0);            //false
// console.log(undefined < 0);            //false

// // === (strict equality check)

// console.log("2" === 2);                //false
// console.log("2" == 2);                 //true