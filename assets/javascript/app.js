$( document ).ready(function() {


	$("#start").on('click', function() {
		hourglass = 60;
	  	setTimeout(function() {
	  $("#start").css("display","none");
	  $("#timer").css("display","block");
	  $("#questions").css("display","block"); },1000);
	  timer = setInterval(countDown,1000);
	});




function countDown() {

	
	$("#timer").text("Time Remaining: " + hourglass);
	hourglass--;

	if (hourglass == 0) {
	answer = $('input[type = "radio"]:checked');
	checkResult(answer);
	clearInterval(timer);
	}
}



$("#submit").on('click', function () {
  answer = $('input[type = "radio"]:checked');
  checkResult(answer);
  clearInterval(timer);
});



function checkResult (res) {
	
	var corAnswer = 0;
	var wroAnswer = 0;
	var notAnswered = 0;

	if (res.length < 5) {
		notAnswered = 5 - res.length;
	}

	for (i=0;i<res.length;i++) {
		
		 if (res[i].value === ("1")) {
		 	corAnswer++;
		  }
		  else {
		  	wroAnswer++;
		  }
	 }
	$("#timer").css("display","none");
	$("#questions").css("display","none");
	$("#results").append('<iframe width="400" height="250" src="https://www.youtube.com/embed/mIIHJdnsASA" frameborder="0" allowfullscreen></iframe>');
	$("#results").append("<p>Correct Answers: " + corAnswer + "</p><br>");
	$("#results").append("<p>Wrong Answers: " + wroAnswer + "</p><br>");
	$("#results").append("<p>Unanswered: " + notAnswered + "</p><br>");
	$("#results").append("<button id='restart'>Restart</button>");
	
	$("#results").css("display","block");

	$("#restart").on('click', function () {
		hourglass = 60;
	  	setTimeout(function() {
	  $("#results").css("display","none");
	  $("#start").css("display","none");
	  $("#timer").css("display","block");
	  $("#questions").css("display","block"); },1000);
	  $("#results").html("");
	  timer = setInterval(countDown,1000);
			
			});
	};
});
