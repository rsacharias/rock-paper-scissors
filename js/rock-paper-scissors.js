function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ").toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors")
        return null;
    return choice;
}

function playGame(rounds) {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == null)
            console.log("Invalid move!");

        if (humanChoice == computerChoice)
            console.log("Tie!");
        else {
            if (humanChoice == "rock") {
                if (computerChoice == "paper") {
                    console.log("You lose! Paper beats Rock.")
                    computerScore++;
                }
                else {
                    console.log("You win! Rock beats Scissors.")
                    humanScore++;
                }
            }
            else if (humanChoice == "paper") {
                if (computerChoice == "rock") {
                    console.log("You win! Paper beats Rock.")
                    humanScore++;
                }
                else {
                    console.log("You lose! Scissors beat Paper.")
                    computerScore++;
                }
            }
            // humanChoice == scissors
            else {
                if (computerChoice == "rock") {
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                }
                else {
                    console.log("You win! Scissors beat Rock.");
                    humanScore++;
                }
            }
        }
    }

    for (let i = 0; i < rounds; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore)
        console.log("Congrats! You won!");
    else if (humanScore < computerScore)
        console.log("Sorry! You losed!");
    else
        console.log("Nobody won!");
}

let rounds = 5;

playGame(rounds);

