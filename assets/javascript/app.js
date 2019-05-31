//global  variables go here
var timeLeft
var correctAnswers = 0;
var incorrectAnswers = 0;
var timedOut = 0;
var gameComplete = false;
var timer = 5;

//create objects for questions and answers
var questions = [
    {
        question: "Marsha Rhea Williams was the first black woman in the United States to earn a Ph.D in Computer Science. Where did she earn her degree?",
        options: {
            a:"MIT",
            b: "Stanford", 
            c:"Vanderbilt", 
            d: "Howard"
        },
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

//create a timer
function countDown() {
    //show timer in DOM 
    $(".timer").html(timer);
    //telling timer to decrease by 1 until it reaches 0, then clear out and run function progress.
    if (timer == 0){
        clearInterval(timer);
        progress();
    } else {
        timer--;
        //console.log(timer);
    }
}





//hide Q&A boxes, show box used for start button 
$(".box2, .box3, .box4, .questionBox").hide();
$(".start").html("Let's Do This");

//create a function to select a question and answer (put "ingredients" here to shuffle through the aforementioned object) MAKE SURE TO PUT ALL OPTIONS INSIDE THIS FUNCTION IN DESIRED ORDER OF APPEARANCE
function loadQuestions(){  
   
    //set timer to 30 seconds
    countDown();
    var timer = setInterval(function() {
        countDown();
    }, 1000);

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
    //grade the answer
    //reset the timer
    //empty existing boxes
    $(".questionBox, .box1, .box2, .box3, .box4").empty();
    //hide existing boxes
    $(".box1, .box2, .box3, .box4, .questionBox").hide();
    //show correct, incorrect and timed out answers in DOM
    $(".correct").html ("You've answered " + correctAnswers + "correctly");
    $(".incorrect").html ("You've answered " + incorrectAnswers + "incorrectly");
    $(".time-out").html ("You've let " + timedOut + " questions time out");  
}

//call to the previous function when timer has run out--use clearTimeout when the user clicks an answer to go ahead and trigger the function and show progress
// function grade () {
//     if (timer == 0){
//         timedOut++;
//         progress();
//     }
// }










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













