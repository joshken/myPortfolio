// The current word that's selected
var currWord = {
	"prefix": 0,
	"root": 0,
	"suffix": 0
};

var filter = "All";

/* ----------------- DISPLAYING ---------------- */

/* Determines if a letter is a vowel */
function isVowel(char) {
	return (char === 'a' || char === 'e' || char === 'i' ||
		 	char === 'o' || char === 'u');
}

$.fn.isEmpty = function() {
	return $(this).children().length === 0;
};

/* Rebuilds the definition with the current word parts */
function refreshDefinition() {
	var definition = "";
	// Suffix then prefix and root
	if (!$("#suffix").isEmpty() && suffix[currWord.suffix].term !== "None") {
		definition += suffix[currWord.suffix].definition + " ";
	}
	if (!$("#prefix").isEmpty() && prefix[currWord.prefix].term !== "None") {
		definition += prefix[currWord.prefix].definition + " ";
	}
	if (!$("#root").isEmpty() && root[currWord.root].term !== "None") {
		definition += root[currWord.root].definition;
	}
	$("article #definition").html(definition);
}

/* Rebuilds the word with the current word parts */
function refreshWord() {
	var word = "";
	// Take off the dash from the prefix
	if (!$("#prefix").isEmpty() && prefix[currWord.prefix].term !== "None") {
		word += prefix[currWord.prefix].term.split("-")[0];
	}
	
	// Get the two parts of the combining form
	if (!$("#root").isEmpty() && root[currWord.root].term !== "None") {
		var rootPart = root[currWord.root].term.split("/");
		// Determine which parts to use
		word += rootPart[0];
		if ($("#suffix").isEmpty() || suffix[currWord.suffix].term == "None") {
			word += rootPart[1];
		} else if (!isVowel(suffix[currWord.suffix].term.charAt(1))) {
			word += rootPart[1];
		}
	}
	
	// Add the suffix without the dash
	if (!$("#suffix").isEmpty() && suffix[currWord.suffix].term !== "None") {
		word += suffix[currWord.suffix].term.split("-")[1];
	}
	
	if (word == "") {
		$("#word").addClass("instructions");
		word = "Select a prefix, combining form, and suffix to create a new word<br />Or select a word from the vocabulary list in the top-right corner";
	} else {
		$("#word").removeClass("instructions");
	}
	
	$("article #word").html(word);
	
	// Refresh the definition too
	refreshDefinition();
}

// Sets a part of the word onclick
$.fn.setCurrTerm = function() {
	var $list = $(this).parent();
	var part = $list.attr("id");
	var id = $(this).data("id");
	$(this).addClass("selected");
	$list.children().not(this).removeClass("selected");
	currWord[part] = id;
	refreshWord();
};

function reset() {
	$("main > div ul").scrollTop(0);
	$("main > div ul li:first-child").each(function() {
		if ($(this).hasClass("header")) {
			$(this).next().trigger("click");
		} else {
			$(this).trigger("click");
		}
	});
}

/* ------------------ LOADING ------------------ */

/* Functions to insert terms or blanks into a list */

function hasFilter(vocab) {
	for (var i = 0; i < vocab.system.length; i++) {
		if (system[vocab.system[i]] === filter) {
			return true;
		}
	}
	return false;
}

function newHeader(name, loc) {
	$("<li></li>")
		.html(name)
		.addClass("header")
	.appendTo(loc);
}

function addTerm(id, vocab, loc) {
	var definition = vocab.definition !== "" ? " <span class='definition'>("+vocab.definition+")</span>" : "";
	var $term = $("<li></li>")
		.attr("id", vocab.term.replace("/", ""))
		.data("id", id)
		.html(vocab.term+definition)
		.click(function() {
			$(this).setCurrTerm();
		});
	if ($term.html() == "None") {
		$term.prependTo(loc)
	} else {
		$term.appendTo(loc);
	}
	
}

function newTerm(id, vocab, loc) {
	if (hasFilter(vocab)) {
		addTerm(id, vocab, loc);
	}
}

/* Function to build all the lists */
function buildLists() {
	// Empty the lists first
	$("main > div ul").empty();
			
	var i;
	
	// Prefixes
	for (i = 0; i < prefix.length; i++) {
		newTerm(i, prefix[i], "#prefix");
	}
	
	// Combining Forms
	for (i = 0; i < root.length; i++) {
		newTerm(i, root[i], "#root");
	}
	
	// Suffixes
	for (i = 0; i < suffix.length; i++) {
		newTerm(i, suffix[i], "#suffix");
	}
	
	reset();
}

/* ------------------ SORTING ------------------ */
 
/* Function to alphabetize lists */
function compare(el1, el2, index) {
	return el1[index] === el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
}

// Specify the sorting preference
function sortList(sortBy) {
	prefix.sort(function(el1, el2) {
		return compare(el1, el2, sortBy);
	});
	
	root.sort(function(el1, el2) {
		return compare(el1, el2, sortBy);
	});
	
	suffix.sort(function(el1, el2) {
		return compare(el1, el2, sortBy);
	});
	
	$("#sortOptions").removeClass("show");
	
	buildLists();
}

