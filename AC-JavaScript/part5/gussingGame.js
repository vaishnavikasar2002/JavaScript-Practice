//guessing game : user enter a max number & then tries to guess a random generateed number between 1 to max

const max = prompt("enter the max number");

// console.log(max);

const random = Math.floor(Math.random()*max) + 1;

// console.log(random); //user 46 enter kela tr tyach random no generate hoil

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("You are right! congrats!! random number was",random);
        break;
    } else if(guess < random){
        guess=prompt("hint : you guess was too small.please try again");
    } else{
        guess=prompt("hint : you guess was too larger.please try again");
    }
}