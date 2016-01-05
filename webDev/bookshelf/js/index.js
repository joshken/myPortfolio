/* ONLOAD */
$(document).ready(function() {
	// Add the top of the bookcase
	$("<section></section>")
		.attr("id", "top")
	.appendTo("main");
	
	// Add the shelves to the bookcase
	loadShelves();

	// Add the base of the bookcase
	$("<section></section>")
		.attr("id", "base")
	.appendTo("main");
	
	// Handle the prev and next buttons
	for (var i = 1; i < $("section").length - 1; i++) {
		updateButtons(i);
	}
});

/* BASIC APPEARANCE FUNCTIONS */

$.fn.disable = function() {
	this.css("display", "none");
}

$.fn.enable = function() {
	this.css("display", "");
}

/* BUTTON BEHAVIOR */

function onFirstBook(shelfNum) {
	var indexOfFirstBook = $("section").eq(shelfNum).children("#one").children().eq(0).attr("data-index");
	if (indexOfFirstBook == 0)
		return true;
	else  
		return false;
}

function onLastBook(shelfNum) {
	var numBooks = shelves[shelfNum-1].books.length;
	var firstBook = $("section").eq(shelfNum).children("#one").children().eq(0).attr("data-index");
	var secondBook = $("section").eq(shelfNum).children("#two").children().eq(0).attr("data-index");
	var thirdBook = $("section").eq(shelfNum).children("#three").children().eq(0).attr("data-index");
	
	if (firstBook == numBooks - 1 || secondBook == numBooks - 1 || thirdBook == numBooks - 1)
		return true;
	else  
		return false;
}

// Update the prev and next buttons
function updateButtons(shelfNum) {
	var $section = $("section").eq(shelfNum);
	var $prev = $section.children("#prev");
	var $next = $section.children("#next");
	
	// PREVIOUS BUTTON
	if (onFirstBook(shelfNum)) {
		$prev.disable();
	} else {
		$prev.enable();
	}
	
	// NEXT BUTTON
	if (onLastBook(shelfNum)) {
		$next.disable();
	} else {
		$next.enable();
	}
}

/* LOAD NEW BOOKS */

$.fn.prevBooks = function() {
	var $section = this.parent();
	var shelfNum = $section.index() - 1;
	var shelfType = ($section.hasClass("two") ? 2 : 3);
	var $first = $section.children("#one");
	var $second = $section.children("#two");
	var firstId = parseInt($first.children().eq(0).attr("data-index")) - shelfType;
	
	// Empty placeholders
	$first.empty();
	$second.empty();
	// Load new books
	newBook(shelves[shelfNum].books[firstId], $first);
	newBook(shelves[shelfNum].books[firstId+1], $second);
	
	// Load third book if necessary
	if ($section.hasClass("three")) {
		var $third = $section.children("#three");
		$third.empty();
		newBook(shelves[shelfNum].books[firstId+2], $third);
	}
	
	// Update the prev and next buttons
	updateButtons(shelfNum+1);
}

$.fn.nextBooks = function() {
	var $section = this.parent();
	var shelfNum = $section.index() - 1;
	var shelfType = ($section.hasClass("two") ? 2 : 3);
	var $first = $section.children("#one");
	var $second = $section.children("#two");
	var firstId = parseInt($first.children().eq(0).attr("data-index")) + shelfType;
	var numBooks = shelves[shelfNum].books.length;
	
	// Empty placeholders
	$first.empty();
	$second.empty();
	// Load new books
	newBook(shelves[shelfNum].books[firstId], $first);
	if (firstId+1 < numBooks) {
		newBook(shelves[shelfNum].books[firstId+1], $second);
	}
	
	// Load third book if necessary
	if ($section.hasClass("three")) {
		var $third = $section.children("#three");
		$third.empty();
		if (firstId+2 < numBooks)
			newBook(shelves[shelfNum].books[firstId+2], $third);
	}
	
	// Update the prev and next buttons
	updateButtons(shelfNum+1);
}

/* LOADING FUNCTIONS */

// Create a new div
function newDiv(id, loc) {
	$("<div></div>")
		.attr("id", id)
	.appendTo(loc);
}

// Add a new book to a placeholder
function newBook(book, loc) {
	var shelfNum = $(loc).parent().index() - 1;
	$("<img />")
		.attr("data-index", book.id)
		.attr("src", book.cover)
		.attr("title", book.name)
		.attr("alt", book.name)
		.attr("onclick", "showDetails("+shelfNum+", "+book.id+")")
	.appendTo(loc);
}

