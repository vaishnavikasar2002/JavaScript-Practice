//objects Literals
//Qs1 👉 const students म्हणजे students हा object बदलू शकत नाही, पण students मधले values बदलू शकतात
const students ={
    name : "vaishnavi",
    age : 22,
    marks : 93
};
console.log(students);

//Qs2
const items = {
    price:500,
    discount:50,
    color:["red","blue"]
};
console.log(items);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//twitter post
const post = {
    username:"@mauu",
    content:"this is my fristPost",
    likes:150,
    Reports:8,
    tags:["aarvi","@rahul"]
};
console.log(post);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//get value 
const student ={
    name : "vaishnavi",
    age : 22,
    marks : 93
};
console.log(student);
console.log(student.name);
console.log(student.marks); 

// ---------------------------------------------------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------------------------------------------------

//conversion in get values
const obj = {
    1:"a",
    2:"b",
    3:"c",
    true:"f",
    null:"m",
    undefined:"v"
};
console.log(obj);
console.log(obj[1]); //output a ======> 1 ha index /num nhi ye js ne tyala bracket madhe string madhe convert kela   so an null,undefine pn string madhe convert kela ye
console.log(obj[true]); //f

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//add /update value
const student1 ={
    name : "vaishnavi",
    age : 22,
    marks : 93
};
console.log(student1.name);
console.log(student1.name="chetan");
console.log(student1);
console.log(student1.gender); //undefined
console.log(student1.gender="male");
console.log(student1);
console.log(student1.marks="A");
console.log(student1);
console.log(delete student1.gender);//true
console.log(student1);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//nested object
const classInfo = {
    aman : {
        branch : "Computer",
        city : "pune",
        collage: "NDMVP"
    },
    rahul : {
        branch : "Computer",
        city : "mumbai",
        collage: "sandipFoundation"
    },
    vaishnavi : {
            branch : "it",
            city : "nashik",
            collage: "sapkal"
    }
};

console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.vaishnavi.city="yeola");
console.log(classInfo.vaishnavi.city);
console.log(classInfo.vaishnavi);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//array of object 
const clsInfo = [
     {
        branch : "Computer",
        city : "pune",
        collage: "MDMVP"
    },
    {
        branch : "Computer",
        city : "mumbai",
        collage: "sandipFoundation"
    },
     {
        branch : "it",
        city : "nashik",
        collage : "sapkal"
    }
];
console.log(clsInfo);
console.log(clsInfo[1]);
console.log(clsInfo[1].city="palghar");
console.log(clsInfo[1]);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//math object
//randam integers from 1 to 10
let step1=Math.random();
console.log(step1);

let step2=step1*10;
console.log(step2);

let step3=Math.floor(step2);
console.log(step3);

// combined code of step 1,2,3
let random=Math.floor(Math.random()*10);
console.log(random);

let random1=Math.floor(Math.random()*10)+1; //+1 kela tr random value 10 parnty jote(minimum value 1 yete) nhi tr 0-9 (minimum value 0 yete)
console.log(random1);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//practices que
//QS 1 - generate a random number between 1 to 100
let random2=Math.floor(Math.random()*100)+1; //+1 kela nhi tr value 0-99 yeil, +1 mule 1-100 yeil
console.log(random2);

//QS 2 - generate a random number between 1 to 5 - (1-4 randam num)
let random3=Math.floor(Math.random()*5+21); //21 to 25 ramdom num 
console.log(random3);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//prscties Qs
//Qs1
let ramdom5 = Math.floor(Math.random()*6 ) + 1;
console.log(ramdom5);

//Q2
const car = {
    name:"swift",
    model:"xyz",
    color:"black"
}
console.log(car.name);

//Q3
const person = {
    name:"chetan",
    age:"23",
    city:"yeola"
    
};
person.city="new York";
person.counrty="United States";
console.log(person);