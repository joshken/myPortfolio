var continentIndex = new Array();
continentIndex["southAmerica"] = 0;
continentIndex["africa"] = 1;
continentIndex["europe"] = 2;
continentIndex["northAmerica"] = 3;
continentIndex["asia"] = 4;

function getIndex(continentName) {
	return continentIndex[continentName];
}

$.fn.id = function(id) {
	if (id === undefined) {
		return $(this).attr("id");
	} else {
		$(this).attr("id", id);
	}
};

function showCountry(country) {
	$("aside ul li").removeClass("selected");
	$(country).addClass("selected");
	
	var countryId = $(country).html().replace(/\s/g, "");
	$(".country").removeClass("show");
	$(".country#"+countryId).addClass("show");
}

function loadContinent(continent) {
	var $continent = continents[getIndex(continent)];
	var $countries = $continent.countries;
	
	$countries.sort(function(a, b) {
		return a.name === b.name ? 0 : (a.name < b.name ? -1 : 1);
	});
	
	$("header").html($continent.continent);
	
	$("<img />")
		.attr("id", "continent")
		.attr("src", $continent.img)
	.appendTo("section");
	
	for (var i = 0; i < $countries.length; i++) {
		var $country = $countries[i];
		
		$("<li></li>")
			.html($country.name)
			.attr("onclick", "showCountry(this)")
		.appendTo("aside ul");
		
		$("<img />")
			.addClass("country")
			.attr("id", $country.name.replace(/\s/g, ""))
			.attr("src", $country.img)
		.appendTo("section");
	}
}

function adjustList() {
	$("aside ul").height($("#continent").height() - 17);
}

$(window).resize(adjustList);

$(document).ready(function() {
	var qs = (function(a) {
		if (a == "") return {};
		var b = {};
		for (var i = 0; i < a.length; ++i) {
			var p = a[i].split('=', 2);
			if (p.length == 1)
				b[p[0]] = "";
			else  
				b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
		}
		return b;
	})(window.location.search.substr(1).split('&'));
	
	var continent = qs['map'] === undefined ? 'southAmerica' : qs['map'];
	loadContinent(continent);
	setTimeout(adjustList, 500);
});