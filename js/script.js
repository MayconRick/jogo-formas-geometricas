var forms = 9;
var round = [];
var formSelected = -1;
var points = 0;
var rounds = 0;

function start() {

    reset();
    createRound();
    convertRound();
    formSelected = setTargetRound();
    roundOptions();

}
async function resetGame() {
    document.getElementById("score").textContent = "";
    document.getElementById("round").textContent = "";
    
    points = 0;
    rounds = 0;
    start();
}

async function reset() {
    forms = 9;
    formSelected = -1;

    document.getElementById("option-1").title = "";
    document.getElementById("option-2").title = "";
    document.getElementById("option-3").title = "";
    document.getElementById("option-4").title = "";
    document.getElementById("imageoption").title = "";

    for(var i = round.length; i > 0; i-- ) {
       round.pop(); 
    }
}

function createRound() {
    var options = 4;
    for(var i = 0; i < options; i++) {

        var suggestion = Math.ceil(Math.random() * forms); 
        while (round.indexOf(suggestion) >= 0) {  
            suggestion = Math.ceil(Math.random() * forms);
        }

        round.push(suggestion);
    }
    return round;
}

function convertRound() {
    for(var i=0; round[i];i++) {
        round[i] = associateForms(round[i]);
  }
}

function setTargetRound(){
    return round[Math.floor(Math.random()*round.length)];
}
function roundOptions() {
    document.getElementById("option-1").src = "assets/" + round[0];
    document.getElementById("option-2").src = "assets/" + round[1];
    document.getElementById("option-3").src = "assets/" + round[2];
    document.getElementById("option-4").src = "assets/" + round[3];

    document.getElementById("option-1").title = round[0];
    document.getElementById("option-2").title = round[1];
    document.getElementById("option-3").title = round[2];
    document.getElementById("option-4").title = round[3];

    document.getElementById("imageoption").src = "assets/" + formSelected;
    document.getElementById("imageoption").title = formSelected;
}

function associateForms(formId) {

    var nameForm = "";
 
    switch (formId) {
        case 1:
            nameForm = "hearth.png"
            break;
        case 2:
            nameForm = "star-4-ponts.png"
            break;
        case 3:
            nameForm = "star-5-ponts.png"
            break;
        case 4:
            nameForm = "exagon.png"
            break;
        case 5:
            nameForm = "star-6-ponts.png"
            break;
        case 6:
            nameForm = "pentagon.png"
            break;
        case 7:
            nameForm = "reatangle.png"
            break;
        case 8:
            nameForm = "circle.png"
            break;
        case 9:
            nameForm = "triangle.png"
            break;
    }

    return nameForm;
}

function score() {
    points++;

   $("#score").text(points);

}

function countRound() {
    points++;
    $("#score").text(points);
}

function countRounds() {
   rounds++;
   $("#round").text(rounds);
}

function verifyWin(id){
    if(id == formSelected ) {
        countRounds();
        score();
        start();
    } else {
        countRounds();
        start();
    }
    
}

