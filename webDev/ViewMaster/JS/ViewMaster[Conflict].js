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
images.push({ id: "1", src: "./Images/famdev.png", top: 0, left: "50%", index: "7" });
images.push({ id: "2", src: "./Images/exchange.png", top: 0, left: "50%", index: "5" });
images.push({ id: "3", src: "./Images/symbint.png", top: 0, left: "50%", index: "3" });
images.push({ id: "4", src: "./Images/structure.png", top: 0, left: "50%", index: "2" });
images.push({ id: "5", src: "./Images/systems.png", top: 0, left: "50%", index: "1" });
images.push({ id: "6", src: "./Images/conflict.png", top: 0, left: "50%", index: "4" });
images.push({ id: "7", src: "./Images/fem.png", top: 0, left: "50%", index: "6" });

var numViews = images.length; // Stores the number of views added

var ratio = 1023 / 1500;

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
		}).appendTo("body");
		
		// Select the newly added image
		var $image = $("#"+data.id);
		
		// Set the style for the image
		$image.css({ "top": data.top, "left": data.left, "z-index": data.index, "opacity": 1 });
		
		// Figure out the margins once the image loads
		$image.load(function() {
			var lmargin = -1 * (this.width / 2);
			$(this).css("margin-left", lmargin);
		});
		
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
});

$(window).resize(adjustImages);

function adjustImages() {
	$(".views").each(function() {
		var lmargin = -1 * (this.width / 2);
		$(this).css("margin-left", lmargin);
	});
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
var same = 1;
var firstTime = true;
var viewNum = 1; // Stores the current view id number
var angles = [ 0, 52, 51, 52, 51, 52, 51, 51 ]; // Only used if there are 7 views
function findView(view) {
	// If view is undefined it gets set to increment by 1
	if (firstTime) {
		firstTime = false;
		if (typeof view === 'undefined') { view = 1; }
	}
	else if (typeof view === 'undefined') { view = viewNum + 1; }
	
	if (view == viewNum && same == 0) {
		same = 1;
	} else {
		same = 0;
	}
	
	if (numViews == 7) {
		// Make sure view isn't greater than 7
		if (view == 8) { view = 1; }
		
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
	
	// Go through all the images and set the opacity appropriately
	$("img.views").each(function() {
		if ($(this).attr("id") == viewNum.toString() || same == 1) {
			$(this).delay(100).fade(1); // Fade in the current view
		} else
			$(this).fade(0.25); // Fade out all other views
	});
}
