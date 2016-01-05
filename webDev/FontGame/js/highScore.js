function setHighScore(score, days) {
	days = days === undefined ? 30 : days;
	var d = new Date();
	d.setTime(d.getTime() + (days*24*60*60*1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = "highScore=" + score + "; " + expires;
}

function getHighScore() {
	var name = "highScore=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return 0;
}