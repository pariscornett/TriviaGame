$(document).ready(function(){
//global  variables go here
var timeLeft
var correctAnswers = 0;
var incorrectAnswers = 0;
var timedOut = 0;
var gameComplete = false;
var timer = 30;
//make an object containing  var questionOne... var questionFive and a questionOneAnswers ["array"]
var questions = [
    {
        question: "Marsha Rhea Williams was the first black woman in the United States to earn a Ph.D in Computer Science. Where did she earn her degree?",
        options: {
            a:"MIT",
            b: "Stanford", 
            c:"Vanderbilt", 
            d: "Howard"},
    },
    {
        question: "Who is considered the first computer programmer?",
        options: ["Katherine Johnson", "Ada Lovelace", "Radia Perlman", "Dorothy Vaughan"], 
    },
    {
        question: "Rear Admiral Grace Hopper is lauded for this contribution to computing...",
        options: ["FORTRAN", "compilers", "COBOL", "all of the above"],
    },
]

//hide Q&A boxes, show box used for start button 
$(".box2, .box3, .box4, .questionBox").hide();
$(".start").html("Let's Do This");

//create a function to select a question and answer (put "ingredients" here to shuffle through the aforementioned object) MAKE SURE TO PUT ALL OPTIONS INSIDE THIS FUNCTION IN DESIRED ORDER OF APPEARANCE
function loadQuestions(){  
    //set timer to 30 seconds
    var timer = setInterval(progress(),1000 * 30);
    //showe timer in DOM 
    $(".timer").html("Time Left: " + timer);
    //create variable for the question
    var questionOne = questions[0].question;
    //create variable for the list of possible answers
    var questionOneAnswers = questions[0].options;
    //create variable for the correct answer
    var correctAnswer = questions[0].options.c;
    console.log(correctAnswer);
    //insert all of that information into the DOM 
    $(".questionBox").html(questionOne);
    $(".box1").html(questionOneAnswers.a);
    $(".box2").html(questionOneAnswers.b);
    $(".box3").html(questionOneAnswers.c);
    $(".box4").html(questionOneAnswers.d);
}

//make start button clickable
document.getElementById("start")
$(".start").click(function(){
    //show the other boxes we need for remainder of game
    $(" .box1, .box2, .box3, .box4, .questionBox").show();
    //empty the preexisting text in box1 which shares the start class
    $(".start").empty();
    //run function that shows the question and answers text in the DOM 
    loadQuestions();
})

//make a function that shows how well the player is doing after each question 
function progress(){
    //empty existing boxes
    $(".questionBox, .box1, .box2, .box3, .box4").empty();
    //show correct, incorrect and timed out answers in DOM
    $(".correct").html ("You've answered " + correctAnswers + "correctly");
    $(".incorrect").html ("You've answered " + incorrectAnswers + "incorrectly");
    $(".time-out").html ("You've let " + timedOut + " questions time out");  
}

//call to the previous function when timer has run out--use clearTimeout when the user clicks an answer to go ahead and trigger the function and show progress
function grade () {
    if (timer == 0){
        timedOut++;
        progress();
    }
}










//create a function that handles scenarios of the timer runnning out and the user selecting an answer before the timer runs out (think about whether we use VANILLA JS or JQUERY)

//create a function that decides if the answer is right or wrong (put "ingredients" here to go between question and answer pairs)---
    //if right
        //(VANILLA JS) do something
        //(JQUERY) display something in the DOM
    //else this
        //(VANILLA JS) do something
        //(JQUERY) display something in the DOM

//create an *all done* page to summarize the game
    //include a start over function that doesn't reload the game

//end
});














