var path = 'images/skull';

var next = new Object();
next.front = "left";
next.left = "back";
next.back = "right";
next.right = "top";
next.top = "bottom"
next.bottom = "front";

var prev = new Object();
prev.front = "bottom";
prev.bottom = "top";
prev.top = "right";
prev.right = "back";
prev.back = "left";
prev.left = "front";

var highestIndex = 1;

function getCurrentView(url) {
	url = url.split("/");
	url = url[url.length-1];
	url = url.split(".");
	return url[0];
}

function getSkull(skull, view) {
	return 'url('+path+skull+'/'+view+'.png)';
}

function closePopup(closeButton) {
	$(closeButton).parent().removeClass("scale");
}

function nextView(button, skull) {
	var popup = $(button).parent();
	var view = getCurrentView($(popup).css("background-image"));
	var image = getSkull(skull, next[view]);
	$(popup).css("background-image", image);
}

function prevView(button, skull) {
	var popup = $(button).parent();
	var view = getCurrentView($(popup).css("background-image"));
	var image = getSkull(skull, prev[view]);
	$(popup).css("background-image", image);
}

function makeDraggable() {
	$(function() {
		$(".popup").draggable();
	});
}

function bringForward(popup) {
	highestIndex++;
	$(popup).css("z-index", highestIndex);
}

function newPopup(skull, view) {
	var image = getSkull(skull9, view);
	var closeButton = '<div id="close" onclick="closePopup(this)"></div>';
	var next = '<div id="next" onclick="nextView(this, '+skull+')"></div>';
	var prev = '<div id="prev" onclick="prevView(this, '+skull+')"></div>';
	
	highestIndex++;
	
	$("<div></div>")
		.css("background-image", image)
		.addClass("popup scale")
		.attr("onclick", "bringForward(this)")
		.css("z-index", highestIndex)
		.html(closeButton+next+prev)
	.appendTo("body");
	
	makeDraggable();
}

function loadSkulls(view) {
	$("main").empty();
	
	for (var i = 1; i < 7; i++) {
		var image = getSkull(i, view);
		var onclick = "newPopup("+i+", '"+view+"')";
		
		$("<div></div>")
			.addClass("skull")
			.attr("onclick", onclick)
			.css({ 'background-image': image })
		.appendTo("main");
	}
}

$(document).ready(function() {
	loadSkulls("front");
});