// Defines the order to skip to the next map
var next = new Object();
next.unipolar = "bipolar";
next.bipolar = "multipolar";
next.multipolar = "unipolar";

// Defines the order to skip to the previous map
var prev = new Object();
prev.unipolar = "multipolar";
prev.multipolar = "bipolar";
prev.bipolar = "unipolar";

// Descriptions for each map
var text = new Object();
text.unipolar = {
	title: "UNIPOLAR",
	description: "A unipolar or hegemonic international system is one where the predominance of power is held by a single state. Most realists believe that this type of system is \"unstable,\" meaning that it is prone to violence and efforts to change the distribution of power. These realists argue that other states fear the capabilities of the hegemon (the unipolar state) and that they work together to disrupt their dominance in the international system. This is called balancing behavior in International Relations theory. Potential examples include the Roman Empire, The British Empire, and many argue post-Cold War United States."
};
text.bipolar = {
	title: "BIPOLAR",
	description: "Bipolar systems are those where the predominance of power is held by two, more, or less equally powerful state. Many realists, particularly Neorealists like Kenneth Waltz, believe that this type of system is the most \"stable\" of the potential distributions of power. They argue that the near equality of the two large powers checks any potential aggression by one against the other. Smaller states tend to ally with one or the other great power. One example of this type of system is the Cold War, where it is argued that \"Mutually Assured Destruction,\" held between the United States and the Soviet Union, kept these two superpowers from engaging in direct conflict with each other."
};
text.multipolar = {
	title: "MULTIPOLAR",
	description: "Multipolarity is when there are three or more generally equal great powers in the international system. In these types of systems each of the poles fears potential alliances between the other powerful states. While equal individually, collectively these alliances could bring harm to any single major power. That fear, brings instability to the international system. One example often referred to by realists of this type of system is World War I. Each of the great powers in Europe, it is argued, feared alliances against them by the others. In the end, that fear led to war."
};

// Gets the current map name
function getCurrentView(url) {
	url = url.split("/");
	url = url[url.length-1];
	url = url.split(".");
	return url[0];
}

// Gets a map image
function getMap(view) {
	return 'url(images/'+view+'.png)';
}

// Updates the description box for the map
function updateDescription(view) {
	var title = '<div id="title">'+text[view].title+'</div>';
	$("#description").html(title + text[view].description);
}

// Go to the next map
function nextView() {
	var $map = $("#map");
	var view = getCurrentView($map.css("background-image"));
	var image = getMap(next[view]);
	$map.css("background-image", image);
	updateDescription(next[view]);
}

// Go to the previous map
function prevView() {
	var $map = $("#map");
	var view = getCurrentView($map.css("background-image"));
	var image = getMap(prev[view]);
	$map.css("background-image", image);
	updateDescription(prev[view]);
}

// Onload functions
$(document).ready(function() {
	updateDescription("unipolar");
});