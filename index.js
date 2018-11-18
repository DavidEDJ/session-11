function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
     var correct = 0;


	if (question1 == "De Gaulle") {
		correct++;
}
	if (question2 == "Victor Orban") {
		correct++;
}	
	if (question3 == "Francois Mitterrand") {
		correct++;

}
	


	var pictures = ["obama.gif", "trump.gif", "meluche.gif"];
	var messages = ["Bravo !", "C'est un peu juste...", "Ce n'est pas glorieux..."];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Vous avez " + correct + "/3.";
	document.getElementById("picture").src = pictures[score];
	}