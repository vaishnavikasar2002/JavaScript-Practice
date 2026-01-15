// for loop Q1 print 1 t0 10
for(let i=1; i<=10; i++){
    console.log(i);
}

//Q2 even Number from 1 to 20
for(let i=2; i<=20; i=i+2){
    console.log(i);
}

//Q3 Multiplication table of 5
for (let i=5; i<=50; i=i+5){
    console.log(i);
}

// while loop
// let i=1; // 1 to 10 
// while(i<=10) {
//     console.log(i);
//     i++;
// }

let j=2;// print even number
while(j<=20) {
    console.log(j);
    j=j+2;
}

//favorite Food
/*
const favFood = "Pizza";
let guess = prompt("guess my favorite food");

while ((guess != favFood) && (guess != "quit")) {
   guess = prompt("Wrong Food! please try again");
}
if(guess==favFood){
    console.log("Congralation!Y ou guess is right food");
}else {
    console.log("you quit the game");
}
*/

// break keyword
let i=1;
while(i<=10) {
    if(i==5){
        break;
    }
    console.log(i);
    i++;
}

//loop with array 
let colors1 = ["red","green","blue"];
for(let i=0;i<colors1.length;i++){
    console.log(colors1[i]);
}

let nums = [11,22,33,44,55];
for(let i=1;i<nums.length;i=i+2){
    console.log(nums[i]);
} 

let sum = [1,2,3,4,5]; //add the sums //incomplete
for(let i=0;i<sum.length;i++){
    i += sum[i];
    console.log(sum);
}

//nested loop
let arr9 = [[1,2] ,[3,4],[5,6]]; //print 2D array
for (let i=0 ; i<arr9.length; i++){
    for(let j=0; j<arr9[i].length;j++){
        console.log(arr9[i][j]);
    }
    
} 

let arr10 = [[0,15] ,[22,27],[30,33]]; //print even numbers 
for (let i=0 ; i<arr10.length; i++){
    for(let j=0; j<arr10[i].length;j++){
        if(arr10[i][j] % 2 === 0){
             console.log(arr10[i][j]);
        }
       
    }
    
} 

let data = [[15,25],[30,12],[18,50]]; //print greater than 20
for (let i=0;i<data.length; i++){
    for (let j=0; j<data[i].length; j++){
        if(data[i][j] > 20) {
            console.log(data[i][j]);
        }
    }
}

//for of loop

let color1 = ["red","green","blue"]; //print this array
for (i of color1) {
    console.log(i);
}

let word ="hello"; //print each character of the string
for(letter of word) {
    console.log(letter);
}

let numbers = [5,10,15]; //calculate the sum
let sum1=0;

for(num of numbers) {
    sum1 += num ;  
} 
console.log(sum1);

// nasted for of loop 
let arrr = [[1,2],[3,4]] //[print all element]
for(i of arrr) {
    for(num of i ){
         console.log(num);
    }
   
}