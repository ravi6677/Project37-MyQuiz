var canvas;
var gameState = 0;
var answer, allContestants;
var contestantCount;
var  database;
var quiz, question, contestant;


function setup(){
  canvas = createCanvas(1050,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    gameState = 1;
    quiz.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }

}
