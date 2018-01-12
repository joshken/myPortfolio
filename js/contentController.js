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
                $("section").html(getGraphics()).removeClass("grid");
            } else {
                location.href = "index.html";
            }
        }
    });
    
    // Add click events for images in the grid
    $(".grid div img").click(function() {
        $img = $(this);
        
        // Unselect all other images and close the summary box
        $(".grid div img").not(this).removeClass("selected");
        $(".grid div span").remove();
        $("summary").remove();
        
        // If the screen was just resized we don't want to close the summary box
        if (resizeOccured) {
            $img.removeClass("selected");
        }
        
        // If the current image was clicked close the summary box; otherwise, open the new one
        if ($img.hasClass("selected")) {
            $img.removeClass("selected");
        } else {
            // Find out where to insert the summary box
            var index = $img.parent().index();
            var $insertPoint = $(".grid div").eq(sumPosition[currentLayout][index]);
            
            // Insert the box in the correct position
            $("<summary></summary>").html(getSummary(index)).insertAfter($insertPoint);
            
            // Select the image and add an arrow
            $img.parent().append("<span></span>");
            $img.addClass("selected");
        }
    });
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