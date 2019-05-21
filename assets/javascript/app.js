//global  variables go here
var timeLeft
var correctAnswers
var incorrectAnswers
var timeoutQuestions
var gameComplete = false;

//hide Q&A boxes, show box used for start button 
$(".box2, .box3, .box4, .questionBox").hide();
$(".start").html("Let's Do This");

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


//make an object containing  var questionOne... var questionFive and a questionOneAnswers ["array"]
var questions = [
    {
        question: "Marsha Rhea Williams was the first black woman in the United States to earn a Ph.D in Computer Science. Where did she earn her degree?",
        options:["MIT", "Stanford", "Vanderbilt", "Howard"],
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


//create a function to select a question and answer (put "ingredients" here to shuffle through the aforementioned object) MAKE SURE TO PUT ALL OPTIONS INSIDE THIS FUNCTION IN DESIRED ORDER OF APPEARANCE
function loadQuestions(){
    //create variable for the question
    var questionOne = questions[0].question;
    //create variable for the list of possible answers
    var questionOneAnswers = questions[0].options;
    //create variable for the correct answer
    var correctAnswer = questionOneAnswers[2];
    //insert all of that information into the DOM 
    $(".questionBox").html(questionOne);
    $(".box1").html(questionOneAnswers[0]);
    $(".box2").html(questionOneAnswers[1]);
    $(".box3").html(questionOneAnswers[2]);
    $(".box4").html(questionOneAnswers[3]);
    console.log(correctAnswer);
    $(".box1, .box2, .box3, .box4").click(function(){
        alert("you clicked me!");
    })
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


//CALL THE FUNCTIONS TO PLAY:----------------------------------------------------------












