function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
     var correct = 0;


	if (question1 == "Charles de Gaulle") {
		correct++;
}
	if (question2 == "Viktor Orban") {
		correct++;
}	
	if (question3 == "François Mitterrand") {
		correct++;

}
	
	if (question4 == "Victor Hugo") {
		correct++;

}
	if (question5 == "François Asselineau") {
		correct++;

}


	if (question6 == "Emmanuel Macron") {
		correct++;
}


	if (question7 == "Donald Trump") {
		correct++;
}	


	if (question8 == "Nigel Farage") {
		correct++;

}

	
	if (question9 == "Angela Merkel") {
		correct++;

}

	if (question10 == "Jean-Luc Mélenchon") {
		correct++;

}


	var pictures = ["obama.gif", "fillon.gif", "macron.gif", "trump.gif", "meluche.gif"];
	var messages = ["Bravo !",  "Bonne maitrise !", "Ni excellent ni mauvais.", "C'est un peu juste...", "Ce n'est pas glorieux..."];
	var range;

	

	if (correct < 4) {
		range = 4;
	}


if (correct > 3 && correct < 6) {
		range = 3;
	}


	if (correct > 5 && correct < 8) {
		range = 2;
	}


	if (correct > 7 && correct < 10) {
		range = 1;
	}



	if (correct == 10) {
		range = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "Vous avez " + correct + "/10.";
	document.getElementById("picture").src = pictures[range];
	}