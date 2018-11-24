/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundscore,activePlayer,sum,gamePlaying,score;
//start stuff
newgame();
//stuff
function diceRoll(rolld){
  var dice = Math.floor(Math.random()*6)+1;
  var diceDOM = document.querySelector('.'+rolld);
  diceDOM.style.display = 'block';
  diceDOM.src ='dice-'+dice+'.png';
  return dice;
}
document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gamePlaying==true){
    var dice = diceRoll('dice');
    var dice2 = diceRoll('dice2');
    console.log(dice,dice2);

    if(dice !== 1 && dice2 !== 1){
      roundScore+=dice+dice2;
      document.getElementById('current-'+activePlayer).textContent = roundScore;
    }
    else{
      changePlayer();
    }
  }
}
);
document.querySelector('.btn-hold').addEventListener('click',function() {
  if(gamePlaying==true){
    scores[activePlayer] += roundScore;
    roundScore=0;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    var input = document.querySelector('.final-score').value;
    if(!input)
      input = 20;
    if(scores[activePlayer]>=input){
        document.querySelector('#name-'+ activePlayer).textContent ='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner');
        gamePlaying=false;
    }
    else {
      changePlayer();
    }
  }
  }
  );
  document.querySelector('.btn-new').addEventListener('click',newgame);

  function newgame(){
    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; // 0 = player 1 1 = player 2
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('#name-0').textContent= 'Player 1';
    document.querySelector('#name-1').textContent= 'Player 2';


  }



  function changePlayer(){
    roundScore = 0;
    document.getElementById('current-'+activePlayer).textContent = '0';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }
