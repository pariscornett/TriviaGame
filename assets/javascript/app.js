//global  variables go here
var timeLeft;
var correctAnswers = 0;
var incorrectAnswers = 0;
var timedOut = 0;
var gameComplete = false;
var timer = 10;
var countdown;
var selectedAnswer;
var correctAnswer;
var answerClicked = false;
var currentQuestion = 0;

//create objects for questions and answers
var questions = [
    {
        question: "Marsha Rhea Williams was the first black woman in the United States to earn a Ph.D in Computer Science. Where did she earn her degree?",
        options: {
            a:"MIT",
            b: "Stanford", 
            c:"Vanderbilt", 
            d: "Howard",
        },
        correctAnswer: "Vanderbilt"
    },
    {
        question: "Who is considered the first computer programmer?",
        options: {
            a:"Katherine Johnson",
            b:"Ada Lovelace",
            c:"Radia Perlman",
            d:"Dorothy Vaughan",
        }, 
        correctAnswer: "Ada Lovelace"
    },
    {
        question: "Rear Admiral Grace Hopper is lauded for this contribution to computing...",
        options: {
            a:"FORTRAN",
            b:"compilers",
            c:"COBOL",
            d:"all of the above",
        },
        correctAnswer: "all of the above",
    },
]

//create a timer
function countDown() {
    //show timer in DOM 

    //telling timer to decrease by 1 until it reaches 0, then clear out and run function progress.
    if (timer == 0){
        clearInterval(timer);
        timeOut();
    } else {
        
        timer--;
        $(".timer").html("You have " + timer + " seconds remaining");
    }
}

//hide Q&A boxes, show box used for start button 
$(".box2, .box3, .box4, .questionBox").hide();
$(".start").html("Let's Do This");


//create a function that stores the value of the click in the variable selectedAnswer
$(".box1").on("click", function (){
    selectedAnswer = $(this).text();
    clearInterval(timer);
    console.log(selectedAnswer);
    answerClicked = true;
    checkAnswer();
})

$(".box2").on("click", function (){
    selectedAnswer = $(this).text();
    clearInterval(timer);
    console.log(selectedAnswer);
    answerClicked = true;
    checkAnswer();
})

$(".box3").on("click", function (){
    selectedAnswer = $(this).text();
    clearInterval(timer);
    console.log(selectedAnswer);
    answerClicked = true;
    checkAnswer();
})

$(".box4").on("click", function (){
    selectedAnswer = $(this).text();
    clearInterval(timer);
    console.log(selectedAnswer);
    answerClicked = true;    
    checkAnswer();

})
    


//create a function to select a question and answer (put "ingredients" here to shuffle through the aforementioned object) MAKE SURE TO PUT ALL OPTIONS INSIDE THIS FUNCTION IN DESIRED ORDER OF APPEARANCE
function loadQuestions(){  
    //call timer function and set it to decrease by 1 second
    countdown = setInterval(function() {
        countDown();
    }, 1000);

    // //create variable for the question
    // var questionOne = questions[0].question;
    // //create variable for the list of possible answers
    // var questionOneAnswers = questions[0].options;
    // //create variable for the correct answer
    // var correctAnswer = questions[0].correctAnswer;
    //console.log(correctAnswer);
    //insert all of that information into the DOM 
    $(".questionBox").html(questions[currentQuestion].question);
    $(".box1").html(questions[currentQuestion].options.a);
    $(".box2").html(questions[currentQuestion].options.b);
    $(".box3").html(questions[currentQuestion].options.c);
    $(".box4").html(questions[currentQuestion].options.d);
    
    $(" .box1, .box2, .box3, .box4, .questionBox").show();
    //empty the preexisting text in box1 which shares the start class
    $(".start").empty();
}

//make start button clickable
$(".start").click(function(){
    timer = 10;
    //show the other boxes we need for remainder of game

    //run function that shows the question and answers text in the DOM 
    loadQuestions();
})


function timedOut() {
    // logic for if timedout
    timedOut++;
    loadQuestions();
}


function checkAnswer() {
    // logic to check if answer is correct
    if( selectedAnswer == correctAnswer){
        correctAnswers++;
        currentQuestion++;
        loadQuestions();
    }
    else{
        incorrectAnswers++;
        currentQuestion++;
        loadQuestions();
    }

}

//make a function that shows how well the player is doing after each question 
function progress(){

    grade();
     //reset the timer
    //empty existing boxes
    $(".questionBox, .box1, .box2, .box3, .box4").empty();
    //hide existing boxes
    $(".box1, .box2, .box3, .box4, .questionBox").hide();
    //show correct, incorrect and timed out answers in DOM
    $(".correct, .incorrect, .time-out").show();
    $(".correct").html ("You've answered " + correctAnswers + "correctly");
    $(".incorrect").html ("You've answered " + incorrectAnswers + "incorrectly");
    $(".time-out").html ("You've let " + timedOut + " questions time out");  



}

//call to the previous function when timer has run out--use clearTimeout when the user clicks an answer to go ahead and trigger the function and show progress
// function grade () {
//     if (timer == 0 && answerClicked == false){
//         timedOut++;
//         //progress();
//     }
//     else if (timer >= 0 && selectedAnswer == correctAnswer){
//         correctAnswers++;
//         //progress();
//     }
//     else if (timer >= 0 && selectedAnswer != correctAnswer){
//         incorrectAnswers++;
//         //progress();
//     }
//  }










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