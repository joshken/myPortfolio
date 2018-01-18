var currentLayout = 3;
var resizeOccured = false;

function refreshLayout() {
    var cellWidth = $(".grid div").eq(0).width();
    var containerWidth = $(".grid").width();

    if (cellWidth/containerWidth < 0.4) {
        currentLayout = 3;
    } else {
        currentLayout = 2;
    }
}

$(document).ready(function() {
    
    refreshLayout();
    
    // Add toggle events for about me
    $("header h1 div").click(function() {
        if ($("header").hasClass("shrink")) {
            $("header").removeClass("shrink");
        } else {
            $("header").addClass("shrink");
        }
    });
    
    // Add toggle events for navigations buttons
    $("nav button").click(function() {
        // Toggle the button
        if ($(this).hasClass("selected")) {
            // Do nothing
        } else {
            $("nav .selected").removeClass("selected");
            $(this).addClass("selected");
            
            // Load content
            var selectedContent = $("nav .selected").html();
            if (selectedContent == "Graphic Design") {
                $("main section").html(getGraphics()).removeClass("grid");
            } else {
                $("main section").html(getWebDev()).addClass("grid");
            }
        }
    });
    
    $("nav button").eq(0).click();
});

$(window).resize(function() {
    
    var oldLayout = currentLayout;
    
    refreshLayout();
    
    if (oldLayout != currentLayout) {
        resizeOccured = true;
        $(".grid div .selected").click();
        resizeOccured = false;
    }
});

$(document).scroll(function() {
    var mainTop = $("main").position().top;
    var scrollTop = $("body").scrollTop();
    if (scrollTop >= mainTop) {
        $("nav").addClass("float");
    } else {
        $("nav").removeClass("float");
    }
});