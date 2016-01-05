/***************************************************************
 * Images for the View Master
 * Each image requires a src, id, top, and left attribute
 *
 * @attr src Can be any valid source for the image
 * @attr id This should be a number for the order of how it
 *			should appear in the view master starting with 1
 * @attr top Set the top position for the image
 * @attr left Set the left position for the image			
 ***************************************************************/
var images = new Array();

// Add all the images for the view master here
images.push({ id: "1", src: "./Images/famdev.png", index: "7" });
images.push({ id: "2", src: "./Images/exchange.png", index: "5" });
images.push({ id: "3", src: "./Images/symbint.png", index: "3" });
images.push({ id: "4", src: "./Images/structure.png", index: "2" });
images.push({ id: "5", src: "./Images/systems.png", index: "1" });
images.push({ id: "6", src: "./Images/conflict.png", index: "4" });
images.push({ id: "7", src: "./Images/fem.png", index: "6" });

var numViews = images.length; // Stores the number of views added

var description = new Array();
description.push({ title: "", summary: ""});
description.push({ title: "Family Development", summary: "Families progress through stages; there are crucial tasks associated with each stage"});
description.push({ title: "Exchange", summary: "Choices in relationships are evaluated based on the rewards minus the costs"});
description.push({ title: "Symbolic Interaction", summary: "People will react to something according to the meaning that that thing has for them (the meaning being created through our interactions with society, culture, and other people)"});
description.push({ title: "Structural / Fundamentalism", summary: "There are needs that must be met in families and structures (patterns or family types) emerge to meet those needs"});
description.push({ title: "Systems", summary: "The system (family) works together to maintain homeostasis; individuals affect one another"});
description.push({ title: "Conflict", summary: "Scarce resources leads to conflict between the \"haves\" and \"have nots\""});
description.push({ title: "Feminist", summary: "There is value in viewing a family through a woman's perspective with a goal of valuing each gender equally"});

/***************************************************************
 * Dynamically loads the images onto the page along with
 * the corresponding icon
 ***************************************************************/
$(document).ready(function() {
	// Add a row for the icons to go in
	$("<tr></tr>").appendTo($("#icons"));
	
	// Select the new row
	var $row = $("#icons").children("tbody").eq(0).children("tr").eq(0);
	
	// Add the images and icons to the page
	for (var i = 0; i < numViews; i++) {
		var data = images[i]; // Get the data from the array

		/* VIEW */
		
		// Create a new image and add it to the page
		$("<img/>", {
		    id: data.id,
		    class: "views",
		    src: data.src
		}).appendTo("#images");
		
		// Select the newly added image
		var $image = $("#"+data.id);
		
		// Set the style for the image
		$image.css({ "z-index": data.index, "opacity": 1 });
		
		/* ICON */
		
		// Add a new cell for the icon
		$("<td></td>").appendTo($row);
		
		// Add the icon to the new cell
		$("<img/>", {
			src: "Icons/Icon-"+data.id+".png",
			onclick: "findView("+parseInt(data.id)+")"
		}).appendTo($row.children("td").eq(i));
	}
	
	// Only set the first image to full opacity
	$("#1").css("opacity", 1);
	
	adjustImages();
});

$(window).resize(adjustImages);

function adjustImages() {
	var newHeight, newWidth;
	$(".views").each(function() {
		newHeight = $(window).height() - 250;
		newWidth = (newHeight * 1500) / 1023;
		$(this).width(newWidth);
		$(this).height(newHeight);
	});
	//$("#images").width(newWidth);
}

/***************************************************************
 * This function uses the jQuery notation to find the current
 * angle of any object
 *
 * @return angle The current angle of the object
 ***************************************************************/
$.fn.getDegrees = function () {
    var matrix = this.css("-webkit-transform") ||
                 this.css("-moz-transform")    ||
                 this.css("-ms-transform")     ||
                 this.css("-o-transform")      ||
                 this.css("transform");
    var angle = 0;
    if(typeof matrix === 'string' && matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    }
    return angle;
};

/***************************************************************
 * This function will rotate any object. The angle parameter
 * is the only required parameter
 *
 * @param angle The angle to increment by for the rotation
 * @param duration The duration of the animation
 * @param easing Controls how the animation looks
 * @param complete A function to run once the animation is done
 ***************************************************************/
$.fn.rotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    var start = this.getDegrees();
  
    return this.each(function(i, e) {
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };
        
        $({deg: start}).animate({deg: start + angle}, args);
    });
};

/***************************************************************
 * This function combines the fadeIn and fadeOut functions in
 * jQuery. The opacity parameter is required and the duration
 * parameter is defaulted to 400 milliseconds
 *
 * @param opacity The opacity to fade in or out to
 * @param duration The duration of the animation
 ***************************************************************/
$.fn.fade = function(opacity, duration) {
	duration = typeof duration !== 'undefined' ? duration : 400;
	
	this.animate({
	    opacity: opacity,
	  }, duration);
};

function updateDescription(view) {
	$("#description").children("h1").eq(0).html(description[view].title);
	$("#description").children("p").eq(0).html(description[view].summary);
}

/***************************************************************
 * This function adds the handle animation to the findview
 * function so it looks like the handle has been pulled.
 ***************************************************************/
function pullHandle() {
	// Pull the handle
	$("#handle").rotate(12, 220, "swing", function() {
		$("#handle").rotate(-12, 120);
	});
	
	// Rotate the slide
	findView();
}

/***************************************************************
 * Rotates the film to the next "view" or a view specified
 * in the function call and fades in the image that goes with
 * it.
 * 
 * @param view The view to find (default is the next view)
 ***************************************************************/
var same = true;
var firstTime = true;
var viewNum = 1; // Stores the current view id number
var angles = [ 0, 52, 51, 52, 51, 52, 51, 51 ]; // Only used if there are 7 views
function findView(view) {
	// If it's the first time don't rotate the wheel
	if (firstTime) {
		firstTime = false;
		if (typeof view === 'undefined') { view = 1; }
	}
	// If view is undefined set the view to the next number
	else if (typeof view === 'undefined') { view = viewNum + 1; }
	
	// If the same view is clicked twice toggle between seeing
	// all views and just the one selected
	if (view == viewNum && !same) { same = true; }
	else { same = false; }
	
	if (numViews == 7) {
		// Make sure view isn't greater than 7
		if (view == 8) { view = 1; }
		
		updateDescription(view);
		
		var degrees = 0;
		while (viewNum != view) {
			viewNum++;
			if (viewNum == 8) { viewNum = 1; }
			// Add alternating degrees from the array
			degrees += angles[viewNum];
		}
		
		// Now rotate the film
		$("#film").rotate(degrees, 420);
	} else {
		// Calculates the degrees to increment the film by
		var angle = 360 / numViews;
		// Calculates how many turns you want to turn the film
		var turns = view - viewNum;
		
		// Rotate the film by the given angle by the necessary turns
		$('#film').rotate(angle * turns, 420);
		
		// Set viewNum to view
		viewNum = (view > numViews) ? 1 : view;
	}
	
	if (same)
		$("#description").fade(0);
	else
		$("#description").fade(1);
	
	// Go through all the images and set the opacity appropriately
	$("img.views").each(function() {
		if ($(this).attr("id") == viewNum.toString() || same) {
			$(this).delay(100).fade(1); // Fade in the current view
		} else
			$(this).fade(0.25); // Fade out all other views
	});
}
