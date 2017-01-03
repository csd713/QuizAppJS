/**
 * Created by Chiru on 01-Jan-17.
 */

function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        //show the question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show answer options
        var choices = quiz.getQuestionIndex().choices;

        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice_" + i);
            element.innerHTML = choices[i];
            checkAnswer("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function showScores() {

    var gameOverHtml = "<h1>Result<h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

function checkAnswer(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQNumber + " of " + quiz.questions.length;

}

var questions = [
    new Question("Who developed Yahoo?", ["Dennis Ritchie & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn", "Steve Case & Jeff Bezos"], "David Filo & Jerry Yang"),
    new Question("Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?", ["Charles Babbage", "George Boole", "Alan Turing", "Jeff Bezos"], "Alan Turing")

];

var quiz = new Quiz(questions);

populate();