var weights = [];
weights.Rg = "Regular";
weights.Bk = "Book";
weights.Rm = "Roman";
weights.Bd = "Bold";
weights.It = "Italic";
weights.Md = "Medium";
weights.Sm = "Semi";
weights.Dm = "Demi";
weights.Bl = "Black";
weights.Hv = "Heavy";
weights.Ul = "Ultra";
weights.Cn = "Condensed";
weights.Cm = "Compressed";

var wordExamples = [ "Sagebrush", "Racecars", "Blankspace" ];

var fonts = [
	{
		"name": "Akko Rounded ",
		"class": "Akko ",
		"weight": [ "Rg", "Bd", "Bl" ]
	},
	{
		"name": "Avenir Next ",
		"class": "Avenir ",
		"weight": [ "Rg", "It", "Dm", "Bd", "Hv" ]
	},
	{
		"name": "Monotype Baskerville ",
		"class": "Baskerville ",
		"weight": [ "Rm", "It", "Sm Bd", "Sm Bd It" ]
	},
	{
		"name": "Bembo Book ",
		"class": "Bembo ",
		"weight": [ "Rg", "It", "Bd", "Bd It" ]
	},
	{
		"name": "Monotype Bodoni ",
		"class": "Bodoni ",
		"weight": [ "Bk", "Bk It", "Bd", "Bd It", "Bl" ]
	},
	{
		"name": "Centaur ",
		"class": "Centaur ",
		"weight": [ "Rg", "Bd" ]
	},
	{
		"name": "Stempel Garamond ",
		"class": "Garamond ",
		"weight": [ "Rm", "It", "Bd", "Bd It" ]
	},
	{
		"name": "Neue Haas Grotesk Display ",
		"class": "Grotesk ",
		"weight": [ "Rg", "It", "Md", "Md It", "Bd", "Bl" ]
	},
	{
		"name": "Klint ",
		"class": "Klint ",
		"weight": [ "Rg", "It", "Bd", "Bd It", "Bl" ]
	},
	{
		"name": "ITC Legacy Sans ",
		"class": "Legacy ",
		"weight": [ "Bk", "Bk It", "Bd", "Ul" ]
	},
	{
		"name": "Egyptian Slate ",
		"class": "Egyptian ",
		"weight": [ "Rg", "It", "Bd", "Bd It", "Bl" ]
	},
	{
		"name": "Trade Gothic Next ",
		"class": "Gothic ",
		"weight": [ "Rg", "It", "Bd", "Bd It", "Hv", "Cn",
				    "Cn Bd", "Cn Hv", "Cm", "Cm Bd" ]
	}
];

function getWeightName(weight) {
	var weightName = "";
	var sWeight = weight.split(" ");
	for (var i = 0; i < sWeight.length; i++) {
		weightName += weights[sWeight[i]];
		if (i != sWeight.length - 1) {
			weightName += " ";
		}
	}
	return weightName;
}