$(document).ready(function() {
    $("#toggle button").click(function() {
        if ($(this).hasClass("selected")) {
            // Do nothing
        } else {
            $("#toggle .selected").removeClass("selected");
            $(this).addClass("selected");
            if ($("#content").hasClass("splash")) {
                $("#content").removeClass("splash");
            } else {
                $("#content").addClass("splash");
            }
            if ($("#main").hasClass("splash")) {
                $("#main").removeClass("splash");
            } else {
                $("#main").addClass("splash");
            }
        }
    });
});