/*
 * These are the definitions for the terms in the infographic
 */
 var definitions = new Array();
definitions[0] = "A set of interrelated propositions plus assumptions and definitions.";
definitions[1] = "A statement of relations between variables. A hypothesis is a prediction that a particular relation will be found.";
definitions[2] = "Decisions about the cases studied, the method of data collection, the method of measurement, and procedures for ruling out alternative explanation of findings should they support the hypothesis.";
definitions[3] = "The data &mdash; the impact of the world on our senses &mdash; will be coloured to some extent by our expectations.";
definitions[4] = "A statement of relations between variables. A hypothesis is derived from theory, and its empirical truth is open to question.";
definitions[5] = "Theory in light of the evidence. A procedure used to invent theory, sometimes to turn a set of findings into a smaller set of propositions. The researcher looks for common content and indications of more general constructs in a set of varied research findings.";
definitions[6] = "Sometimes observation leads to theory";
definitions[7] = "Sometimes theory leads to research and observation";

$(window).ready(function() {
	// Set up hover action for the images that are part of the infographic
	$("#holder img.small").each(function() {
		$(this).hover(
			function() {
				isolateImage($(this).attr("id"), 0.5);
				$("#text").html(definitions[parseInt($(this).attr("data-index")) - 1]);
			},
			function() {
				integrateImage($(this).attr("id"));
				$("#text").html("");
			}
		);
	});
	
	// Change the the induction image
	$("#induction").hover(
		function() {
			$("#induction").addClass("hidden");
			$("#inductionarrow").removeClass("hidden");
		},
		function() {
			// Do nothing because when you hover it gets hidden
		}
	);
	
	// Set up hover for induction image
	$("#inductionarrow").hover(
		function() {
			highlightInduction();
		},
		function() {
			unhighlight();
		}
	);
	
	// Change the deduction image
	$("#deduction").hover(
		function() {
			$("#deduction").addClass("hidden");
			$("#deductionarrow").removeClass("hidden");
		},
		function() {
			// Do nothing because when you hover it gets hidden
		}
	);
	
	// Set up hover action for deduction image
	$("#deductionarrow").hover(
		function() {
			highlightDeduction();
		},
		function() {
			unhighlight();
		}
	);
});

/*
 * This function expands the specified image and reduces the opacity of the
 * others to the specified percentage represented as a number between 0 and 1.0
 */
function isolateImage(imageId, opacity) {
	var $image = $("#"+imageId);
	
	unhighlight(); // Just in case the arrow doesn't switch back
	$("#holder img").each(function() {
		if ($(this).attr("id") == imageId) {
			$image.switchClass("small", "big", 300);
			$image.css({ "opacity": 1, "z-index": 900 });
		}
		else {
			$(this).css("opacity", opacity);
			$("#arrow").css("opacity", 0);
		}
	});
	
	$("#circle").toggleClass("big bigger");
}

/*
 * This function shrinks the specified image back to normal size and returns
 * the opacity of the rest of the images to 1.0 (100%)
 */
function integrateImage(imageId) {
	var $image = $("#"+imageId);
	
	$("#holder img").each(function() {
		if ($(this).attr("id") == imageId) {
			$image.switchClass("big", "small", 300);
			$image.css({ "opacity": 1, "z-index": "" });
		}
		else
			$(this).css("opacity", 1);
	});
	
	$("#circle").toggleClass("big bigger");
}

/*
 * Fades out the processes that are not involved in induction
 */
function highlightInduction() {
	$("#two").css("opacity", 0.3);
	$("#three").css("opacity", 0.3);
	$("#deduction").css("opacity", 0.3);
	$("#text").css({ "font-weight": "bold", "font-size": "18px" });
	$("#text").html(definitions[6]);
}

/*
 * Fades out the processes that are not involved in deduction
 */
function highlightDeduction() {
	$("#five").css("opacity", 0.3);
	$("#six").css("opacity", 0.3);
	$("#arrow").css("opacity", 0.3);
	$("#induction").css("opacity", 0.3);
	$("#text").css({ "font-weight": "bold", "font-size": "18px" });
	$("#text").html(definitions[7]);
}

/*
 * Resets the highlights to normal
 */
function unhighlight() {
	$("#holder img").css("opacity", 1);
	$("#induction").removeClass("hidden");
	$("#inductionarrow").addClass("hidden");
	$("#deduction").removeClass("hidden");
	$("#deductionarrow").addClass("hidden");
	$("#text").html("");
	$("#text").css({ "font-weight": "", "font-size": "12px" });
}