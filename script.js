(function () {
    let humanScore = 0;
    let computerScore = 0;

    function getHumanChoice() {
        let humanChoice;
        while (true) {
            humanChoice = prompt('Your choice (scissors, paper, rock): ').toLowerCase();
            if (["scissors", "paper", "rock"].includes(humanChoice)) {
                return humanChoice;
            } else {
                alert("Invalid choice. Please enter scissors, paper, or rock.");
            }
        }
    }

    function getComputerChoice() {
        const choices = ["scissors", "paper", "rock"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "tie";
        } else if (
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors")
        ) {
            return "human";
        } else {
            return "computer";
        }
    }

    function playGame(humanSelection, computerSelection) {
        const winner = playRound(humanSelection, computerSelection);

        if (winner === 'human') {
            humanScore++;
            console.log(`You won: ${humanSelection} beats ${computerSelection}`);
        } else if (winner === 'computer') {
            computerScore++;
            console.log(`You lose: ${computerSelection} beats ${humanSelection}`);
        } else {
            console.log("It's a tie");
        }
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playGame(humanSelection, computerSelection);
    }

    console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won");
    } else if (humanScore < computerScore) {
        console.log("You lose");
    } else {
        console.log("It's a tie");
    }
})();