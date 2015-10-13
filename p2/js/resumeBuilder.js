/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Declarations/JSONs

// Bio Details
var bio = {
    "name": "Umang Vanjara",
    "role": "FEND Student while being a Sr. Development Manager",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "umang@udacity.com",
        "github": "datechie",
        "twitter": "@uvtwits",
        "location": "Fremont, CA"
    },
    "welcomeMessage": "Hello, I am a Future Front End Developer Nanodegree Graduate!!",
    "skills": ["Awesome", "Great", "Cool", "Fantastic"],
    "bioPic": "images/fry.jpg"
};

// Work Details
var work = {
    "jobs": [{
        "employer": "Siebel Systems",
        "title": "Lead Software Engineer",
        "location": "Parsippany, NJ",
        "dates": "1999 - 2006",
        "description": "Development, configuration, builds, IT work, etc."
    }, {
        "employer": "Oracle Corp",
        "title": "Sr. Development Manager",
        "location": "Redwood City, CA",
        "dates": "2006 - future",
        "description": "Managing People, Mentoring, Building Teams, Source Code Management, Infrastructure Management, etc."
    }]
};

// Project Details
var projects = {
    "projects": [{
        "title": "Building my web page",
        "dates": "2015",
        "description": "Duplicating a mock up",
        "images": [
            "images/project-image.jpg",
            "images/project-image.jpg"
        ]
    }, {
        "title": "Interactive Resume",
        "dates": "2015",
        "description": "Creating my resume",
        "images": [
            "images/Project_Kick-off.jpg",
            "images/projectmanagement_small.jpg"
        ]
    }, {
        "title": "Asteroids",
        "dates": "2013",
        "description": "Create the Asteroids game using Python",
        "images": [
            "images/asteroid.png",
        ]
    }]
};

// Education - Schools and online courses
var education = {
    "schools": [{
        "name": "University of Toledo",
        "degree": "MS",
        "dates": 1998,
        "location": "Toledo, OH",
        "majors": [
            "Electrical Engineering",
        ],

        "url": "http://www.utoledo.edu"
    }, {
        "name": "VJTI",
        "degree": "BE",
        "dates": 1995,
        "location": "Mumbai, India",
        "majors": [
            "Electrical Engineering",
        ],
        "url": "http://www.umumbai.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": 2015,
        "URL": "http://www.udacity.com"
    }, {
        "title": "Python",
        "school": "Coursera",
        "dates": 2013,
        "URL": "http://www.coursera.org"
    }]
};

/** This function displays biography
 * Name
 * Current Role
 * Picture
 * Welcome Message
 * Skills
 */
bio.display = function() {
    'use strict';
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    // Displaying Name, Role, Picture and welcome message
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedwelcomeMsg);

    // SKILLS
    if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills-h3").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills-h3").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills-h3").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills-h3").append(formattedSkill);
    }
}

/** This function displays contact details
 * Mobile
 * Email
 * Github details
 * Twitter id
 * Location
 */
bio.displayContacts = function(topFoot) {
    'use strict';
    var conLoc = "#" + topFoot + "Contacts";
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(conLoc).append(formattedMobile);
    $(conLoc).append(formattedEmail);
    $(conLoc).append(formattedGithub);
    $(conLoc).append(formattedTwitter);
    $(conLoc).append(formattedLocation);
}

/** This function displays work history
 * Employer
 * Title
 * Dates job held
 * Location
 * Description
 */
work.display = function() {
    'use strict';
    for (var job in work.jobs) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        var thisJob = work.jobs[job];
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", thisJob.employer);
        var formattedTitle = HTMLworkEmployer.replace("%data%", thisJob.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", thisJob.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", thisJob.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", thisJob.description);
        $(".work-entry:last").append(formattedDescription);
    }
}

/** This function displays projects done
 * Title
 * Date when done
 * Description
 * Project Images
 */
projects.display = function() {
    'use strict';
    var projectCount = projects.projects.length;
    for (var p = 0; p < projectCount; p++) {
        // create new div for projects
        $("#projects").append(HTMLprojectStart);

        // project details
        var thisProject = projects.projects[p];
        var formattedTitle = HTMLprojectTitle.replace("%data%", thisProject.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", thisProject.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", thisProject.description);
        $(".project-entry:last").append(formattedDescription);

        // Show Project Images
        var thisImage = projects.projects[p].images;
        if (thisImage.length) {
            for (var i = 0; i < thisImage.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", thisImage[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

/** This function displays Education details - schools attended and online Courses taken
 * School Name
 * Degree and Date
 * Location
 * Majors
 * For Online Courses
 * Online Course Title
 * Online Course Provider Name
 * URL
 */
education.display = function() {
    'use strict';
    for (var i in education.schools) {
        // create new div for education
        $("#education").append(HTMLschoolStart);

        // School details
        var thisSchool = education.schools[i];
        var formattedSchool = HTMLschoolName.replace("%data%", thisSchool.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", thisSchool.degree);
        // Concat school and Degree
        var formattedSchoolDegree = formattedSchool + formattedDegree;
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", thisSchool.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", thisSchool.location);
        $(".education-entry:last").append(formattedLocation);

        if (thisSchool.majors.length) {
            for (var m = 0; m < thisSchool.majors; m++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", thisSchool.majors[m]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }

    // Online Courses
    $("#education").append(HTMLonlineClasses);
    for (var o in education.onlineCourses) {
        // online Course Details
        var thisCourse = education.onlineCourses[o];
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", thisCourse.title);
        var formattedOschool = HTMLonlineSchool.replace("%data%", thisCourse.school);
        var formattedTitleOschool = formattedTitle + formattedOschool;
        $(".education-entry:last").append(formattedTitleOschool);
        var formattedOdates = HTMLonlineDates.replace("%data%", thisCourse.dates);
        $(".education-entry:last").append(formattedOdates);
        var formattedURL = HTMLonlineURL.replace("%data%", thisCourse.URL);
        $(".education-entry:last").append(formattedURL);
    }
}

/** This function internationalizes the name */
function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

// All the functions will now be called
// Display the bio
bio.display();

// Display Contacts
bio.displayContacts("top");
bio.displayContacts("footer");

// Display Work
work.display();

// Displaying  Projects
projects.display();

// Show Education
education.display();

// Internationalize Button
$("#main").append(internationalizeButton);

// Show the Map with locations
$("#mapDiv").append(googleMap);