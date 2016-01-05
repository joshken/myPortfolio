var fontList = [];
var currentFont = 0;
var score = 0;

function changeWord() {
	var randIndex = Math.floor(Math.random() * wordExamples.length);
	$("#font").html(wordExamples[randIndex]);
}

function shuffle(array) {
	var i = array.length, temp, rand;
	
	while(i) {
		rand = Math.floor(Math.random() * i--);
		
		temp = array[i];
		array[i] = array[rand];
		array[rand] = temp;
	}
	
	return array;
}

/*
 * GET OR SET A FONT
 */

$.fn.font = function(newFont) {
	if (newFont !== undefined) {
		$(this).css("font-family", newFont);
		return $(this);
	} else {
		return $(this).css("font-family").split("'")[1];
	}
}

function startGame() {
	$("#highScore #points").html(getHighScore());
	$("#done").removeClass("show");
	$("body").removeClass("disable");
	shuffle(fontList);
	fontList = fontList.slice(0, 10);
    
	score = 0;
	updateScore();
	currentFont = 0;
	$("#font").font(fontList[currentFont].class);
	$("#answer").html(fontList[currentFont].name);
}

/*
 * CREATE FONT LIST FOR SHUFFLING
 */
function createFontList() {
	for (var i = 0; i < fonts.length; i++) {
		var fontName = fonts[i].name;
		var fontClass = fonts[i].class;
		for (var j = 0; j < fonts[i].weight.length; j++) {
			var weightClass = fonts[i].weight[j];
			var weightName = getWeightName(weightClass);
			fontList.push({
				"name": fontName + weightName,
				"class": fontClass + weightClass
			});
		}
	}
	startGame();
}

/*
 * ACCORDIAN STYLES
 */

var openOptions = null;

$.fn.opened = function() {
	return $(this).siblings("ul").css("max-height") != "0px";
};

$.fn.open = function() {
	if (openOptions) {
		$(openOptions).css("max-height", "0px");
	}
	var maxHeight = $(this).children("li").length * 42;
	$(this).css("max-height", maxHeight + "px");
	openOptions = this;
}

$.fn.close = function() {
	$(this).css("max-height", "0px");
	openOptions = null;
}

function fontOptions(font) {
	if ($(font).opened()) {
		$(font).siblings("ul").close();
	} else {
		$(font).siblings("ul").open();
	}
}

/*
 * DISPLAY FONTS IN LIST
 */
function loadFonts() {
	$("#font").attr("class", "gothic");
	
	$("main ul").empty();
	for (var i = 0; i < fonts.length; i++) {
		$("<li></li>")
			.html('<div onclick="fontOptions(this)">' + fonts[i].name + '</div><ul></ul>')
		.appendTo("main > ul");
		for (var j = 0; j < fonts[i].weight.length; j++) {
			$("<li></li>")
				.data("font", fonts[i].class + fonts[i].weight[j])
				.html(getWeightName(fonts[i].weight[j]))
				.attr("onclick", "guessFont(this)")
			.appendTo("main > ul > li:last-child > ul");
		}
	}
}

function nextFont() {
	$("#answer").css("opacity", 0);
	$(openOptions).css("max-height", "0px");
	openOptions = null;
	currentFont++;
	if (currentFont > fontList.length - 1) {
		$("#done").addClass("show");
		if (score > getHighScore()) {
			setHighScore(score);
		}
		return;
	}
	changeWord();
	$("#font").font(fontList[currentFont].class);
	$("#answer").html(fontList[currentFont].name);
	$("body").removeClass("disable");
}

function showAnswer(correct) {
	if (correct) {
		$("#answer").attr("class", "correct");
		score++;
	} else {
		$("#answer").attr("class", "incorrect");
	}
	$("#answer").css("opacity", 1);
	$("body").addClass("disable");
	updateScore();
	setTimeout(nextFont, 1600);
}

function guessFont(font) {
	var guess = $(font).data("font");
	var curFont = $("#font").font();
	var isCorrect = guess == curFont;
	showAnswer(isCorrect);
}

function updateScore() {
	var scoreText = score + "/" + fontList.length;
	$("#score #points").html(scoreText);
	$("#done #finalScore").html(scoreText);
}

$(document).ready(function() {
	changeWord();
	createFontList();
	loadFonts();
});