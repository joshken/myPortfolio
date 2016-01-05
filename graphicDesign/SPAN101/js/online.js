var year = new Date().getFullYear();
var copyright = "Copyright &copy; " + year + " by Brigham Young University - Idaho. All Rights Reserved.";

$(document).ready(function() {
	$("<footer></footer>")
		.html(copyright)
	.appendTo("main");
	
	$("<div id='footer'></div>")
		.html(copyright)
	.appendTo("#main");
});