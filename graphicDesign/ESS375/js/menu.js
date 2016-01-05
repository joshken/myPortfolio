/* HELPER FUNCTION */

$.fn.id = function(id) {
	if (id === undefined) {
		return $(this).attr("id");
	} else {
		$(this).attr("id", id);
	}
};

$.fn.show = function() {
	$(this).addClass("show");
};

$.fn.hide = function() {
	$(this).removeClass("show");
};

$.fn.selected = function() {
	return $(this).hasClass("selected");
};

$.fn.select = function() {
	$(this).addClass("selected");
};

$.fn.deselect = function() {
	$(this).removeClass("selected");
};

/* ONLOAD FUNCTION */
$(document).ready(function() {
	$("aside div").click(function() {
		if ($(this).selected()) {
			$(this).deselect();
		} else {
			$("aside div").not(this).deselect();
			$(this).select();
		}
		
		$("div section img").not("#base").hide();
		
		if ($(this).selected()) {
			
			if ($(this).id() === "systems") {
				$("#base_system").show();
				$("#icon-heart").show();
				setTimeout(function() { $("#brain").show(); }, 300);
				setTimeout(function() { $("#heart").show(); }, 400);
				setTimeout(function() { $("#lungs").show(); }, 500);
				setTimeout(function() { $("#muscle").show(); }, 600);
			} else if ($(this).id() === "metabolism") {
				$("#meta").show();
				$("#icon-apple").show();
			} else if ($(this).id() === "nutrition") {
				$("#environment").show();
				$("#icon-tree").show();
			} else if ($(this).id() === "exercise") {
				$("#obesity").show();
				$("#icon-exercise").show();
			}
		}
	});
});