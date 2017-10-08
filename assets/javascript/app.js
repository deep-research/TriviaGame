$(document).ready(function() {
    var timeLeft
    var timerId

    // Hide page 2 and 3 at start
    $("#pg2, #pg3").css("display", "none");

    // Click button to go from page 1 to 2
    $("#btn1").on("click", function() {
    	$("#pg1, #pg3").css("display", "none");
    	$("#pg2").css("display", "block");

    // Timer Variables
    timeLeft = 29;
    timerId = setInterval(countdown, 1000);
    });

    // Go from page 2 to 3 after the game ends
    var gameComplete = function() {
    	clearTimeout(timerId);
    	$("#pg1, #pg2").css("display", "none");
    	$("#pg3").css("display", "block");

    	// Tally and display the results
    	countScore()
    	printResults()
    };

    // Click button to go from page 2 to 3
    $("#btn2").on("click", function() {
    	gameComplete();
    });

    // Refresh button on page 3
    $("#btn3").on("click", function() {
    	location.reload(true);
    });

    // Timer Function
	function countdown() {
		// Timer ends
  		if (timeLeft == 0) {
  			$("#pg2 span").text("0");
    		gameComplete();
    	// Countdown continues
  		} else {
  		$("#pg2 span").text(timeLeft);
    	timeLeft--;
  		};
	};

	// Score counter variables
	var correctCount = 0
	var incorrectCount = 0
	var unansweredCount = 0
	var answerList = ["3", "2", "4", "1", "4", "3", "1", "3"]

	// Determine the score
	var countScore = function() {
		for (var i=0; i<answerList.length; i++) {
			var val = $("input[name=question"+(i+1)+"]:checked").val();
			if (val === answerList[i]) {
				correctCount++
			} else if (val === undefined) {
				unansweredCount++
			} else {
				incorrectCount++
			};
		};
	};

	//Display the results
	var printResults = function() {
		$("#correctAnswer").text(correctCount)
		$("#incorrectAnswer").text(incorrectCount)
		$("#unanswered").text(unansweredCount)
	};

});