function newThumbnail(image, onclick) {
	$("<div></div>")
		.html('<img src="'+image+'" />')
		.attr("onclick", onclick)
	.appendTo("#thumbnails");
}

// Show popup for a given book
function showDetails(shelfNum, bookId) {
	var shelf = shelves[shelfNum];
	var book = shelves[shelfNum].books[bookId];
	$("#details").removeClass("preview").empty();
	
	$("<img />").attr("src", book.cover).appendTo("#details");
	$("<h1></h1>").html(book.name).appendTo("#details");
	$("<h3></h3>").html(book.copyright).appendTo("#details");
	$("<h4></h4>").html("Genre: "+shelf.subcat).appendTo("#details");
	$("<h2></h2>").html("Description").appendTo("#details");
	$("<p></p>").html(book.description).appendTo("#details");
	$("<div></div>").attr("id", "close").attr("onclick", "closeDetails()").appendTo("#details");
	
	if (book.artwork != undefined && book.artwork.length > 0) {
		$("<h2></h2>").html("Artwork").css("padding-top", "10px").appendTo("#details");
		$("<div></div>").attr("id", "thumbnails").appendTo("#details");
		for (var i = 0; i < book.artwork.length; i++) {
			newThumbnail(book.artwork[i], "showArtwork("+shelfNum+", "+bookId+", "+i+")");
		}
	}
	
	$("#details").addClass("scale");
}

// Show zoomed in artwork
function showArtwork(shelfNum, bookId, artworkId) {
	var shelf = shelves[shelfNum];
	var book = shelves[shelfNum].books[bookId];
	var artwork = book.artwork[artworkId];
	$("#details").addClass("preview").empty();
	
	// Add link to go back
	$("<div></div>")
		.html("< Back")
		.attr("onclick", "showDetails("+shelfNum+", "+bookId+")")
	.appendTo("#details");
	
	// Add artwork
	$("<img />")
		.attr("id", "artwork")
		.attr("src", artwork)
	.appendTo("#details");
	
	// Add close button
	$("<div></div>")
		.attr("id", "close")
		.attr("onclick", "closeDetails()")
	.appendTo("#details");
	
	// Add previous button when appropriate
	if (artworkId - 1 >= 0) {
		$("<div></div>")
			.attr("id", "prev")
			.attr("onclick", "showArtwork("+shelfNum+", "+bookId+", "+(artworkId-1)+")")
		.appendTo("#details");
	}
	
	// Add next button when appropriate
	if (artworkId + 1 < book.artwork.length) {
		$("<div></div>")
			.attr("id", "next")
			.attr("onclick", "showArtwork("+shelfNum+", "+bookId+", "+(artworkId+1)+")")
		.appendTo("#details");
	}
}

// Function for the close button
function closeDetails() {
	$("#details").removeClass("scale");
}

/* PRIMARY LOADING FUNCTIONS */

var type = new Object();
type[2] = "two";
type[3] = "three";
type['two'] = 2;
type['three'] = 3;

// Load a new shelf
function loadShelf(i, shelfType) {
	$("<section></section>")
		.addClass(type[shelfType])
		.html('<div id="prev"></div>')
	.appendTo("main");
	
	var $section = $("section").eq(i+1);
	
	// New placeholders
	newDiv("one", $section);
	newDiv("two", $section);
	
	var $first = $section.children("#one");
	var $second = $section.children("#two");
	
	// Add books
	newBook(shelves[i].books[0], $first);
	newBook(shelves[i].books[1], $second);
	
	// Add a third if necessary
	if (shelfType == 3) {
		newDiv("three", $section);
		var $third = $section.children("#three");
		newBook(shelves[i].books[2], $third);
	}
	
	newDiv("next", $section);
	
	$section.children("#prev").click(function() {
		$(this).prevBooks();
	});
	
	$section.children("#next").click(function() {
		$(this).nextBooks();
	});
}

// Load the all the shelves
function loadShelves() {
	for (var i = 0; i < shelves.length; i++) {
		var shelf = shelves[i];
		var numBooks = shelf.books.length;
		
		// Determine the shelf type for each shelf
		if (numBooks % 3 == 0) {
			loadShelf(i, 3);
		} else if (numBooks % 2 == 0) {
			loadShelf(i, 2);
		} else if (i != 0) {
			var $lastShelf = $("section").eq(i);
			if (type[$lastShelf.attr("class")] == 3 && numBooks < 17)
				loadShelf(i, 2);
			else  
				loadShelf(i, 3);
		} else {
			loadShelf(i, 3);
		}
	}
}

