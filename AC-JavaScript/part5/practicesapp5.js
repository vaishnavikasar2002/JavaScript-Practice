//part 5 
//twitter post
const post = {
    username: "vaishnavikasar@5",
    content: "This is my love",
    likes:300,
    report:3,
    tags:["aarvi","rahul"]
};

//addd/update value 
const stu = {
    name:"vaishnavi kasar ",
    age:22,
    marks:98.5,
    city:"nashik"
};
// console.log(stu.name);

//practices QS
//1 to 100
let num = Math.floor(Math.random()*100)+1;

//guessing Game
// const user=prompt("Enter the mix number");

// const  random = Math.floor(Math.random()* user)+1;

// let guess = prompt("guess the number");

// while (true) {
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }

//     if (guess == random ){
//         console.log("u are right!congo!");
//         break;
//     }  else if(guess < random){
//         guess=prompt("your guess was to small. please try again");
//     }  else{
//         guess=prompt("your guess was to large. please try again");
//     }

// }

//practices QS 
//Qs1 
let dice =Math.floor( Math.random() * 6 ) + 1; 
console.log(dice);

//Qs2
let cars = {
    name:"maruti",
    model:"xyz",
    color:"black",
};
console.log(cars);

//Qs3
let person = {
    name:"chetan",
    age:22,
    city:"yeola",
};

console.log(person.city="new york");
console.log(person.country="india");

//part6
//function in js 
function hello(){
    console.log("hello");
}
hello();


//QS 1
function calcAvg (a,b,c) {
let avg= (a+b+c)/3;
    console.log(avg);
}
calcAvg(2,4,6);

//Qs2
function table(n) {
    for(let i=n;i<=n*10; i+=n){
        console.log(i);
    }
}

table(22);

//QS
function sum(n) {
    let sum = 0;

    for(let i=1 ; i<=n; i++){
        sum=sum+i;
    }
    return sum;
}

// 
let arr = [1,2,3,4,5];
let newArr= [...arr];

