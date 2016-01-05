var correctTerms = 0;

var locations = [ 'topLeft', 'topMiddle', 'topRight', 'middleLeft', 'middle', 'middleRight', 'bottomLeft', 'bottomMiddle', 'bottomRight' ];

var terms = [
	{
		"term": "Right Hypochondriac",
		"location": 0
	},
	{
		"term": "Epigastric",
		"location": 1
	},
	{
		"term": "Left Hypochondriac",
		"location": 2
	},
	{
		"term": "Right Lumbar",
		"location": 3
	},
	{
		"term": "Umbilical",
		"location": 4
	},
	{
		"term": "Left Lumbar",
		"location": 5
	},
	{
		"term": "Right Iliac",
		"location": 6
	},
	{
		"term": "Hypogastric",
		"location": 7
	},
	{
		"term": "Left Iliac",
		"location": 8
	}
];

function handleDrop(event, ui) {
	var dropLocation = $(this).data('location');
	var dragLocation = ui.draggable.data('location');
	
	if (dropLocation === dragLocation) {
		ui.draggable.addClass('correct');
		ui.draggable.draggable('disable');
		$(this).droppable('disable');
		ui.draggable.position({ of: $(this), my: 'center', at: 'center' });
		ui.draggable.draggable('option', 'revert', false);
		correctTerms++;
	}
	
	if (correctTerms === terms.length) {
		$("#message").addClass("show");
	}
}

function init() {
	// Reset Message
	$("#message").removeClass("show");
	
	// Reset variables
	correctTerms = 0;
	$("#drags").html('');
	$("#drops").html('');
	
	// Randomize terms
	terms.sort(function() { return Math.random() - 0.5; });
	
	// Load terms
	for (var i = 0; i < terms.length; i++) {
		$('<div><span>'+terms[i].term+'</span></div>')
			.data('location', locations[terms[i].location])
			.appendTo("#drags")
			.draggable({
				containment: 'main',
				stack: '#drags div',
				cursor: 'move',
				revert: true
			});
	}
	
	// Load colors
	for (var j = 0; j < terms.length; j++) {
		$('<div><span>'+locations[j]+'</span></div>')
			.data('location', locations[j])
			.appendTo("#drops")
			.droppable({
				accept: '#drags div',
				hoverClass: 'hovered',
				drop: handleDrop
			});
	}
}

$(init);