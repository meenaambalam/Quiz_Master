

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
var buttonResults;

//create label element for displaying the timer
var quizTime = 75;
var timeInterval;
var quizType;
var highScore;


var timerPara = document.createElement("p");
var timerSpan = document.createElement("span");
timerSpan.innerHTML = "";
startButton.appendChild(timerPara);
//startButton.appendChild(timerSpan);
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

birdQuiz.addEventListener("click", function(event){
    event.preventDefault();
    
    quizType = "bird";
    //add bird quiz image questions to the local storage
    var birdQuiz_Data = [
        {name : "Peacock" ,
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Peacock_by_Nihal_jabin.jpg/220px-Peacock_by_Nihal_jabin.jpg',
        choices: ["Cuckoo", "Parrot", "Peacock", "Crow", "Toucan"],
        quesNum: 1
        },
        {name : "Cardinal", 
        img_src: "https://indianaaudubon.org/wp-content/uploads/2016/04/Cardinal_Northern_male_Ash_2012.jpg",
        choices: ["Humming Bird", "Iiwi", "Flamingo","Cardinal"],
        quesNum: 2
        },
        {name : "Hummingbird", 
        img_src: "https://www.capeandislands.org/sites/wcai/files/styles/medium/public/201604/Broad-Billed_Hummingbird_003.jpg",
        choices: ["Hummingbird", "Heron", "Hummingbird", "Red-billed oxpecker","NewZeanland Kaka"],
        quesNum: 3},
        {name : "Blue Jay",
        img_src: "https://www.allaboutbirds.org/guide/assets/og/75265841-1200px.jpg",
        choices: ["Kori Bustard", "Blue Jay", "Hoary Puffleg"],
        quesNum: 4},
        {name : "KingFisher",
        img_src: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/146286731/1800",
        choices: ["Kakapo", "Hoatzin", "California Condor", "Dodo", "KingFisher"],
        quesNum: 5}
    ]

    highScore = {
        type : "bird",
        highScore: 0,
        initials: ""
    }

    localStorage.setItem("quizData", JSON.stringify(birdQuiz_Data));
    localStorage.setItem("highScore", JSON.stringify(highScore));
    
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

/**/
function addChoiceElements(quizData){
    var brTag;
    var quizButton;
    var parent = quizContent;
    var quizQues = document.createElement("h6");
    var quizForm = document.createElement("form");

    quizQues.id = "quesNum";
    quizForm.id = "formChoices";
    quizQues.innerHTML = quizData.quesNum + ". Choose the best answer that matches to the above picture?";
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

function showQuiz(quizData) {
    quizImage.setAttribute("src", quizData.img_src);

    removeContentElements(quizData);
    addChoiceElements(quizData);
}
 
function disableBtnChoices() {
    startQuiz.disabled = true;
    animalQuiz.disabled = true;
    colorQuiz.disabled = true;
    birdQuiz.disabled = true;
    numberQuiz.disabled = true;
}

startQuiz.addEventListener("click", function(event){
    //start the timer
    timeInterval = setInterval(myTimer, 1000);
    var index = 0;
    startQuiz.value = "Quiz Started!";
    disableBtnChoices();
    //setTime();
    var startIndx = 0;
    var quizData = JSON.parse(localStorage.getItem("quizData"));
    
    //myTimer();
    showQuiz(quizData[startIndx]);
})


function myTimer(){
    quizTime--;
        timerSpan.innerHTML="Time Left: " + quizTime;
        if (quizTime === 0) {
            clearInterval(timeInterval);
            //console.log("Timer Complete:");
        }
}


//MEENA --------Need to WORK here -----------------
//defining event for the dynamically created submit button
function  updateScore(quizChoice, quizTime) {  
    var highScore = JSON.parse(localStorage.getItem("quizData"));
    for (let i = 0; i < highScore.length; i++) {
        if (highScore.item[i].name === quizChoice){
            highScore.item[i].highScore
        }
        }

}

//final score page

/**/
function addScoreElements(){
    var brTag;
    var quizButton;
    var parent = quizContent;
    var quizQues = document.createElement("h6");
    var quizForm = document.createElement("form");

    quizQues.id = "quesNum";
    quizForm.id = "formChoices";
    quizQues.innerHTML = "Please enter your initials to save the highscore!";
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
    quizButton.id = "saveScores";
    quizButton.name = "saveScore";
    quizButton.value = "SAVE"
    brTag = document.createElement("br");
    quizForm.appendChild(quizButton);
    quizForm.appendChild(brTag);
}

function showFinalPage(quizData, timeLeft) {
    quizImage.setAttribute("src", "./Assets/WellDone.png");
    clearInterval(timeInterval);
    removeContentElements(quizData);
    addScoreElements(timeLeft);
}

// Listner for Submit button - still figuring out

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
            
            //https://previews.123rf.com/images/hamzaali01/hamzaali011705/hamzaali01170500566/78587830-well-done-letters-vector-word-banner-sign.jpg

            //clearInterval(timeInterval);
        }

            //updateScore(quizChoice, quizTime);
            //location.href = "https://meenaambalam.github.io/Password_Generator/"
    }
})