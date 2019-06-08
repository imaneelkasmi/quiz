function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;

	if (question1 == "margin-left") {
		correct++;
}
	if (question2 == "Switch") {
		correct++;
}
	if (question3 == "Entier") {
		correct++;
}	
	if (question4 == "5 fois") {
		correct++;
	}
	if (question5 == "Cascading Style Sheets") {
		correct++;
}
	if (question6 == "function myFunction()") {
	correct++;
}
	
	var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;
	
// score 
	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 6) {
		score = 1;
	}

	if (correct == 6) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}