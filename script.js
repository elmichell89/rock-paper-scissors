//ROCK-PAPER-SCISSORS

//Registers the player election
//Generates the IA election
//Compares both elections
//Shows the winner and adds point to his score
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomGenerated = Math.random();

    switch (true) {
        case (randomGenerated > 0.6 && randomGenerated < 1):
            computerChoice = "Scissors";
        break;
        case (randomGenerated > 0.3 && randomGenerated < 0.6):
            computerChoice = "Paper";
        break;
        case (randomGenerated < 0.3):
            computerChoice = "Rock";
        break;
    }
    return computerChoice;
    //console.log(randomGenerated);
    //console.log(computerChoice);
}

function getHumanChoice(){
    let choice = Number(prompt("Select an option:\n 1: Rock\n 2: Paper\n 3: Scissors"));

    if(choice === 1){
        humanChoice = "Rock";
    }else if(choice === 2){
        humanChoice = "Paper";
    }else if(choice === 3){
        humanChoice = "Scissors";
    }else{
        alert("Error, that's not a valid choice");
    }

    return humanChoice;
    //console.log(humanChoice);
}


function playRound(humanChoice, computerChoice){
    switch (true) {
        case (humanChoice == "Rock" && computerChoice == "Rock"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + " so its a TIE");
        break;
        case (humanChoice == "Rock" && computerChoice == "Paper"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + ", YOU LOSE");
            console.log("PC Score: "+ (computerScore = computerScore + 1));
        break;
        case (humanChoice == "Rock" && computerChoice == "Scissors"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + ", YOU WIN");
            console.log("Your Score: " + (humanScore = humanScore + 1));
        break;
        case (humanChoice == "Paper" && computerChoice == "Rock"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + ", YOU WIN");
            console.log("Your Score: " + (humanScore = humanScore + 1));
        break;
        case (humanChoice == "Paper" && computerChoice == "Paper"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + " so its a TIE");
        break;
        case (humanChoice == "Paper" && computerChoice == "Scissors"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + ", YOU LOSE");
            console.log("PC Score: " + (computerScore = computerScore + 1));
        break;
        case (humanChoice == "Scissors" && computerChoice == "Rock"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + ", YOU LOSE");
            console.log("PC Score: " + (computerScore = computerScore + 1));
        break;
        case (humanChoice == "Scissors" && computerChoice == "Paper"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + ", YOU WIN");
            console.log("Your Score: " + (humanScore = humanScore + 1));
        break;
        case (humanChoice == "Scissors" && computerChoice == "Scissors"):
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice + " so its a TIE");
        break;
    }
}


function playGame(){
    for (let i = 0; i <= 4; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore){
        console.log("Your final score: " + humanScore + "\n" + "PC final score: " + computerScore);
        alert("YOU WIN!!");
    }else if(humanScore < computerScore){
        console.log("Your final score: " + humanScore + "\n" + "PC final score: " + computerScore);
        alert("YOU LOSE!");
    }else{
        console.log("Your final score: " + humanScore + "\n" + "PC final score: " + computerScore);
        alert("TIE")
    }
}