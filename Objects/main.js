//Exercise 1
let p1 = {
    name:"Eyal" , 
    age:"29" , 
    city:"Haifa"
}

let p2 = {
    name:"aa" , 
    age:"29" , 
    city:"Tel-Aviv"
}

if(p1.age==p2.age){
    if(p1.city==p2.city){
        console.log("Jill wanted to date Robert")
    }else{
        console.log("Jill wanted to date Robert, but couldn't")
    }
}



/*************************************************************************************************** */



//Exercise 2
let myList = [ 
    {item:"Pen",count:2},
    {item:"Book",count:3}
]
console.log(myList)
myList[0].item="Pencil"
console.log(myList)
myList.splice(1,)
console.log(myList)


/***************************************************************************************************** */



//Exercise 3
let myListt = [ 
    {item:"Pen",count:2},
    {item:"Book",count:3} ]

let myListt2 = [ 
    {item:"Pen2",count:2},
    {item:"Book2",count:3} ]

myListt.push(...myListt2)
console.log(myListt)


/******************************************************************************************************** */


//Exercise 4
let Library = {
    books:[{title:"A",author:"1"}],
}
myListt.push(...Library.books)
console.log(myListt)


/********************************************************************************************************** */

//Have to finish Exercise 5-extensions