

//get ID elements
var animalQuiz = document.getElementById("animalQuiz");
var colorQuiz = document.getElementById("colorQuiz");
var numberQuiz = document.getElementById("numberQuiz");
var birdQuiz = document.getElementById("birdQuiz");
var startQuiz = document.getElementById("startQuiz");

//get class elements
var quizDisplay = document.querySelector(".quizDisplay");
var quizImage = document.querySelector(".quizImage");
var quizContent = document.querySelector(".quizContent");
var startButton = document.querySelector(".startButton");
var hiddenScoreElem = document.getElementsByClassName("hideInitial");
var buttonResults;

//create label element for displaying the timer
var quizTime = 75;
var timeInterval;

//initial localstorage for highscore value
var quizType;
var highScore = {
        type : "bird",
        highScore: 0,
        initials: ""
}
localStorage.setItem("highScore", JSON.stringify(highScore));

        // highestScore = JSON.parse(localStorage.getItem("highScore"));
        // document.getElementById("birdScore").textContent = highestScore.highScore + " - " + highestScore.initials;



// create elements dynamically
var timerPara = document.createElement("p");
var timerSpan = document.createElement("span");
timerSpan.innerHTML = "";
startButton.appendChild(timerPara);
timerPara.appendChild(timerSpan);
startButton.firstElementChild.insertAdjacentElement;


//Create base elements to show the quiz choices

var quizForm = document.createElement("form");
var quizInput = document.createElement("input");
quizInput.setAttribute('type', 'button');


//Makes the start Quiz Div & button visible when the main quiz type is clicked
function showStartQuizBtn(){
    startButton.style.visibility = "visible";

}

// Event Listner for the "bird quiz" type "click" event
birdQuiz.addEventListener("click", function(event){
    event.preventDefault();
    
    quizType = "bird";
    quizTypeQuestion = ". What is the name of this bird?";
    //add bird quiz image questions to the local storage
    var birdQuiz_Data = [
        {name : "Peacock" ,
        //img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Peacock_by_Nihal_jabin.jpg/220px-Peacock_by_Nihal_jabin.jpg',
        img_src: "./Assets/Peacock.png",
        choices: ["Cuckoo", "Parrot", "Peacock", "Crow", "Toucan"],
        quesNum: 1
        },
        {name : "Cardinal", 
        //img_src: "https://indianaaudubon.org/wp-content/uploads/2016/04/Cardinal_Northern_male_Ash_2012.jpg",
        img_src: "./Assets/Cardinal.png",
        choices: ["Humming Bird", "Iiwi", "Flamingo","Cardinal"],
        quesNum: 2
        },
        {name : "Hummingbird", 
        //img_src: "https://www.capeandislands.org/sites/wcai/files/styles/medium/public/201604/Broad-Billed_Hummingbird_003.jpg",
        img_src: "./Assets/Hummingbird.png",
        choices: ["Hummingbird", "Heron", "Hummingbird", "Red-billed oxpecker","NewZeanland Kaka"],
        quesNum: 3},
        {name : "Blue Jay",
        //img_src: "https://www.allaboutbirds.org/guide/assets/og/75265841-1200px.jpg",
        img_src: "./Assets/Bluejay.png",
        choices: ["Kori Bustard", "Blue Jay", "Hoary Puffleg"],
        quesNum: 4},
        {name : "KingFisher",
        //img_src: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/146286731/1800",
        img_src: "./Assets/Kingfisher.png",
        choices: ["Kakapo", "Hoatzin", "California Condor", "Dodo", "KingFisher"],
        quesNum: 5}
    ]

    localStorage.setItem("quizData", JSON.stringify(birdQuiz_Data));
    showStartQuizBtn();

});


/* Code to remove elements in a recurrsive manner, so that the next questions and choices can be displayed in the same area without appending questions after previous questions */
/* recursive element cleaning code copied from stackoverflow */

function clear(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
    //console.log(node, "cleared!");
}

function clearInner(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
}

function removeContentElements(quizData){
    var parent = quizContent;
    clearInner(parent);
}

/*Get the question object from local storage and display the choices in the screen by creating the appropriate elements dynamically*/
function addChoiceElements(quizData){
    var brTag;
    var quizButton;
    var parent = quizContent;
    var quizQues = document.createElement("h5");
    var quizForm = document.createElement("form");

    quizQues.id = "quesNum";
    quizForm.id = "formChoices";
    //quizQues.innerHTML = quizData.quesNum + ". Choose the best answer that matches to the above picture?";
    quizQues.innerHTML = quizData.quesNum + quizTypeQuestion;
    parent.appendChild(quizQues);

    parent.appendChild(quizForm);
    for (let i = 0; i < quizData.choices.length; i++) {

        quizButton = document.createElement("input");
        quizButton.type = "button";
        quizButton.className = "buttonResults";
        quizButton.id = quizData.choices[i];
        quizButton.name = quizData.name;
        quizButton.value = quizData.choices[i];
        brTag = document.createElement("br");
        quizForm.appendChild(quizButton);
        quizForm.appendChild(brTag);
    }  
}

