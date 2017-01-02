/**
 * Created by Chiru on 01-Jan-17.
 */

function populate() {
    if(quiz.isEnded()){
        //showScores();
    }else{
        //show the question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
}

var questions = [
    new Question("Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?", ["Charles Babbage", "George Boole", "Alan Turing", "Jeff Bezos"],"Alan Turing"),
    new Question("Who developed Yahoo?",["Dennis Ritchie & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn", "Steve Case & Jeff Bezos"],"David Filo & Jerry Yang")
    ];

var quiz = new Quiz(questions);

populate();