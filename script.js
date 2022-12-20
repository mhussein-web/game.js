let computerChoice = ''

function numberToChoice(){

   const randomNumber = Math.round(Math.random() * 2)

   if (randomNumber == 0){
    computerChoice = 'rock'
   } else if (randomNumber == 1) {
    computerChoice = 'scissors'
   } else if(randomNumber == 2) {
    computerChoice = 'paper'
   }

   return computerChoice
}
function playerChoice(){

let playerDecision = prompt("Please enter either Rock, Paper or Scissors your choice").toLowerCase().trim();

while (playerDecision == ''){
    return null
}

if (playerDecision == 'rock'){
    return 'rock'
} else if (playerDecision == 'paper'){
    return 'paper'
} else if (playerDecision == 'scissors'){
    return 'scissors'
}
}


let result = '';


function playRound(playerSelection, computerSelection) {


    if (playerSelection == 'rock' && computerSelection == 'paper'){

        result = 'Loss'

        return("You Lose! Paper beats Rock" + result)
    } else if (playerSelection == 'rock' && computerSelection == 'rock'){
        result = 'Tie'
        return("It's a tie" + result)
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        result = 'Win'
        return("You win, Rock beats Scissors" + result)
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        result = 'Win'
        return("You win! Paper beats rock" + result)
    } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        result = 'Tie'
        return("It's a tie" + result)
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){

        result = 'Loss'
        return("You Lose! Scissors beats Paer" + result)
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){

        result = 'Loss'
        return("You Lose! Rock beats Scissors" + result)
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        result = 'Win'
        return("You Win! Scissors beats Paper" + result)
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        result = 'Tie'
        return("It's a tie" + result)
    } else if (playerSelection == null) {
        return result
    }
    
}


let playerCount = 0
let computerCount = 0


function game(){

    
    
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice(), numberToChoice())

        while (result == ''){
            playRound(playerChoice(), numberToChoice())
        } 

        if (result == 'Win'){
            playerCount += 1
        } else if (result == 'Loss'){
            computerCount += 1
        }

        result = ''
        console.log(result,playerCount, computerCount)
    } 
    
    
    if (playerCount < computerCount) {
            console.log("You Lose!")
            return ("You Lose!")
        } else if (playerCount > computerCount){
            console.log("You Win!")
            return ("You Win!")
        } else if (playerCount == computerCount) {
            console.log("It's a draw")
            return("It's a draw")
        }

}

game()