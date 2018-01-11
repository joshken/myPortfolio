var summaries = [];
summaries[0] = {
    title: "Abdominalpelvic Regions",
    about: "I created this game for a medical terminology course. Students had to memorize several terms and needed visual aids to remember the terms. This game works as interactive flash cards.",
    lessons: ["How to use draggables from jQuery UI", "How to use droppables from jQuery UI", "How to assign locations to droppables"],
    instructions: "To play the game, drag the terms and drop them in the correct location. If the box is incorrect, it will bounce back.",
    link: '<a href="webDev/APRegions/index.html" target="_blank">Play Game</a>'
};
summaries[1] = {
    title: "Bookshelf",
    about: "This activity was created to allow students to look for new books to read as part of their children's literature course. You can click through the books, read summarys, and view illustrations if any.",
    lessons: ["How to create JavaScript objects", "How to create dynamic HTML content with JavaScript", "How to optimize images for online use"],
    instructions: "Use the arrows to view more books. Click on a book to view a summary and view illustrations.",
    link: '<a href="webDev/bookshelf/lesson2/index.html" target="_blank">View Here</a>'
};
summaries[2] = {
    title: "Deduction vs Induction Infographic",
    about: "This interactive infographic illustrates the difference between Induction and Deduction.",
    lessons: ["How to animate objects using jQuery", "How to use JavaScript objects and arrays", "How to dynamically change CSS using JavaScript"],
    instructions: "Hover your mouse over each section to read a definition of the terms.",
    link: '<a href="webDev/DeductionInduction/infographic.html" target="_blank">View Here</a>'
};
summaries[3] = {
    title: "Font Game",
    about: "This game was created for Typography students to practice identifying fonts for their exams.",
    lessons: ["How to randomize order using JavaScript", "How to optimize design for mobile users", "How to create accordian menus using JavaScript"],
    instructions: "To play the game, select a font name then a style. If you are correct, you earn points. Your high score will be saved.",
    link: '<a href="webDev/FontGame/index.html" target="_blank">Play Here</a>'
};
summaries[4] = {
    title: "World Maps Activity",
    about: "This activity was created for students enrolled in Political Science courses. It serves as flash cards to study the countries of each continent.",
    lessons: ["How to use queries to load content specific pages", "How to show and hide images with JavaScript and CSS", "How to layout content with SCSS and Flex boxes"],
    instructions: "Select a country from the sidebar to see it highlighted on the map",
    link: '<a href="webDev/Maps/index.html" target="_blank">View Here</a>'
};
summaries[5] = {
    title: "Medical Terminology Study Guide",
    about: "This was a very large project. Features were continually added throughout development. You combine prefixes, root words, and suffixes to create your own words and definitions.",
    lessons: ["How to filter arrays with JavaScript", "How to sort arrays using JavaScript", "How to use media queries to create print friendly documents"],
    instructions: "Select a prefix, root word, and suffix to combine a word. Click the book icon to see the definition.</p><p>The menu button reveals a list of words from each unit. Clicking on them will select each part of the word from the main page.",
    link: '<a href="webDev/MedicalTerminology/index.html" target="_blank">View Here</a>'
};
summaries[6] = {
    title: "Planes of the Body",
    about: "This activity was also created for the medical terminology course. It helps students remember the planes of the body.",
    lessons: ["How to use the canvas tag", "How to draw a line on the page", "How to manipulate the canvas tag using JavaScript"],
    instructions: "Simply click and drag across the body to identify the plane.",
    link: '<a href="webDev/planes/index.html" target="_blank">View Here</a>'
};
summaries[7] = {
    title: "World Political Systems Infographic",
    about: "This infographic was designed to help students understand the differences between the political systems they study.",
    lessons: ["How to better use JavaScript objects", "How to use touch gestures for mobile devices on the web"],
    instructions: "Click or swipe through the different systems to read the descriptions",
    link: '<a href="webDev/POLSC/index.html" target="_blank">View Here</a>'
};
summaries[8] = {
    title: "Random Dance Generator",
    about: "This is an activity inspired by an actual activity that dance students do in class. They roll a die to specify what kind of dance they have to perform. This activity mimicks that die by randomizing the dance specifications.",
    lessons: ["How to animate objects with CSS", "How to randomize separate objects", "How to create a responsive design for mobile devices"],
    instructions: 'To play the game, click each spec to "roll the die" and find out how to perform your dance.',
    link: '<a href="webDev/RandomDance/index.html" target="_blank">Play Here</a>'
};
summaries[9] = {
    title: "Study of Evolution",
    about: 'This activity allows evolution students to study skulls of ancient inhabitants of the earth and compare it to a human skull.</p><p>This activity was created as an alternative for the <a href="webDev/SkullsSlider/index.html" target="_blank">360<sup>o</sup> Skull Activity</a>.',
    lessons: ["How to swap images using JavaScript", "How to remove backgrounds from images", "How to use JavaScript arrays"],
    instructions: "Select the desired view from the menubar to compare the different angles of the skulls.",
    link: '<a href="webDev/Skulls/index.html" target="_blank">View Here</a>'
};
summaries[10] = {
    title: "360<sup style='font-size:16px'>o</sup> View of Skull",
    about: 'This activity was created for students taking the evolution course. On campus students have access to models of the skulls they study about. This activity allows online students to get a 360<sup>o</sup> view of those models.</p><p>Because of the work involved to create this, we ended up creating an alternative activity to <a href="webDev/Skulls/index.html" target="_blank">study the skulls</a>.',
    lessons: ["How to use a green screen to erase backgrounds", "How to take frame from video footage", "How to smoothly animate those frames using JavaScript"],
    instructions: "Use your mouse or finger to rotate the skull.",
    link: '<a href="webDev/SkullsSlider/index.html" target="_blank">View Here</a>'
};
summaries[11] = {
    title: "Marriage and Family Viewfinder",
    about: "This activity illustrates different perspectives that we might use to look at family dynamics.",
    lessons: ["How to animate objects with CSS", "How to adjust transparency using CSS", "How to tie objects together with JavaScript"],
    instructions: "Click on the handle on the viewfinder to rotate through the icons or click directly on an icon to jump to it.",
    link: '<a href="webDev/ViewMaster/ViewMaster.html" target="_blank">View Here</a>'
}

var sumPosition = [];
sumPosition[0] = null;
sumPosition[1] = null;
sumPosition[2] = [1, 1, 3, 3, 5, 5, 7, 7, 9, 9, 11, 11];
sumPosition[3] = [2, 2, 2, 5, 5, 5, 8, 8, 8, 11, 11, 11];

function getSummary(i) {
    var summary = "";
    summary += "<h2>"+summaries[i].title+"</h2>";
    summary += "<h3>About the Project</h3>";
    summary += "<p>"+summaries[i].about+"</p>";
    summary += "<h3>Things I Learned</h3>";
    summary += "<ul>";
    for (var j = 0; j < summaries[i].lessons.length; j++) {
        summary += "<li>"+summaries[i].lessons[j]+"</li>";
    }
    summary += "</ul>";
    summary += "<h3>How It Works</h3>";
    summary += "<p>"+summaries[i].instructions+"</p>";
    summary += "<p>"+summaries[i].link+"</p>";
    return summary;
}