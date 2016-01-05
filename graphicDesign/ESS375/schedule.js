$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	var $header = $("table tr:first-child");
	var headerTop = $header.position().top;
	
	if (scrollTop >= headerTop) {
		$("#header").removeClass("hide");
		$("#banner").removeClass("hide");
	} else {
		$("#header").addClass("hide");
		$("#banner").addClass("hide");
	}
	
	var $banners = $("table tr th[colspan=2]");
	for (var i = 0; i < $banners.length; i++) {
		if (scrollTop >= $banners.eq(i).position().top - 39) {
			$("#banner").html($banners.eq(i).html());
		}
	}
});