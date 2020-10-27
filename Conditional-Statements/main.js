/* Conditional-Statements-Exercises*/


// Exercise 1
let numChildren = prompt("Please enter the number of the childrens:")
const isCareful = false

if(!isCareful){
    numChildren++
} 
console.log(numChildren)   


/****************************************************************************** */

//Exercise 2
const silverwareCount = 223
if(silverwareCount%2!=0){
   console.log("there's something missing!!")
}
    

/****************************************************************************** */


//Exercise 3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarbonus = 3000

if(performance == "good"){
    salary +=goodBonus
} else if(performance == "stellar"){
    salary +=stellarbonus
}

/****************************************************************************** */


//Exercise 4
const isVIP = false
let cash = 500

if(!isVIP || cash>300){
    console.log("Welcome to the club!")
} else{
    console.log("No entrance!!")
}


/******************************************************************************* */


//Exercise 5
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2
 
//a value : 3
//b value : 15
//c value : 12
//d value : 160



/*********************************************************************************** */


//Exercise 6
const gender = null
let profession = "business"

if(gender==null){
    console.log(profession+"person")
}else if(gender=="male"){
    console.log(profession+"man")
}else{
    console.log(profession+"woman")
}


/************************************************************************************* */


//Exercise 7

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
let howLongAgo


if( boughtTesla && isUSCitizen ){
    howLongAgo=currentYear-yearOfTeslaPurchase
    if(howLongAgo>=4){
        console.log("Would you like an Upgrade ?")
    }else{
        console.log("Are you satisfied with the car ?")
    }
}

else if( boughtTesla && isUSCitizen==false ){
    console.log("Would you like to move to the US ? ")
}

else if( boughtTesla==false ){
    console.log("Are you interested of buying a new Tesla car ? ")
}