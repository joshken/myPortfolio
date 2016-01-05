var year = new Date().getFullYear();
var copyright = "Copyright &copy; " + year + " by Brigham Young University - Idaho. All Rights Reserved.";

$(document).ready(function() {
	// Insert copyright footer on all pages
	$("<footer></footer>")
		.html(copyright)
	.appendTo("main");
	
	$("<div id='footer'></div>")
		.html(copyright)
	.appendTo("#main");
	
	// Open and close accordian lists
	$("dt").click(function() {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
		} else {
			$(this).addClass("open");
		}
	});
});