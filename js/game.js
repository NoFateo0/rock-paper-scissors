let playerSelection ;
let numberRandom;
let computerSelection;
fiveGames();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function computerPlay(numberRandom) {
	if (numberRandom === 1) {
		return "Rock";
	}
	else if (numberRandom === 2) {
		return "Paper";
	}
	else {
		return "Scissors";
	}
}

function singleRound() {
	if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
		return `You win! Scissors beats Paper`;
	}
	else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
		return `You win! Paper beats Rock`;
	}
	else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
		return `You win! Rock beats Scissors`;
	}
	else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
		return `You lose! Rock beats Scissors`;
	}
	else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
		return `You lose! Paper beats Rock`;
	}
	else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
		return `You lose! Scissors beats Paper`;
	}
	else {
		return `It's a draw!`;
	}
}

function startGame() {
	playerSelection = prompt("Choose your fighter!");
	numberRandom = getRandomInt(1,4);
	computerSelection = computerPlay(numberRandom);
	if (playerSelection === null || playerSelection === '') {
		return "Goodbye!";
	}
	return singleRound();
}

function fiveGames() {
	let playerWin = 0;
	let computerWin = 0;
	for (let i = 0; i < 5; i++) {
		let whoWin = startGame();
		if (whoWin === "Goodbye!") {
			return console.log("Goodbye!")
		}
		else if (whoWin.includes("win")) {
			playerWin += 1;
			console.log(whoWin);
		}
		else if (whoWin.includes("draw")) {
			computerWin += 0;
			playerWin += 0;
			console.log(whoWin);
		}
		else {
			computerWin += 1;
			console.log(whoWin);
		}
	}
	console.log(playerWin, computerWin);
	if (playerWin > computerWin) {
		return console.log("Win. GG WP");
	}
	else if (playerWin === computerWin) {
		return console.log("Draw. Try again!")
	}
	else {
		return console.log("Lose. GL next time!");
	}
}