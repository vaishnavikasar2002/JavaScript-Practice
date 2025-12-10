
//String Methods
let str1 = "vaishnavipawar";
console.log(str1.length); //start form 1
console.log(str1.toUpperCase());//convert to uppper case
console.log(str1.toLocaleLowerCase());//convert to lower case
console.log(str1.indexOf("pawar"));//first index
console.log(str1.slice(9));//start and a string
console.log(str1.repeat(2));//how many time are repeat

let str2 ="  apnaclg    "
console.log(str2.trim());//remove whitespace
console.log(str2.replace("apna","sigma")); //replce a string

// Array (Data Structure)
//Array Methods Que self
let studentName = ["Aman","vaishnavi","Chetan","Omkar"];
console.log(studentName);
console.log(studentName.shift());
console.log(studentName.shift());
console.log(studentName.shift());
console.log(studentName);
console.log(studentName.unshift("Usha"));
console.log(studentName.unshift("Ramdas"));
console.log(studentName.unshift("Vaishnavi"));
console.log(studentName);

//splice in array
let fruits = ["Apple","banana","Cherry","date"]; //removing element
console.log(fruits);
console.log(fruits.splice(1,2));
console.log(fruits);

let colors = ["red","green","blue"];
console.log(colors);
console.log(colors.splice(1,0,"yellow","orange")); //adding element
console.log(colors);

let pets = ["dog","cat","rabbit"];
console.log(pets);
console.log(pets.splice(1,1,"hamster"));
console.log(pets);

//self practice
let girlsName = ["vaishnavi","akshada","sakshi"];
let boysName = ["omkar","sid","bhushan","rahul"];
console.log(girlsName);
console.log(girlsName.push("prachi")); //add an element at the end of an array
console.log(girlsName);
console.log(girlsName.pop()); //remove the last element form an array
console.log(girlsName);
console.log(girlsName.unshift("gaytri"));//add an element at the start of an array
console.log(girlsName);
console.log(girlsName.shift());//remove an element at the start of an array
console.log(girlsName);
console.log(girlsName.splice(1,1,"mauu"));//insert or delete element in the middle of an array
console.log(girlsName);
console.log(boysName.concat(girlsName));//merge two arrays into a new array
console.log(boysName);
console.log(boysName.indexOf("omkar"));//find of a particular element in an array
console.log(boysName.includes("chetan"));// check if a particular element in an arrray or not
console.log(boysName.reverse("omkar")); //reverse the order of element in an array
console.log(boysName.sort()); //sort element in an array


// assignment Question
// Q1 arr madgale 1st 3 num print karayche
let n= 3;
let arr6 = [7,9,0,-2];
console.log(arr6.slice(0,n));

//Q2
let n1=3;
let arr7 = [7,9,0,-2];
console.log(arr7.slice(arr7.length-n1));

let p1=3;
let arr = [3,2,7,9,0,-2];
console.log(arr.slice(arr.length-p1));

// let str3 = prompt("please enter a string");
// if(str.length == 0) {
//     console.log("string is empty")
// } else {
//        console.log("string is not empty")
// }
