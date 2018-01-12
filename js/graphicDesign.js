var graphics = [];
graphics[0] = {
    image: "graphicDesign/ACCTG205/ACCTG205_LgBanner.png",
    template: "graphicDesign/ACCTG205/"
};
graphics[1] = {
    image: "graphicDesign/AGBUS105/AG105LgBanner.jpg",
    template: "graphicDesign/AGBUS105/"
};
graphics[2] = {
    image: "graphicDesign/ART160/Images/largeBanner.jpg",
    template: "graphicDesign/ART160/"
};
graphics[3] = {
    image: "graphicDesign/B283/B283LgBanner.png",
    template: "graphicDesign/B283/"
};
graphics[4] = {
    image: "graphicDesign/B341/B341LgBanner.jpg",
    template: "graphicDesign/B341/"
};
graphics[5] = {
    image: "graphicDesign/CIT241/CIT241_LgBanner.png",
    template: "graphicDesign/CIT241/"
};
graphics[6] = {
    image: "graphicDesign/COMM307/Comm307LgBanner.png",
    template: "graphicDesign/COMM307/"
};
graphics[7] = {
    image: "graphicDesign/CS246/CS246_LgBanner_01.jpg",
    template: "graphicDesign/CS246/"
};
graphics[8] = {
    image: "graphicDesign/ECEN150/Images/largeBanner.jpg",
    template: "graphicDesign/ECEN150/"
};
graphics[9] = {
    image: "graphicDesign/ECON150/ECON150LgBanner.jpg",
    template: "graphicDesign/ECON150/"
};
graphics[10] = {
    image: "graphicDesign/ED313/ED313LgBanner.png",
    template: "graphicDesign/ED313/"
};
graphics[11] = {
    image: "graphicDesign/ESS375/ESS375_LgBanner_01.JPG",
    template: "graphicDesign/ESS375/"
};
graphics[12] = {
    image: "graphicDesign/FDAMF101/FdFreedomLgBanner.jpg",
    template: "graphicDesign/FDAMF101/"
};
graphics[13] = {
    image: "graphicDesign/HFED340/HFED340LgBanner.png",
    template: "graphicDesign/HFED340/"
};
graphics[14] = {
    image: "graphicDesign/MATH100B/largeBanner.jpg",
    template: "graphicDesign/MATH100B/"
};
graphics[15] = {
    image: "graphicDesign/PrePathwayEnglish/PrePthwyLgBanner.jpg",
    template: "graphicDesign/PrePathwayEnglish/"
};
graphics[16] = {
    image: "graphicDesign/RM373/RM373_LgBanner_01.JPG",
    template: "graphicDesign/RM373/"
};
graphics[17] = {
    image: "graphicDesign/SOC323/largeBanner.jpg",
    template: "graphicDesign/SOC323/"
};
graphics[18] = {
    image: "graphicDesign/SPAN101/largeBanner.jpg",
    template: "graphicDesign/SPAN101/"
};
graphics[19] = {
    image: "graphicDesign/SPAN102/largeBanner.jpg",
    template: "graphicDesign/SPAN102/"
};
graphics[20] = {
    image: "graphicDesign/SPAN302/largeBanner.jpg",
    template: "graphicDesign/SPAN302/"
};

function getGraphics() {
    var graphicsList = "";
    for (var i = 0; i < graphics.length; i++) {
        graphicsList += '<div onclick="previewTemplate(\'';
        graphicsList += graphics[i].template;
        graphicsList += '\')"><img src="';
        graphicsList += graphics[i].image;
        graphicsList += '" /></div>';
    }
    
    return graphicsList;
}

function closeTemplate() {
    $("aside").remove();
}

function previewTemplate(template) {
    var preview = "<aside>";
    preview += '<iframe src="'+template+'" />';
    preview += '<button onclick="closeTemplate()">x</button>';
    preview += "</aside>";
    
    $("body").append(preview);
}