// Sorts the list by category and adds headers
function showCategories() {
	prefix.sort(function(el1, el2) {
		return compare(el1, el2, "term");
	});
	
	prefix.sort(function(el1, el2) {
		return compare(el1, el2, "category");
	});
	
	root.sort(function(el1, el2) {
		return compare(el1, el2, "term");
	});
	
	suffix.sort(function(el1, el2) {
		return compare(el1, el2, "term");
	});
	
	suffix.sort(function(el1, el2) {
		return compare(el1, el2, "category");
	});
	
	$("#sortOptions").removeClass("show");
	
	$("main > div ul").empty();
	
	var i, last = 0;
	
	// Prefixes
	if (hasFilter(prefix[0]) && prefix[0].category !== "") {
		newHeader(prefix[0].category, "#prefix");
	}
	for (i = 0; i < prefix.length; i++) {
		last = i === 0 ? last : hasFilter(prefix[i-1]) ? i-1 : last;
		if (hasFilter(prefix[i])) {
			if (prefix[last].category !== prefix[i].category) {
				newHeader(prefix[i].category, "#prefix");
			}
			addTerm(i, prefix[i], "#prefix");
		}
	}
	
	// Combining Forms
	for (i = 0; i < root.length; i++) {
		newTerm(i, root[i], "#root");
	}
	
	last = 0;
	
	// Suffixes
	if (hasFilter(suffix[0]) && suffix[0].category !== "") {
		newHeader(suffix[0].category, "#suffix");
	}
	for (i = 0; i < suffix.length; i++) {
		last = i === 0 ? last : hasFilter(suffix[i-1]) ? i-1 : last;
		if (hasFilter(suffix[i])) {
			if (suffix[last].category !== suffix[i].category) {
				newHeader(suffix[i].category, "#suffix");
			}
			addTerm(i, suffix[i], "#suffix");
		}
	}
	
	reset();
}

/* ----------------- FILTERING ----------------- */
 
/* Gets all the categories and adds them to the filter */
function getSystems() {
	var options = "";
	for (var i = 0; i < system.length; i++) {
		options += '<li onclick="filterList(this)">'+system[i]+'</li>';
	}
	$(options).appendTo("#systems ul");
}

function getSystemId() {
	for (var i = 0; i < system.length; i++) {
		if (system[i] === filter) {
			return i;
		}
	}
	return null;
}

/* Filters a list by categories */
function filterList(option) {
	// Change global filter and rebuild lists
	filter = option === undefined ? "All" : jQuery.type(option) === "string" ? option : $(option).html();
	buildLists();
	
	// Update button and dropdown
	$("#system").html(filter);
}

$.fn.findWord = function() {
	var prefixId = "#prefix "+$(this).data("prefix");
	var rootId = "#root "+$(this).data("root");
	var suffixId = "#suffix "+$(this).data("suffix");
	
	$("#prefix").animate({ scrollTop: $(prefixId).index()*42 });
	$(prefixId).trigger("click");
	$("#root").animate({ scrollTop: $(rootId).index()*42 });
	$(rootId).trigger("click");
	$("#suffix").animate({ scrollTop: $(suffixId).index()*42 });
	$(suffixId).trigger("click");
	$("aside").removeClass("show");
};

function loadWordlist() {
	for (var i = 0; i < wordlist.length; i++) {
		if (i == 0 || wordlist[i].system !== wordlist[i-1].system) {
			$("<li class='header'></li>").html(system[wordlist[i].system]).appendTo("aside ul");
		}
		$("<li></li>")
			.html(wordlist[i].word)
			.data("prefix", "#"+wordlist[i].prefix)
			.data("root", "#"+wordlist[i].root)
			.data("suffix", "#"+wordlist[i].suffix)
			.click(function() { $(this).findWord(); })
		.appendTo("aside ul");
	}
}

/* ----------------- RESIZING ------------------ */

function adjustLength() {
	var winHeight = $(window).height();
	var navHeight = $("main > nav").height();
	var artHeight = $("main > article").height();
	var $termlist = $("main > div");
	$termlist.height(winHeight - (navHeight + artHeight));
}

$(window).resize(adjustLength);

/* -------------- ONLOAD FUNCTIONS ------------- */

$(document).ready(function() {
	adjustLength();
	
	// Loads the JSON data
	getSystems();
	sortList("term");
	
	// Get the filter from the query
	var qs = window.location.search.substr(1).split('&');
	var params = {};
	for (var i = 0; i < qs.length; ++i) {
		var p = qs[i].split("=");
		if (p.length !== 2) { continue; }
		params[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	}
	var mode = params.mode !== undefined ? params.mode : "normal";
	var filterId = params.filter !== undefined ? params.filter : 0;
	filterList(system[filterId]);
			
	// Click event for the show definition button
	$("#showDef").click(function() {
		if ($("#definition").hasClass("show")) {
			$("#definition").removeClass("show");
			$(this).removeClass("selected");
		} else {
			$("#definition").addClass("show");
			$(this).addClass("selected");
		}
	});
	
	loadWordlist();
	
	$("aside div:first-child").click(function() {
		if (filter !== "All") { filterList("All"); }
		var $aside = $(this).parent();
		if ($aside.hasClass("show")) {
			$aside.removeClass("show");
		} else {
			$aside.addClass("show");
		}
	});
	
	$("aside section").click(function() {
		var $aside = $(this).parent();
		$aside.removeClass("show");
	});
	
	// Test for mode specific modifications
	if (mode === "print") {
		$("article").html(filter);
		$("body").addClass("print");
	} else if (mode == "wordlist") {
		$("body").addClass("wordlist");
	} else if (mode === "fullscreen") {
		$("#full").css("display", "none");
	}
});

function getDef() {
	var word = $("#word").html();
	window.open("http://www.merriam-webster.com/medlineplus/"+word, '');
}

function print() {
	var url = window.location.toString().split("?")[0];
	url += "?mode=print&filter="+getSystemId(filter);
	window.open(url, '').print();
}

function printWordlist() {
	var url = window.location.toString().split("?")[0];
	url += "?mode=wordlist";
	window.open(url, '').print();
}

function fullscreen() {
	var url = window.location.toString().split("?")[0];
	url += "?mode=fullscreen&filter="+getSystemId(filter);
	window.open(url, '');
}