/**
 * Created by Chiru on 01-Jan-17.
 */
//Contains scores, # of questions
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

//Check if answer is correct or not
Quiz.prototype.guess = function (answer) {
    this.questionIndex++;
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score += 5;
    }
}