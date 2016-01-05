function calculateAngle(x1, x2, y1, y2) {
	var angle;
	var X = x1 - x2;
	var Y = y2 - y1;
	var Z = Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)));
	var r = Math.atan2(Y, X);
	angle = Math.round(r * 180 / Math.PI);
	return angle < 0 ? 360 - Math.abs(angle) : angle;
}

function lineDirection(angle) {
	var direction;
	if ((angle <= 45) && (angle >= 0)) {
		direction = 'horizontal';
	} else if ((angle <= 360) && (angle >= 315)) {
		direction = 'horizontal';
	} else if ((angle >= 135) && (angle <= 225)) {
		direction = 'horizontal';
	} else if ((angle > 45) && (angle < 135)) {
		direction = 'vertical';
	} else {
		direction = 'vertical';
	}
	return direction;
}

function showAnswer(answer) {
	$("header div").html(answer);
}

$(document).ready(function() {
	var canvas = new fabric.Canvas('canvas', { selection: false });
	
	canvas.setBackgroundImage('planes.png', canvas.renderAll.bind(canvas), {
		width: canvas.width,
		height: canvas.height,
		originX: 'left',
		originY: 'top'
	});
		
	var line, isDown;
	
	canvas.on('mouse:down', function(o) {
		isDown = true;
		canvas.clear();
		var pointer = canvas.getPointer(o.e);
		var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
		var color = 'red';
		if (pointer.x <= 220) { color = 'blue'; }
		line = new fabric.Line(points, {
	    	strokeWidth: 5,
	    	fill: color,
	   		stroke: color,
	    	originX: 'center',
	    	originY: 'center'
	  	});
	  	canvas.add(line);
	});
	
	var direction = "";
	
	canvas.on('mouse:move', function(o) {
	  	if (!isDown) return;
	  	var pointer = canvas.getPointer(o.e);
	  	
	  	if (direction == "") { 
	  		var x1 = line.get("x1");
	  		var y1 = line.get("y1");
	  		var x2 = pointer.x;
	  		var y2 = pointer.y;
	  		var angle = calculateAngle(x1, x2, y1, y2);
	  		direction = lineDirection(angle);
	  		if (direction == "horizontal") { line.set({ fill: "green", stroke: "green" }); }
	  	} else if (direction == "horizontal") {
	  		line.set("x2", pointer.x);
	  	} else if (direction == "vertical") {
	  		line.set("y2", pointer.y);
	  	}
	  	canvas.renderAll();
	});
	
	canvas.on('mouse:up', function(o) {
	  	isDown = false;
	  	var color = line.get('fill');
	  	showAnswer(direction == "vertical" ? (color == 'blue' ? "Sagittal Plane" : "Coronal Plane") : "Tranverse Plane");
	  	direction = "";
	});
});