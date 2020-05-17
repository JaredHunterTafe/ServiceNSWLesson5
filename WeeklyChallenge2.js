
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {


    
    let playerChoice = await askQuestion("Scissors, Paper, Rock? ");
    

    let computerChoice = Math.random();
    
    
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    let compareChoices = function(choice1, choice2) {
        if(choice1 == choice2) {
        return "The result is a tie!";
    }
    
    
    if(choice1 == "rock") {
        if(choice2 == "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    
    
    if(choice1 == "paper") {
        if(choice2 == "rock") {
            return "paper wins";
        } else {
            if(choice2 == "scissors") {
                return "scissors wins";
            }
        }
    }
    
    
    if(choice1 == "scissors") {
        if(choice2 == "rock") {
            return "rock wins";
        } else {
            if(choice2 == "paper") {
                return "scissors wins";
        }
    }





    }
    };
    console.log("User Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);
    
    console.log(compareChoices(playerChoice, computerChoice))
    
}

Program().then(() => {
    process.exit(0);
});