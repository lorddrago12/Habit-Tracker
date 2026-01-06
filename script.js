/* ============================= */
/* GET TODAY'S DATE INFORMATION */
/* ============================= */

/* Create a Date object (gives current date & time) */
var date = new Date();
console.log(date);

/* Extract useful date values */
var currentMonth = date.getMonth();   // 0–11
var currentDate  = date.getDate();    // 1–31
var currentYear  = date.getFullYear();

console.log(currentMonth);
console.log(currentDate);
console.log(currentYear);


/* ============================= */
/* IMPORTANT DATE CONSTANTS */
/* ============================= */

/* Month names — index matches getMonth() */
var months = [
    "January",   // 0
    "February",  // 1
    "March",     // 2
    "April",     // 3
    "May",       // 4
    "June",      // 5
    "July",      // 6
    "August",    // 7
    "September", // 8
    "October",   // 9
    "November",  // 10
    "December"   // 11
];


/* ============================= */
/* SET THE MONTH TITLE */
/* ============================= */

/* Grab the title element */
var title = document.getElementById("title");

/* Show the current month name */
title.innerHTML = months[currentMonth];


/* ============================= */
/* UPDATE HABIT TITLE ON CLICK */
/* ============================= */

/* Reference the habit title */
var habitTitle = document.getElementById("habit-title");

/* Change habit when clicked */
habitTitle.onclick = function () {

    /* Ask user for a habit */
    let habits = prompt("What's your habit?", habitTitle.innerHTML);

    /* If user cancels or enters nothing */
    if (!habits || habits.length === 0) {
        habitTitle.innerHTML = "Click to set your habit";
    }
    else {
        /* Update habit title */
        habitTitle.innerHTML = habits;
    }
};


/* ============================= */
/* DAYS IN CURRENT MONTH */
/* ============================= */

/* Number of days in each month */
var daysInTheMonthList = [
    31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
];

/* Get days for the current month */
var daysInTheMonth = daysInTheMonthList[currentMonth];
// Example: index 5 → June → 30 days


/* ============================= */
/* TOTAL DAYS COUNTER */
/* ============================= */

var daysCompleted = 0;

/* Reference the counter text */
var totalDays = document.getElementById("total-days");

/* Initial counter text */
totalDays.innerHTML = "0/" + daysInTheMonth;


/* ============================= */
/* BUILD CALENDAR DAYS */
/* ============================= */

/* Reference the tracker grid */
var tracker = document.getElementById("tracker");

/* Create each day dynamically */
for (var i = 1; i <= daysInTheMonth; i++) {

    /* Create a new day circle */
    var day = document.createElement("div");
    day.className = "day";
    day.innerHTML = i;

    /* Highlight today */
    if (i === currentDate) {
        day.style.border = "3px solid black";
        day.style.backgroundColor = "skyblue";
    }

    /* Toggle completion on click */
    day.onclick = function () {

        /* Toggle completed state */
        this.classList.toggle("completed");

        /* Update completed count */
        updateCompletedCount();
    };

    /* Add day to calendar */
    tracker.appendChild(day);
}


/* ============================= */
/* UPDATE COMPLETED COUNTER */
/* ============================= */

function updateCompletedCount() {

    /* Count completed days */
    daysCompleted =
        document.querySelectorAll(".day.completed").length;

    /* Update text */
    totalDays.innerHTML =
        daysCompleted + "/" + daysInTheMonth;
}


/* ============================= */
/* DEBUG LOGS */
/* ============================= */

console.log("Days in month:", daysInTheMonth);
console.log("Current date:", currentDate);

/* ============================= */
/* CHECK STORAGE AND UPDATE COMPLETED ARRAY */
/* ============================= */

for (var i=0; i < currentDate; i++) {
    var tempString =
    "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
    console.log(tempString);
    
    var choosenDay = localStorage.getItem(tempString);
    console.log(i + 1 + ": " + choosenDay);
    var choosenDayDiv = document.getElementById("day" + (i + 1));
    if (choosenDay === "true") {
        choosenDayDiv.style.backgroundColor = "skyblue";
    } else if (choosenDay === "false") {
        choosenDayDiv.style.backgroundColor = "white";
    }
}

var dayDivs = document.querySelectorAll(".day");
for (var i=0, i < currentDate; i++) {
    dayDivs[i].onclick = function (e) {
        var num = e.target.innerText;
        var selectedDate = document.getElementById(e.target.id);
        var storageString = 
        "" + (currentMonth + 1) + "-" + currentYear;
        
    if(localStorage.getItem(storageString) === "false"){
        selectedDate.style.backgroundColor = "skyblue";
        localStorage.setItem(storageString, true);
        daysCompleted++;
    } else if(localStorage.getItem(storageString) === "true"){
        selectedDate.style.backgroundColor = "white";
        localStorage.setItem(storageString, false);
        daysCompleted--;
    }

    totalDays.innerHTML = daysCompleted + "/" + dayCount;
    console.log(daysCompleted, currentDate);
    if(daysCompleted === currentDate){
        alert("great progress");
    }


    }
}
