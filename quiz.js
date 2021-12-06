var readLineSync=require("readline-sync");
console.log("----------------");
console.log("QUIZ STARTED");
console.log("----------------");
var quizQuestion=[{
  question:"1. When was the Ashes first played?\n a 1872 \n b 1877 \n c 1882\n d 1887 ",answer: "b"},
{question:"2. Who won the first ever Cricket World Cup in 1975?\n a Australia\n b England\n c India \n d West Indies",answer:"d"},
{question:"3. What is the largest cricket stadium in the world?\n a Eden Gardens\n b Melbourne Cricket Club\n c Lords \n d Narendra Modi Stadium",answer:"d"},
{question:"4. How many ways are there of getting out?\n a 7\n b 8\n c 9 \n d 10",answer:"d"},
{question:"5. How long is the wicket on a cricket pitch?\n a 18\n b 20\n c 22 \n d 24",answer:"c"},
{question:"6. Who did England beat in the final of the 2019 Cricket World Cup?\n a Australia\n b India\n c New Zealand \n d South Africa",answer:"d"},
{question:"7. Which fast bowler has taken the most test wickets?\n a Stuart Broad\n b Dale Steyn\n c Glenn McGrath \n d James Anderson",answer:"d"},
{question:"8. What is the nickname of Sachin Tendulkar?\n a The Little Genius\n b The Little Master\n c The God of Cricket \n d Master Blaster",answer:"d"},
{question:"9. Which Australian player has scored the most test runs?\n a Steve Waugh\n b Don Bradman\n c Ricky Ponting \n d Matthew Hayden",answer:"c"},
{question:"10. Who is the only batsman to record 400 runs in an international Test match?\n a Steve Smith\n b WG Gracer\n c Don Bradman \n d Brian Lara",answer:"d"}
]
var userName=readLineSync.question("What is your name ");
console.log("welcome",userName);
console.log("Let's Play Quiz");
var score=0;
for(var i=0;i<quizQuestion.length;i++){
   console.log(quizQuestion[i].question);
   var userAnswer=readLineSync.question("Enter the correct option a/b/c/d ");
   checkans(quizQuestion[i].answer,userAnswer);
}
function checkans(answer,UserAnswer){
   if(answer===UserAnswer){
     score++;
     console.log("your answer is correct");
   }
   else{
     console.log("your answer is wrong");
   }
   console.log("Current score",score);
   console.log("----------------");
}
console.log("Your final score is",score);
var highScore=8;
var players=[
  {name:"ojasvi",score:8},{name:"devang",score:7},{name:"aditya",score:6},{name:"ashwani",score:5}
]
console.log("Other player Scores ")
for(var i=0;i<players.length;i++){
  console.log("----------------");
  console.log(players[i].name,players[i].score);
}
  console.log("----------------");
if(score>highScore){
  console.log("congratulations you have created a new high score");
}