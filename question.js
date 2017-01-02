/**
 * Created by Chiru on 01-Jan-17.
 */

//3 attributes for 1 question
function Question(text, chioices, answer) {
    this.text = text;
    this.choices = chioices;
    this.answer = answer;
}

//Contains user replies
Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}