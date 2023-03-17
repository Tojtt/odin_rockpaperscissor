function getComputerChoice (){
    choice_list = ["ROCK", "PAPER", "SCISSOR"];
    var computerChoice;
    r_pick = random();
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
function playRound(playerSelection, computerSelection, score_player, score_comp) {
    playerSelection = playerSelection.toUpperCase();
    choice_list = ["ROCK", "PAPER", "SCISSOR"];
    let index_comp = choice_list.indexOf(computerSelection);
    let index_player = choice_list.indexOf(playerSelection);
    if (index_comp == index_player){
        return console.log("You Draw!");
    } 
    if ((index_comp - index_player) == 1 || (index_comp - index_player) == -2){
        score_comp++;
        return console.log("You Lose! ", index_comp, " beats ", index_player);
    }
    if ((index_comp - index_player) == -1 || (index_comp - index_player) == 2){
        score_player++;
        return console.log("You Won! ", index_player, " beats ", index_comp);
    }
    return console.log("Please enter valid choice between Rock, Paper, or Scissor");
}

function game(){
    let score_player = 0;
    let score_comp = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = readLine(prompt("Please enter valid choice between Rock, Paper, or Scissor:"));
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection, score_player, score_comp);
    }
    if (score_player > score_comp){
        return console.log("You Win!")
    }

    if (score_player < score_comp){
        return console.log("You Lose!")
    }

    if (score_player > score_comp){
        return console.log("You Tied with Comptuter!")
    }
}