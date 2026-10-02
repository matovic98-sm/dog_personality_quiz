console.log("script.js connected!");

let answers = {};

let QuestionBlocks = document.querySelectorAll(".question-block");
console.log(QuestionBlocks);

QuestionBlocks.forEach(function(question) {
    let buttons =  question.querySelectorAll(".answer-btn");
    console.log(buttons);
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
            answers[question.parentElement.id] = button.dataset.answer;
            console.log(button.dataset.answer);
        });
    });
});

function DisplayResult() {    
    if (Object.keys(answers).length < QuestionBlocks.length) {
    alert("Please answer all questions!");
    return;
    }
    let points = {
        A: 1,
        B: 2,
        C: 3,
        D: 4
    };
    console.log("Answers:", answers);
    let score = 0;
    for(let question in answers) {
        score += points[answers[question]];
    }
    console.log(score);

    let result;
    if (score <= 6) {
        result = "Australian Shepherd";
    } else if (score <= 9) {
        result = "Beagle";
    } else if (score <= 12) {
        result = "Chihuahua";
    } else {
        result = "Golden Retriever";
    }
    console.log("Final Score:", score);
    document.getElementById("result-text").textContent = "You are a " + result + "!";
    document.getElementById("result-container").style.display = "block";
}

let ResultButton = document.getElementById("show-result");
ResultButton.addEventListener("click", DisplayResult);