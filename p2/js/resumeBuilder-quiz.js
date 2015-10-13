/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append("Umang")
 var awesomeThoughts = "I am Umang and I am AWESOME!";
 console.log(awesomeThoughts);

 var funThoughts =awesomeThoughts.replace("AWESOME!", "FUN");
 $("#main").append(funThoughts);

var name = "Umang Vanjara";
var role = "Senior Development Manager";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var s = "audacity";
var skills  = ["Awesoneness", "Greatness", "Coolness"];
var udacityizer = function(s) {
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var s2 = s.slice(-7);
    return s2.charAt(0).toUpperCase() + s2.slice(1).toLowerCase();
    //return s2;

    return s2;
};

var bio1 = {
    "name" : name,
    "role" : role,
    "contact info" : 510-894-3580,
    "URL" : "http://www.linkedin.com/umang.vanjara",
    "message" :  "Welcome to my Resume",
    "skills" : skills
}

var bio = {
    "name" : "Umang Vanjara",
    "role" : "FEND",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "me@Udacity.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "Fremont"
    },
    "welcomeMessage": "Hello How are you?",
    "skills": skills,
    "bioPic": "images/fry.jpg"

}

var work = {};
work.position = "Senior Development Manager";
work.employer =  "Oracle Corp";
work.years = 8;
work.city = "Redwood City";


var education = {};

education["name"] = "University of Toledo";
education["years"] = "1995 -1998";
education["city"] = "Toledo";

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append("\n");
$("#main").append(work["position"]);
$("#main").append(education.name);

var edu = {
    "schools": [
        {
            "name": "Coursera",
            "city": "Mountain View",
            "degree": "Online",
            "major": ["Python", "Game Development"]
        },
        {
            "name": "Udacity",
            "city": "Mountain View",
            "degree": "Online",
            "major": ["FEND", "Full Stack"]
        }
    ]
}