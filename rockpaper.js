function getComputerChoice (){
    choice_list = ["ROCK", "PAPER", "SCISSORS"]; /* create a list of possible choice*/
    var computerChoice;
    r_pick = math.random();
    if (r_pick <= 1/3){
        computerChoice = choice_list[0];
    } else if (r_pick <= 2/3) {
        computerChoice = choice_list[1];
    } else {
        computerChoice = choice_list[2];
    }
    console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    choice_list = ["ROCK", "PAPER", "SCISSORS"];
    let index_comp = choice_list.indexOf(computerSelection);
    let index_player = choice_list.indexOf(playerSelection);
    if (index_comp == index_player){
        return console.log("You Draw! Both of you chose ", choice_list[index_comp]);
    } 
    if ((index_comp - index_player) == 1 || (index_comp - index_player) == -2){
        score_comp++;
        return console.log("You Lose! ", choice_list[index_comp], " beats ", choice_list[index_player]);
    }
    if ((index_comp - index_player) == -1 || (index_comp - index_player) == 2){
        score_player++;
        return console.log("You Won! ", choice_list[index_player], " beats ", choice_list[index_comp]);
    }
}

function game(){
    choice_list = ["ROCK", "PAPER", "SCISSORS"];
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Please enter valid choice between Rock, Paper, or Scissor:");
            while (!(choice_list.indexOf(playerSelection.toUpperCase()) >= 0)){
                playerSelection = prompt("Please enter valid choice between Rock, Paper, or Scissor:")
            } 
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Current Score: Player ", score_player, ", Computer: ", score_comp)
    }
    if (score_player > score_comp){
        return console.log("You Win!"," Final Score: Player ", score_player, ", Computer: ", score_comp)
    }

    if (score_player < score_comp){
        return console.log("You Lose!", " Final Score: Player ", score_player, ", Computer: ", score_comp)
    }

    if (score_player == score_comp){
        return console.log("You Tied with Comptuter!"," Final Score: Player ", score_player, ", Computer: ", score_comp)
    }
}
var score_player = 0;
var score_comp = 0;
game();