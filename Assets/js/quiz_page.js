

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


//set other variables
var quizTime = 5000; //5secs

//Makes the start Quiz Div & button visible when the main quiz type is clicked
function showStartQuizBtn(){
    //var startButton = document.querySelector(".startButton");
    startButton.style.visibility = "visible";
    return;
}

birdQuiz.addEventListener("click", function(event){
    console.log("birdQuiz button pressed");
    event.preventDefault();

    var birdImg_Src = [
        {index : 0, name : "peacock" ,img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Peacock_by_Nihal_jabin.jpg/220px-Peacock_by_Nihal_jabin.jpg'},
        {index : 1, name : "cardinal", img_src: "https://indianaaudubon.org/wp-content/uploads/2016/04/Cardinal_Northern_male_Ash_2012.jpg"},
        {index: 2, name : "hummingbird", img_src: "https://www.capeandislands.org/sites/wcai/files/styles/medium/public/201604/Broad-Billed_Hummingbird_003.jpg"},
        {index: 3, name : "blue jay", img_src: "https://www.allaboutbirds.org/guide/assets/og/75265841-1200px.jpg"},
        {index : 4, name : "kingfisher", img_src: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/146286731/1800"}
    ]

    localStorage.setItem("quizImgSrc", JSON.stringify(birdImg_Src));
    
    showStartQuizBtn();
    //startButton.style.visibility = "visible";
    //startButton.setAttribute("visibility",visible);

    //TIMER BEFORE POPULATING THE 

    //quizImage.setAttribute("src", birdImg_Src[0].img_src);
    return;
});
 
function startQuiz_Session() {
    console.log("startQuiz Session cuntion");
}
 

startQuiz.addEventListener("click", function(event){
    //start the timer
    console.log ("starting timer");
    startQuiz.value = "Quiz Started!";
    startQuiz.button = "disabled";
    //startQuiz.setAttribute(button, "disabled");
    //startButton.style.visibility = "hidden";
    //quizImage.setAttribute("src", birdImg_Src[0].img_src);
    setTime();
    startQuiz_Session();
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


