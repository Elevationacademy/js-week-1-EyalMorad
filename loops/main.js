console.log("******************************************************************")



//Exercise 1
let names = ["aa","bb","cc"]
let ages = ["25","30","35"]
for(let namesIndex in names){
    console.log(names[namesIndex]+" is "+ages[namesIndex]+" years old")
}
console.log("******************************************************************")



//Exercise 2
let numbers= [1,2,3]
let sum=0
for(i in numbers){
    sum+=numbers[i]
}
console.log(sum)
console.log("******************************************************************")



//Exercise 3
let numbers1= [1,2,3,4,5]
let sum1=0,counter=0,avg=0
for(i in numbers1){
    sum1+=numbers1[i]
    counter++
}
console.log(avg=sum1/counter)
console.log("******************************************************************")


//Exercise 4
let nums= []
for(let a=1;a<=100;a++){
    nums.push(a)
}
console.log(nums)
console.log("******************************************************************")



//Exercise 5
let oddArray =[]
for(i=0;i<100;i++){
    if((nums[i]%2)!=0){
        oddArray.push(nums[i])
    }
}
console.log(oddArray)
console.log("******************************************************************")



//Exercise 6
let numss = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689,
     248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 
     596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25,
      785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537,
       890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917,
        324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848,
         227, 349, 243, 837, 21, 954, 146, 11]
for(i=0;i<=numss.length;i++){
    if(numss[i]==709){
        console.log(i)
        break //"jumps out" of a loop
    }
}
console.log("******************************************************************")



//Exercise 7
const namess = ["Ashley", "Donovan", "Lucas"]
const agess = [23, 47, 18]
const peoplee = []
for(let x in namess){
    peoplee.push({name: namess[x], age: agess[x]})
}
console.log(peoplee)
console.log("******************************************************************")



//Exercise 8
for(i=0;i<peoplee.length;i++){
    console.log(peoplee[i].name+" is "+peoplee[i].age+" years old")
}
console.log("******************************************************************")



//Exercise 9
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for(let z in posts){
    if(posts[z].id==2){
        posts.splice(z,1)
    }
}
console.log(posts)


