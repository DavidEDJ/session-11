function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
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
	
	if (question4 == "Victor Hugo") {
		correct++;

}
	if (question5 == "Francois Asselineau") {
		correct++;

}


	var pictures = ["obama.gif", "fillon.gif", "trump.gif", "meluche.gif"];
	var messages = ["Bravo !",  "Tres bonne maitrise !",  "C'est un peu juste...", "Ce n'est pas glorieux..."];
	var range;

	

	if (correct < 2) {
		range = 3;
	}


if (correct > 1 && correct < 4) {
		range = 2;
	}


	if (correct == 4) {
		range = 1;
	}


	if (correct == 5) {
		range = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "Vous avez " + correct + "/5.";
	document.getElementById("picture").src = pictures[range];
	}