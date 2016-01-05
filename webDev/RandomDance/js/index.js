/*
 * TOOLS
 */

$.fn.class = function(value) {
	if (value === undefined) {
		return $(this).attr("class");
	} else {
		$(this).attr("class", value);
		return $(this);
	}
}

/*
 * CODE
 */

var firstRun = true;
var looping = true;

function getRandomTime(min, max) {
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setLooping() {
	looping = true;
	var rand = getRandomTime(0, 6);
	setTimeout(function() {
		looping = false;
	}, rand);
}

function get(value) {
	looping = false;
	setLooping();
	switch (value) {
		case "part":
			getPart();
			break;
		case "direction":
			getDirection();
			break;
		case "time":
			getTime();
			break;
		case "level":
			getLevel();
			break;
		case "energy":
			getEnergy();
			break;
	}
}

var iPart = 0;
function getPart() {
	iPart++;
	iPart = iPart == part.length ? 0 : iPart;
		
	var image = part[iPart].image;
	var name = part[iPart].name;
	$("#highlight").attr("src", image);
	$("#partBox .selected").html(name);
	
	if (looping) {
		setTimeout(getPart, 200);
	}
}

var iDir = 0;
function getDirection() {
	iDir++;
	iDir = iDir == direction.length ? 0 : iDir;
	
	var className = direction[iDir].dirClass;
	var name = direction[iDir].name;
	$("#direction").class(className);
	$("#directionBox .selected").html(name);
	
	if (looping) {
		setTimeout(getDirection, 100);
	}
}

var iTime = 0;
var timeLoop = "forward";
function getTime() {
	if (iTime == time.length - 1) {
		timeLoop = "backward";
	} else if (iTime == 0) {
		timeLoop = "forward";
	}
	
	if (timeLoop == "backward") { iTime--; }
	else { iTime++; }
	
	var width = time[iTime].width;
	var color = time[iTime].color;
	var name = time[iTime].name;
	$("#meter #bar").css({ "width": width, "background-color": color });
	$("#timeBox .selected").html(name);
	
	if (looping) {
		setTimeout(getTime, 200);
	}
}

var iLevel = 0;
var levelLoop = "forward";
function getLevel() {
	if (iLevel == level.length - 1) {
		levelLoop = "backward";
	} else if (iLevel == 0) {
		levelLoop = "forward";
	}
	
	if (levelLoop == "backward") { iLevel--; }
	else { iLevel++; }
	
	var className = level[iLevel].levelClass;
	var name = level[iLevel].name;
	$("#level").class(className);
	$("#levelBox .selected").html(name);
	
	if (looping) {
		setTimeout(getLevel, 150);
	}
}

var iEnergy = 0;
var energyLoop = "forward";
function getEnergy() {
	if (iEnergy == energy.length - 1) {
		energyLoop = "backward";
	} else if (iEnergy == 0) {
		energyLoop = "forward";
	}
	
	if (energyLoop == "backward") { iEnergy--; }
	else { iEnergy++; }
	
	var rotate = energy[iEnergy].rotate;
	var name = energy[iEnergy].name;
	$("#gage #needle").css("transform", rotate);
	$("#energyBox .selected").html(name);
	
	if (looping) {
		setTimeout(getEnergy, 200);
	}
}

function switchToMobile() {
	if ($(window).width() < 700) {
		location.href = "mobile.html";
	}
}

$(window).resize(function() {
	switchToMobile();
});

$(document).ready(function() {
	switchToMobile();
});