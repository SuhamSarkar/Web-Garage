console.log("Custom JScript for function")

// // manual block
let numbers ={
    a:10,
    b:20
}
// console.log(numbers)

// //array

// //type1
// let arr1 = [1,2,"suham sarkar"]
// console.log(arr1)


// //type2
// let arr = new Array (1,2,"suham")
// console.log(arr)




//Functions in JScript
//function (functionName){} 
//call a single varible in the function,   {functionName(variableName)}


//call objects using function. example 01:
let num2 ={
    a:10,
    b:20
}
num (num2)
function num(numbers){
    console.log(numbers)
}


//functions example 02:
let name1 ="Suham";
let name2 ="Rohan";
let name3 ="Rahul";
let newArr = new Array (1,2,"suham");
greet (name1);
greet (name2);
greet (name3);
greet (newArr)

function greet(age){
    console.log(age + " hello good Morning");
}

//using multiple parameters in a function

function studentProfile(students, age){
    console.log(students + " hi how are you" + " age is: " + age)
}
let people1 ="Suham"
let people2 ="Rahul"
let people3 ="Rohan"
let age1 =20;
let age2 =21;
let age3 =22;
studentProfile(people1, age1)
studentProfile(people2, age2)
studentProfile(people3, age3)




//using ddefault value in a function
function details(names, position=" You got the first place"){
    console.log("Hi " + names + " how are you" + position)
}

let student1 = "XXX";
let student2 = "yyy";
let student3 = "zzz";
position = " Second place"
details(student1, position);
details(student2);
details(student3, position);



//Finding min and max number
//nothing gets execute after the return
function minMax(a,b){
    let value = a>b;
    return value;
}

// let a = 100;
// let b = 20;
let returnVal = minMax(20,1);
console.log (returnVal)