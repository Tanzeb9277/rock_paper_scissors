let playerScore = 0;
let computerScore = 0;
let games = 0;
const moves = document.querySelectorAll('.play');
for (var i = 0; i < moves.length; i++) {
    moves[i].addEventListener('click', function(e){
        let selection = document.querySelector(`#${e.target.id}`);
        let elements = document.querySelectorAll(".active");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        selection.classList.add('active');
    });
}

const play = document.querySelector("#playRound");
play.addEventListener('click', playGame)


function usersPaly(choice){
    let play = choice;
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
  let selection = document.querySelector('.active').id;
  console.log(selection)
  games++;

    const playerSelection = String.prototype.toUpperCase.call(usersPaly(selection));
    const computerSelection = String.prototype.toUpperCase.call(computersPlay());
    let results = playRound(playerSelection, computerSelection);
    let overall = document.querySelector('#results');
    overall.innerHTML = results;



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

    

    
    document.querySelector('#playerScore').innerHTML =`Player Score: ${playerScore}`
    document.querySelector('#computerScore').innerHTML =`Computer Score: ${computerScore}`

    if(games == 5){
        if (computerScore > playerScore){
            overall.innerHTML = 'Overall Winner: Computer!';
            games = 0;
            computerScore = 0;
            playerScore = 0;
            
        }else if (computerScore < playerScore){
            overall.innerHTML = 'Overall Winner: Player!';
            games = 0;
            computerScore = 0;
            playerScore = 0;
        }else{
            overall.innerHTML = 'Overall Winner: DRAW!';
            games = 0;
            computerScore = 0;
            playerScore = 0;
        }
    }
}