// Function to show the Quiz. Remove the elements before adding the elements dynamically
function showQuiz(quizData) {
    quizImage.setAttribute("src", quizData.img_src);

    removeContentElements(quizData);
    addChoiceElements(quizData);
}

// When the actual "Start Quiz" is pressed, disable other quiz category buttons, to avoid them being pressed.
function disableBtnChoices() {
    startQuiz.disabled = true;
    animalQuiz.disabled = true;
    colorQuiz.disabled = true;
    birdQuiz.disabled = true;
    numberQuiz.disabled = true;
}

// Eventlistner on "Start Quiz" button click event
startQuiz.addEventListener("click", function(event){
    //start the timer
    timeInterval = setInterval(myTimer, 1000);
    var index = 0;
    startQuiz.value = "Quiz Started!";
    disableBtnChoices();
    var startIndx = 0;
    var quizData = JSON.parse(localStorage.getItem("quizData"));

    showQuiz(quizData[startIndx]);
})

//Timer function
function myTimer(){
    quizTime--;
        timerSpan.innerHTML="Time Left: " + quizTime;
        if (quizTime === 0) {
            clearInterval(timeInterval);
            //console.log("Timer Complete:");
        }
}


//final page to get the initials from the user to save the score
function addScoreElements(){
    var brTag;
    var quizButton;
    var parent = quizContent;
    var quizQues = document.createElement("h5");
    var quizForm = document.createElement("form");

    quizQues.id = "quesNum";
    quizForm.id = "formChoices";
    quizQues.innerHTML = "Please enter your initials to save the score!";
    parent.appendChild(quizQues);
    parent.appendChild(quizForm);
    
    quizButton = document.createElement("input");
    quizButton.type = "text";
    quizButton.className = "textInitials";
    quizButton.id = "textInitials";
    quizButton.name = "initials";
    quizButton.value = ""
    brTag = document.createElement("br");
    quizForm.appendChild(quizButton);
   // quizForm.appendChild(brTag);

    quizButton = document.createElement("input");
    quizButton.type = "button";
    quizButton.className = "saveScore";
    quizButton.id = "saveScore";
    quizButton.name = "saveScore";
    quizButton.value = "SAVE"
    brTag = document.createElement("br");
    quizForm.appendChild(quizButton);
    quizForm.appendChild(brTag);
}

// Dynamically change the pictures and clean up the dynamically built quiz elements, and show signs that Quiz is complete
function showFinalPage(quizData, timeLeft) {
    quizImage.setAttribute("src", "./Assets/WellDone.png");
    startQuiz.value = "Quiz Ended!";
    timerSpan.innerHTML="Your Final Score: " + quizTime;
    clearInterval(timeInterval);
    removeContentElements(quizData);
    addScoreElements(timeLeft);
}

// Listener for various buttons on the screen
//For the Answer Buttons
document.body.addEventListener ('click', function(event){
    event.stopPropagation();
    if (event.target.className == "buttonResults") {
        event.preventDefault();

        var penaltyTime = 10;
        var quesLabel = document.getElementById("quesNum").textContent;
        var quesIndx = quesLabel.split('.').shift();
        //event.preventDefault();

        var selectedButtonId = event.target.id;
        var selectedButtonName = event.target.name;
        var selectedButtonValue = event.target.value;
        var quizData = JSON.parse(localStorage.getItem("quizData"));
       
        //alert("quesIndx: " + quesIndx + " Length: " + quizData.length);
        if (quesIndx < quizData.length){
                    //alert("selected Button Name: " + selectedButtonName + " Value: " + selectedButtonValue);
            if (selectedButtonName != selectedButtonValue) {
                quizTime -= penaltyTime;
            }  
            showQuiz(quizData[quesIndx]);
        } else if (quesIndx == quizData.length) {
                    //alert("selected Button Name: " + selectedButtonName + " Value: " + selectedButtonValue);
            if (selectedButtonName != selectedButtonValue) {
                quizTime -= penaltyTime;
            } 
            showFinalPage(quizData,quizTime);
        }

    }

    //listener for saving the score
    if (event.target.className == "saveScore"){
        var bestScore;
        var bestScorer;

        /*
        var currentScore = quizTime;
        var currentInit = document.getElementById("textInitials").value;
        var highestScore = JSON.parse(localStorage.getItem("highScore"));
        
        if (currentScore > highestScore.highScore) {
            bestScore = currentScore
            bestScorer = currentInit;
        } else {
            bestScore = highestScore.highScore;
            bestScorer = highestScore.initials;
        }

        highScore.type = "bird";
        highScore.highScore = bestScore;
        highScore.initials = bestScorer;

        */

        highScore.type = "bird";
        highScore.highScore = quizTime;
        highScore.initials = document.getElementById("textInitials").value;
        localStorage.setItem("highScore", JSON.stringify(highScore));

        document.getElementById("birdScore").innerHTML = quizTime + " - " + document.getElementById("textInitials").value;
    }

    //clear Score when clicked
    if (event.target.className == "clearScore"){
        highScore.type = "bird";
        highScore.highScore = 0;
        highScore.initials = "";
        localStorage.setItem("highScore", JSON.stringify(highScore));
    }

    //reload page when start over
    if (event.target.className == "startOver"){
        alert("test start over");
        window.location.reload();
    }
})

