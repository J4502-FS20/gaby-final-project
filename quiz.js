"use strict";

function check(){

  var question1=document.quiz.question1.value;
  var question2=document.quiz.question2.value;
  var question3=document.quiz.question3.value;
	var question4=document.quiz.question4.value;
  var question5=document.quiz.question5.value;
	var question6=document.quiz.question6.value;
  var question7=document.quiz.question7.value;
  var question8=document.quiz.question8.value;
  var correct=0

  if (question1 == "answer4") {
    correct++;
  }

  if (question2 == "answer5") {
    correct++;
  }

  if (question3 == "answer10") {
    correct++;
  }

	if (question4 == "answer16") {
		correct++;
	}

	if (question5 == "answer17") {
		correct++;
	}

	if (question6 == "answer21") {
		correct++;
	}

	if (question7 == "answer26") {
		correct++;
	}
  if (question8 == "answer32") {
    correct++;
  }


  var messages = ["Awesome job!", "You're getting there!", "Keep trying!"];

var range;
    if (correct < 3){
      range=2;
    }

    if (correct > 2 && correct < 5){
      range=1;
    }

    if (correct > 4){
      range=0;
    }

  document.getElementById("results").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";



}
