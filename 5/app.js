// First Take the choice of both computer and user
var userChoice = prompt("Do You Choose rock, paper or scissors?");
var compChoice = Math.random();
userChoice = userChoice.toLowerCase();
if (compChoice <= 0.33) {
    compChoice = "paper";
}
else if (compChoice > 0.33 && compChoice < 0.66) {
    compChoice = "scissors";
}
else {
    compChoice = "rock";
}
// Now lets a function to compare
var result;
var win;
function compare(choice1, choice2) {
    if (choice1 == choice2) {
        result = "The Result Is a Tie";
        win = 2;
    }
    else if (choice1 == "rock") {
        if (choice2 == "paper") {
            result = "Paper Wins";
        }
        else if (choice2 == "scissors") {
            result = "Rock Wins";
            win = 1;
        }
    }
    else if (choice1 == "paper") {
        if(choice2 == "rock") {
            result = "Paper Wins";
            win = 1;
        }
        else if (choice2 == "scissors") {
            result = "Scissors Wins";
        }
    }
    else if (choice1 == "scissors") {
        if (choice2 == "paper") {
            result = "Scissors Wins";
            win = 1;
        }
        else if (choice2 == "rock") {
            result = "Rock Wins";
        }
    }
    else{
        alert("Please Make sure that you choose from paper rock and scissors only");
        result = "Error";
        win = 0;
    }
}
// Now lets find the result

compare(userChoice, compChoice);
document.getElementById('result').innerHTML= result;
if (win === 1) {
    document.getElementById('comments').innerHTML= "CONGRATULATIONS YOU WON!";
}
else if(win === 0) {
    document.getElementById("comments").innerHTML = "DON'T TRY TO BE OVERSMART!";
}
else if(win === 2) {
    document.getElementById('comments').innerHTML = "YOU CAN DO IT!"; 
}
else{
    document.getElementById('comments').innerHTML= "BETTER LUCK NEXT TIME";
}
document.getElementById('user').innerHTML = userChoice;
document.getElementById('comp').innerHTML = compChoice;