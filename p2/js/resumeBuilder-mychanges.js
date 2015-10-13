/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills  = ["Awesoneness", "Greatness", "Coolness", "Fantastic"];

var bio = {
    "name" : "Umang Vanjara",
    "role" : "FEND",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "umang@udacity.com",
        "github": "datechie",
        "twitter": "@uvtwits",
        "location": "Fremont"
    },
    "welcomeMessage": "Hello, I am a FEND Developer to be!!",
    "skills": skills,
    "bioPic": "images/fry.jpg"

}


var formattedName  =  HTMLheaderName.replace("%data%", bio.name);
var formattedRole  =  HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile  =  HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail  =  HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub  =  HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter  =  HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation  =  HTMLlocation.replace("%data%", bio.contacts.location);
var formattedbioPic  =  HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg  =  HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// Displaying Name and Role
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Displaying contact information
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

// Picture and Welcome Message
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);

// Displaying contact information in the footer
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);


var work = {
    "jobs": [
        {
            "employer": "Siebel Systems",
            "title": "Lead Software Engineer",
            "dates": "1999 - 2006",
            "description": "Doing development, configuration, builds, IT work, etc."
        },
        {
            "employer": "Oracle Corp",
            "title": "Sr. Development Manager",
            "dates": "2006 - future",
            "description": "Managing People, Mentoring, Building Teams, Source Code Management, Infrastructure Management, etc."
        }
    ]
};


var education = {
    "schools": [
        {
            "name": "University of Toledo",
            "location": "Toledo",
            "degree": "MS",
            "major": [
                "Electrical Engineering",
                "Image Processing"
            ],
            "dates": "2013-2014",
            "url": "http://www.utoledo.edu"
        },
        {
            "name": "VJTI",
            "location": "Mumbai",
            "degree": "BE",
            "major": [
                "Electrical Engineering",
                "Electronic Engineering"
            ],
            "dates": "2015",
            "url": "http://www.umumbai.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "FEND",
            "school": "Udacity",
            "dates": "2015",
            "url": "www.udacity.com"
        },
        {
            "title": "Python",
            "school": "Coursera",
            "dates": "2013",
            "url": "www.coursera.org"
        }
    ]
}


var projects = {
    "proj": [
        {
            "title": "Building my web page",
            "dates": "2015",
            "description": "Duplicating a mock up",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        },
        {
            "title": "Interactive Resume",
            "dates": "2015",
            "description": "Creating my resume",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        },
    ]
}


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

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
}

displayWork();

//For Internationalize Button
function inName(){
    name = name.trim().split (" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toUpperCase();

    return name[0] + " " + name[1];

}

$("#main").append(internationalizeButton);

// Function to display projects
projects.display = function(){

        for(p in projects.proj){
            // create new div for projects
            $("#projects").append(HTMLprojectStart);

            // project details
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.proj[p].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.proj[p].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.proj[p].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.proj[p].images.length >0){
                for (i in projects.proj[p].images){
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.proj[p].images[i]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
    }

}

// Displaying  Projects
projects.display();

$("#mapDiv").append(googleMap);