/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Declarations/JSONs

// Skills array
var skills  = ["Awesome", "Great", "Cool", "Fantastic"];

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
    "skills": skills,
    "bioPic": "images/fry.jpg"

}

// Work Details
var work = {
    "jobs": [
        {
            "employer": "Siebel Systems",
            "title": "Lead Software Engineer",
            "location": "Parsippany, NJ",
            "dates": "1999 - 2006",
            "description": "Development, configuration, builds, IT work, etc."
        },
        {
            "employer": "Oracle Corp",
            "title": "Sr. Development Manager",
            "location": "Redwood City, CA",
            "dates": "2006 - future",
            "description": "Managing People, Mentoring, Building Teams, Source Code Management, Infrastructure Management, etc."
        }
    ]
};

// Project Details
var projects = {
    "projects": [
        {
            "title": "Building my web page",
            "dates": "2015",
            "description": "Duplicating a mock up",
            "images": [
                "images/project-image.jpg",
                "images/project-image.jpg"
            ]
        },
        {
            "title": "Interactive Resume",
            "dates": "2015",
            "description": "Creating my resume",
            "images": [
                "images/Project_Kick-off.jpg",
                "images/projectmanagement_small.jpg"
            ]
        },
        {
            "title": "Asteroids",
            "dates": "2013",
            "description": "Create the Asteroids game using Python",
            "images": [
                "images/asteroid.png",
            ]
        }
    ]
}

// Education - Schools and online courses
var education = {
    "schools": [
        {
            "name": "University of Toledo",
            "degree": "MS",
            "dates": 1998,
            "location": "Toledo, OH",
            "majors": [
                "Electrical Engineering",
            ],

            "url": "http://www.utoledo.edu"
        },
        {
            "name": "VJTI",
            "degree": "BE",
            "dates": 1995,
            "location": "Mumbai, India",
            "majors": [
                "Electrical Engineering",
            ],
            "url": "http://www.umumbai.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "dates": 2015,
            "URL": "http://www.udacity.com"
        },
        {
            "title": "Python",
            "school": "Coursera",
            "dates": 2013,
            "URL": "http://www.coursera.org"
        }
    ]
}

// Function to display the Bio
bio.display = function(){
    var formattedName  =  HTMLheaderName.replace("%data%", bio.name);
    var formattedRole  =  HTMLheaderRole.replace("%data%", bio.role);
    var formattedbioPic  =  HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedwelcomeMsg  =  HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    // Displaying Name, Role, Picture and welcome message
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedwelcomeMsg);

    // SKILLS
    if (bio.skills.length > 0){
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

// Function to display contact information based on top or footer
function displayContacts(topFoot){
    var conLoc = "#" + topFoot + "Contacts"
    var formattedMobile  =  HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail  =  HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub  =  HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter  =  HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation  =  HTMLlocation.replace("%data%", bio.contacts.location);
    $(conLoc).append(formattedMobile);
    $(conLoc).append(formattedEmail);
    $(conLoc).append(formattedGithub);
    $(conLoc).append(formattedTwitter);
    $(conLoc).append(formattedLocation);
}

// Function to show work details
function displayWork(){
    for(job in work.jobs){
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkEmployer.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

// Function to display projects
projects.display = function(){
    for(p in projects.projects){
        // create new div for projects
        $("#projects").append(HTMLprojectStart);

        // project details
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
        $(".project-entry:last").append(formattedDescription);

        // Show Project Images
        if (projects.projects[p].images.length >0){
            for (i in projects.projects[p].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

// Function to display projects
education.display = function(){
    for(i in education.schools){
        // create new div for education
        $("#education").append(HTMLschoolStart);

        // School details
        var formattedSchool = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        // Concat school and Degree
        var formattedSchoolDegree  = formattedSchool + formattedDegree;
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        if (education.schools[i].majors.length >0){
            for (m in education.schools[i].majors){
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[m]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }

    // Online Courses
    $("#education").append(HTMLonlineClasses);
    for(i in education.onlineCourses){
        // online Course Details
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedTitleSchool  = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].URL);
        $(".education-entry:last").append(formattedURL);
    }
}

//For Internationalize Button
function inName(){
    var name = $("#name").html();
    name = name.trim().split (" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

// All the functions will now be called
// Display the bio
bio.display();

// Display Contacts
displayContacts("top");
displayContacts("footer");

// Display Work
displayWork();

// Displaying  Projects
projects.display();

// Show Education
education.display();

// Internationalize Button
$("#main").append(internationalizeButton);

// Show the Map with locations
$("#mapDiv").append(googleMap);