import { compose } from "redux"

/** This is for clear spaces.*/ 
function  removeSpaces( str) {
   return  str.split(" ").join("")
}
// console.log(removeSpaces("abc efg ijk"));


/** This is for repeatString.*/ 
function repeatString(str) {
    return str + str   // str.repeat(2)  yai bhi kar skte hai/we can also use it.
}



/** This is for upperCase */
function upperCase(str) {
    return str.toUpperCase()
}
// console.log(upperCase("this is the upperCase string"));



/** kay hoga jab one by one code ko excute karna hoga  */
const str = "this is one by one code excution"

const outpur = upperCase(repeatString(removeSpaces(str)))
console.log(outpur);


/**  Now we introduce the Redux(compose) */

const reduxComposeResult = compose(removeSpaces , repeatString , upperCase)
console.log(reduxComposeResult(str));