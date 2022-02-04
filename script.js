
//gets random value from choice array
function computerPlay() {
    let choice = ["Rock", "Paper", "Scissors"]
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay];
}



//plays a single round of RPS
function playRound(playerSelection, computerSelection) {
    
    //sets player and computer selection to lower case except first letter
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
    console.log("You chose: " + player);
    let computer = computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1).toLowerCase();

    //if player choose rock
    if (player === "Rock"){
        if (computer === "Rock") {
            console.log("It's a tie!");
        }else if (computer === "Scissors") {
            console.log("You win! Rock beats Scissors");
        }else if (computer === "Paper") {
            console.log("You lose! Paper beats Rock");
        }
    }

    //if player choose paper
    if (player === "Paper"){
        if (computer === "Paper") {
            console.log("It's a tie!");
        }else if (computer === "Rock") {
            console.log("You win! Paper beats Rock");
        }else if (computer === "Scissors") {
            console.log("You lose! Scissors beats Paper");
        }
    }

    //if player choose scissors
    if (player === "Scissors"){
        if (computer === "Scissors") {
            console.log("It's a tie!");
        }else if (computer === "Paper") {
            console.log("You win! Scissors beats Paper");
        }else if (computer === "Rock") {
            console.log("You lose! Rock beats Scissors");
        }
    }


}

const playerSelection = "roCk";
const computerSelection = computerPlay();
console.log("Computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {

}