function usersPaly(){
    let play = prompt("Rock, Paper, or Scissors");
    return play;
}

function computersPlay(){
    let arr = ["Rock", "Paper", "Scissors"]
    let play = arr[Math.floor(Math.random() * 3)]
    return play;
}

function playRound(playerSelection, computerSelection){
    let results;

    if (playerSelection === computerSelection){
        results = 'DRAW';
    }else if (playerSelection =='ROCK' && computerSelection =='PAPER'){
        results = 'Computer Wins'
    }else if (playerSelection =='ROCK' && computerSelection =='SCISSORS'){
        results = 'Player Wins'
    }else if (playerSelection =='PAPER' && computerSelection =='ROCK'){
        results = 'Player Wins'
    }else if (playerSelection =='PAPER' && computerSelection =='SCISSORS'){
        results = 'Computer Wins'
    }else if (playerSelection =='SCISSORS' && computerSelection =='ROCK'){
        results = 'Computer Wins'
    }else if (playerSelection =='SCISSORS' && computerSelection =='PAPER'){
        results = 'Player Wins'
    }

    return results;

}
function playGame(){
  let playerScore = 0;
  let computerScore = 0;
  let overall;
  for (let i = 0; i < 5; i++){
    const playerSelection = String.prototype.toUpperCase.call(usersPaly());
    const computerSelection = String.prototype.toUpperCase.call(computersPlay());
    let results = playRound(playerSelection, computerSelection)
    alert(results)

    switch(results){
        case "Player Wins":
            playerScore++;
            break;
        case "Computer Wins":
            computerScore++;
            break;
        default:
            break;
    }
    console.log(`Player Score: ${playerScore}`, `Computer Score: ${computerScore}`)
  }

  if (computerScore > playerScore){
    overall = 'Overall Winner: Computer!'
  }else if (computerScore < playerScore){
    overall = 'Overall Winner: Player!'
  }else{
    overall = 'DRAW!'
  }
  return overall;

}

alert(playGame())