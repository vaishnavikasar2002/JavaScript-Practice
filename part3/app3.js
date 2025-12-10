//str.trim
let msg = "     hello      ";
console.log(msg);
console.log(msg.trim());

//toUpperCase
let name = "vaishnavi kasar";
console.log(name.toUpperCase());

//toLowerCase
let name1 = "CHETSN PAWAR";
console.log(name.toLowerCase());

//indexOf
let str = "ilovecoding";
console.log(str.indexOf("love"));
console.log(str.indexOf("mauu"));

//method chaining
let abc = "    hello";
console.log(abc);
console.log(abc.trim());
abc = abc.toUpperCase();
console.log(abc);

let msg1 = "   vaishnavi";
let newMsg = msg1.trim().toUpperCase();
console.log(newMsg);

//slice method
let msg2 = "hellovaishnavi";
console.log(msg2.slice(4, 13)); //start and end
console.log(msg2.slice(5)); //start from
console.log(msg2.slice(-4)); //length 14 - 4 = 10 index 10 pasun print hoil //navi

//replace
let str1 = "ILoveCoding";
console.log(str1.replace("Love", "Do"));
console.log(str1.replace("C", "D"));

//repeat
let str2 = "Love";
console.log(str2.repeat(3));

//practice Qs
//Qs 1
let namee = "helpplease";
let newNamee = namee.trim().toUpperCase();
console.log(newNamee);

//Qs 2
let name2 = "ApnaCollege";
console.log(name2.slice(4, 9));
console.log(name2.indexOf("na"));
console.log(name2.replace("Apna", "Our"));

//Qs 3
let name3 = "ApnaCollege";
console.log(name3.slice(4).replace("l", "t").replace("l", "t"));

//array
let students = ["vaishnavi", "chetan", "rahul"];
console.log(students);

//visualizing array
let num = [2, 4, 6, 8];
console.log(num);
console.log(num[1]);
console.log(typeof num); //object

//creating arrays
let marks = [99, 85, 93, 76, 62];
let names = ["vaishnavi", "chetan", "rahul"];
let info = ["aman", 25, , 6.1]; //mixed array
let newArr = []; //empty array
console.log(newArr); //[] empty brakets and index is 0
console.log(names[0]); // print a string - vaishnavi
console.log(names[0][1]); // print string and access a charcter of index 1 - a
console.log(names[1].length);

// arrays are mutable
let names1 = ["akshda", "tejas", "aman"];
names1[2] = ["sid"];
console.log(names1);
names1[6] = ["asmita"];
console.log(names1);

//array methods
let car = ["audi", "bmw", "maruti"];
console.log(car);
console.log(car.push("xyz")); //4
console.log(car);
console.log(car.pop());
console.log(car);
console.log(car.unshift("pqr"));
console.log(car);
console.log(car.shift());
console.log(car);

let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(followers);

//pracitice Qs
let months = ["januray", "july", "march", "august"];
console.log(months);
months.shift();
console.log(months);
months.shift();
console.log(months);
months.unshift("june");
console.log(months);
months.unshift("july");
console.log(months);

// indexof
let color1 = ["pink", "blue", "yellow"];
let color2 = ["orange", "green", "violet"];
console.log(color1.indexOf("gray")); //-1
console.log(color2.indexOf("orange")); //0

//includes
console.log(color1.includes("pink"));
console.log(color1.includes("PINK"));
console.log(color1.includes("gray"));

//concat
console.log(color1.concat(color2));

//reverse
console.log(color2.reverse());

//slice
let colors = ["pink", "blue", "yellow", "orange", "green", "violet"];
console.log(colors.slice());
console.log(colors.slice(3));
console.log(colors.slice(1, 4));
console.log(colors.slice(-4));

//splice
console.log(colors.splice(5));
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "navy"));
console.log(colors);
console.log(colors.splice(1, 0, "darkspink", "white"));
console.log(colors);

//sort
let color = ["pink", "blue", "yellow", "orange", "green", "violet"];
console.log(color.sort());

let seq = [2, 66, 667, 44, 33];
console.log(seq.sort());

let char = ["a", "n", "k", "r", "b"];
console.log(char.sort());

//practice Qs
//Qs1
let newMonths = ["january", "july", "march", "august"];
console.log(newMonths.splice(0, 2, "july", "june"));
console.log(newMonths);

//Qs2
let subject = [
  "c",
  "c++",
  "html",
  "css",
  "javascript",
  "python",
  "java",
  "c#",
  "Mysql",
];
console.log(subject.reverse());
console.log(subject.indexOf("javascript"));

//array referance
let arr2 = ["a", "b", "c"]; //true
let arrCopy = arr2;
console.log(arrCopy);
console.log(arr2 == arrCopy);
console.log(arr2.push("d"));
console.log(arrCopy);
console.log(arr2);

let arr4 = ["a", "b", "c"]; //false
let arr5 = ["p", "q", "r"];
console.log(arr5);
console.log(arr4);
console.log(arr5.push("i"));
console.log(arr5);
console.log(arr4 == arr5);

//const array
const arr = [1, 2, 3];
console.log(arr.push(4)); //array const asla tri element vr operation perform karu shakto
console.log(arr);
console.log(arr.pop(4));
console.log(arr);
// arr = [5, 6, 7]; //error const array la new array assign karu shakat nahi
// console.log(arr);

//nested arrays
let nums = [
  [1, 2],
  [3, 4],
  [5, 6, 5],
];
console.log(nums);
console.log(nums.length);
console.log(nums[0].length);
console.log(nums[1]);
console.log(nums[1][1]); //4

//practices Qs
let arr1 = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
console.log(arr1);
// arr1[0][1] = "O";
// console.log(arr1);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//practices QS js part 3
// आपल्याकडे एक array आहे — म्हणजे values चा group. आपल्याला त्या array मधून फक्त पहिली n values (elements) घ्यायच्या आहेत. यासाठी JavaScript मध्ये आपण .slice() हा method वापरू शकतो.
// slice(start, end) हा method array मधील ठराविक भाग काढून देतो. आपल्याला सुरुवातीपासून म्हणजे 0 पासून n पर्यंत घ्यायचे आहे.

let array = [7, 9, 0, -2];
let n = 3;
let ans = array.slice(0, n);
console.log(ans);

//QS 2
let lastArr = [7, 9, 0, -2];
let p = 3;
let ans1 = lastArr.slice(-p);
console.log(ans1);

//Q3
let str3 = prompt("Please enter a string str3");
if (str3.length == 0){
    console.log("string is empty"); //string n print karta ok kela tr = empty
}else {
    console.log("string is not empty");
}

//Q4
let str4 = "ApNaCoLlEgE";
let idx = 8;//E

if (str4[idx] == str4[idx].toLowerCase()) {
  console.log("character is lowercase");
} else {
  console.log("character is not lowercase");
}

//Q5
let str5 = "           hello dear vaishnvai ";
console.log(`Origninal strings = ${str5}`);
console.log(`String without spaces = ${str5.trim()}`);

//Q6
let arr3 = ["hello", "a", 23, 45, 86];
let itemToCheck = 90;
if (arr3.indexOf(itemToCheck) != -1) {
  //if condition check kart aslta tya madhe (0,false) asla tr condition wrong hote , but 90 = -1 he true hot hoti mhanun console madhe exit print hota ,te false karnya sathi aapl ! use keal
  console.log("element exists in array");
} else {
  console.log("element doesnt exist in array");
}
