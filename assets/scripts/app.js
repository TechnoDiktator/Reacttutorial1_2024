// import { apiKey , anotherVal } from "./util";

// console.log(apiKey);

// console.log(anotherVal)

// console.log("Hello world")

// let userMessage = 1

// console.log(userMessage)
// console.log(userMessage)


// const userMessage2 = "asdhsa"
// userMessage2 = "hsjcksj"



// console.log(0 + " ")




// function greetUser(userName, message = "hello"){
//     console.log(userMessage)
//     console.log(message)

// }



// greetUser("Tarangf" )
// greetUser("" , "what ")

// function greetUser2(userName, message = "hello"){
//     //console.log(userName)
//     //console.log(message)
//     return userName + "and" + message
// }

// console.log(greetUser("Me" , "an idiot"))


// let a  =  prompt()
// let b = prompt()
// let c = prompt()

// let d = a*b/c

// console.log(d)


// function combine(a , b , c){
//     let d = a*b/c
// return d
// }

// export default ()=> {
//     console.log("Hello")
// }



// const user = {
//     name:"asjsd",
//     age:"ashsajhd",
//     greet() {
//         console.log(this.age)
//     }
// };


// class User {
//     constructor(name , age){
//         this.name = name
//         this.age = age
//     }
//     greet(){

//     }
// }




const hobbies = ["jashcjsa" , 'salchlashc' , "ajscjah"]
console.log(hobbies[0]);

hobbies.push("working")

console.log(hobbies)

hobbies.findIndex((item) =>{
    if(item === "Sports"){
        return true
    }
    return false
})


const exclamation = hobbies.map((item) => {
    item + "!"
})

const editedHobbyObjects = hobbies.map((item)=>{
    {item:item}
})
console.log(editedHobbyObjects)


function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects

    let l = numberArray.map((iteem)=>{
        {val : iteem}
    })  
    return l

}


const [userNameData , sirName] = ["Max" , "scjbksajbc"]

console.log(userNameData)
console.log(sirName)



//for object we have to use the same property name or we can use ans alias
const {name , age} = {
    name:"s",
    age:12
}


/*
The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

Here's an example:

function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

*/


function storeOrder({id, currency}) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}
const newhobbies = ["what is up "]
const mergeshobbies = [...hobbies , ...newhobbies]

console.log(mergeshobbies)


const user = {
    name : "tarang",
    sirname : "rastogi"
}
const extendedUser = {
    isAdmin: true,
    ...user

}



for(const hobby of hobbies){
    console.log(hobby)
}












