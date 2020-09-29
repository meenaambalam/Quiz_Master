

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

//create label element for displaying the timer
var timerPara = document.createElement("p");
var timerSpan = document.createElement("span");
timerSpan.innerHTML = "";
startButton.appendChild(timerPara);
//startButton.appendChild(timerSpan);
timerPara.appendChild(timerSpan);
startButton.firstElementChild.insertAdjacentElement;
//startButton.lastElementChild.insertAdjacentElement;
//startButton.insertBefore(timerPara, startButton.childNodes[1]);
//timerPara.insertBefore();

//Create base elements to show the quiz choices

var quizForm = document.createElement("form");
var quizInput = document.createElement("input");
quizInput.setAttribute('type', 'radio');


//set other variables
var quizTime = 5000; //5secs

var highScore = [
    {type : "bird",
    highScore: 0,
    initials: ""},
    {type : "animal",
    highScore: 0,
    initials: ""},
    {type : "color",
    highScore: 0,
    initials: ""},
    {type : "number",
    highScore: 0,
    initials: ""}
];


//Makes the start Quiz Div & button visible when the main quiz type is clicked
function showStartQuizBtn(){
    //var startButton = document.querySelector(".startButton");
    startButton.style.visibility = "visible";
    return;
}

birdQuiz.addEventListener("click", function(event){
    console.log("birdQuiz button pressed");
    event.preventDefault();
 
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

    var bird_highScore = {
        type : "bird",
        highScore: 0,
        initials: ""
    }

    localStorage.setItem("quizData", JSON.stringify(birdQuiz_Data));
    localStorage.setItem("birdScore", JSON.stringify(bird_highScore));
    localStorage.setItem("quizChoice", "bird");
    
    showStartQuizBtn();
    //startButton.style.visibility = "visible";
    //startButton.setAttribute("visibility",visible);

    //TIMER BEFORE POPULATING THE 

    //quizImage.setAttribute("src", birdImg_Src[0].img_src);
    return;
});


/* Code to remove elements in a recurrsive manner, so that the next questions and choices can be displayed in the same area without appending questions after previous questions */
/* recursive element cleaning code copied from stackoverflow */
function clearInner(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
}

function clear(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
    console.log(node, "cleared!");
}

function removeContentElements(quizData){
    var parent = quizContent;
    clearInner(parent);
}

/**/
function addChoiceElements(quizData){
    
    var brTag;
    var quizRadio;
    var quizLabel;
    var description;
    var quizSubmit;
    var parent = quizContent;
    var quizQues = document.createElement("h6");
    quizQues.id = "quesNum";
    var quizForm = document.createElement("form");
    quizForm.id = "formChoices";

    quizQues.innerHTML = quizData.quesNum + ". Choose the best answer that matches to the above picture?";
    parent.appendChild(quizQues);

    parent.appendChild(quizForm);
    for (let i = 0; i < quizData.choices.length; i++) {

        quizRadio = document.createElement("input");
        quizRadio.type = "radio";
        //quizRadio.id = quizData.name;
        quizRadio.className = "radioBtn";
        quizRadio.id = quizData.choices[i];
        quizRadio.name = quizData.name;
        quizRadio.value = quizData.choices[i];
        if (i==0) {quizRadio.checked = true}; //just setting the first radio button to true as default setting
        quizLabel = document.createElement("label");
        quizLabel.htmlFor = quizData.name;

        description = document.createTextNode(quizData.choices[i]);
        quizLabel.appendChild(description);

        brTag = document.createElement("br");
        quizForm.appendChild(quizRadio);
        quizForm.appendChild(quizLabel);
        quizForm.appendChild(brTag);
    }

    quizSubmit = document.createElement("input");
    quizSubmit.type = "submit";
    quizSubmit.id = "submitBtn";
    quizSubmit.value = "Submit";

    quizForm.appendChild(quizSubmit);
    return;

    //quizSubmit.onsubmit = submitBtnEvent();
}

function showQuiz(quizData) {
    //var quizData = JSON.parse(localStorage.getItem("quizData"));
    //var startIndx = 0;

    console.log("in showquiz function: " + quizData);
    quizImage.setAttribute("src", quizData.img_src);
    //getquizForm = 
    removeContentElements(quizData);
    addChoiceElements(quizData);
    return;

    /*

    console.log("in showquiz function: " + quizData);
    quizImage.setAttribute("src", quizData[index].img_src);
    //getquizForm = 
    addChoiceElements(quizData[index]);
    return;
    */
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
    var index = 0;
    console.log ("starting timer");
    startQuiz.value = "Quiz Started!";
    disableBtnChoices();
    //startQuiz.setAttribute(button, "disabled");
    //startButton.style.visibility = "hidden";
    //quizImage.setAttribute("src", birdImg_Src[0].img_src);
    setTime();
    //getquizForm = 
    var startIndx = 0;
    var quizData = JSON.parse(localStorage.getItem("quizData"));
    console.log("quiData [0]: " + quizData[0].name + "/" + quizData[0].ansIndex);
    //getQuizResults = 
    showQuiz(quizData[startIndx]);
    return;
})


function setTime() {
    console.log(document);
    var timeInterval = setInterval(function() {
        quizTime--;
        timerSpan.innerHTML="Time Left: " + quizTime;
        if (quizTime === 0) {
            clearInterval(timeInterval);
            console.log("Timer Complete:");
        }
    }, 100)
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



// Listner for Submit button - still figuring out
document.body.addEventListener ('click', function(event){
    
    event.stopPropagation();

    if (event.target.id === "submitBtn") {
        var correctAnswer = false;
        var penaltyTime = 100;
        var quesLabel = document.getElementById("quesNum").textContent;
        var quesIndx = quesLabel.split('.').shift();
                
        event.preventDefault();

        console.log("nextQuestion Index: " + quesIndx);
        
        var selectedRadio = document.querySelectorAll(".radioBtn");

        for (let i = 0; i < selectedRadio.length; i++) {
            if (selectedRadio.item(i).checked && (selectedRadio.item(i).name === selectedRadio.item(i).value)) {
                correctAnswer = true;
            }            
        }
        if (!correctAnswer) {
            quiztime =- penaltyTime;
            timerSpan.innerHTML="Time Left: " + quizTime;
        }
        var quizData = JSON.parse(localStorage.getItem("quizData"));
        if(quesIndx < quizData.length){
            showQuiz(quizData[quesIndx]);
        } else{
            var quizChoice = localStorage.getItem("quizChoice");
            updateScore(quizChoice, quiztime);
            location.href = "https://meenaambalam.github.io/Password_Generator/"
        }

    }
})

