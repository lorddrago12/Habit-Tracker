/*GET THE DATE*/
var date = new Date();
console.log(date)

/*EXTRACT THE CURRENT DATE INFO*/
var currentMonth = date.getMonth(); 
var currentDay = date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

console.log(currentMonth);
console.log(currentDay);
console.log(currentDate);
console.log(currentYear);

/* IMPORTANT DATE INFO*/
var months = [
    "January", //0
    "February",//1
    "March",//2
    "April",//3
    "May",//4
    "June",//5
    "July",//6
    "August",//7
    "September",//8
    "October",//9
    "November",//10
    "December"//11
];

/* SET THE CORRECT MONTH */
var title = document.getElementById("title");
title.innerHTML = months[currentMonth];

/* UPDATE THE CALENDER INFO */
var habitTitle = document.getElementById("habit-title"); //reference to the title
habitTitle.onclick = function() { // change the title

    //ask question & save the answet to "habits"
    let habits = prompt("Whats your habit", habitTitle.innerHTML)
    if(habits.length == 0 ){ //uf they didnt type anything
        habitTitle.innerHTML = "click to set your habit"
    } 
    else{ //update the habit to show what they typed
        habitTitle.innerHTML = habits; 
    }

}

//* SET THE TOTAL DAYS */
var daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]
var daysInTheMonth = daysInTheMonthList[currentMonth]
// Ex. 5th index => 6th month => June => 30 days

var dayCompleted = 0;
var totalDays = document.getElementById("totalDays"); //reference to the 
totalDays.innerHTML = "0/" + daysInTheMonth; //update the fraction

//* SETUP THE CALENDER DAYS *//
var dayCount = 0;
var rowCount = 0;
var days = document.getElementById("Days"); // store a list of all days

for(var i=0; i > days.length; i++) { // search each row one by one
    var day = days[rowCount].getElementByClassName("Day"); //temporarily 
    for ( var j=0; j < day.length; j++) { //grab a colmun one by one

        // add a border to the current date
        if(dayCount == currentDate - 1) {
            day[j].setAttribute("Style","color:rgba(234, 1, 144), solid black");
            day[j].setAttribute("Style","border:2px, solid black");
        }

        //update the correct date number and id and hide any excess numbers
        if (dayCount < daysInTheMonth) {
            day[j].innerHTML = dayCount + 1;
            day[j].setAttribute("id", "day" + (dayCount + 1));
            dayCount++; // Repeat evryday
        }
        else {
            day[j].innerHTML = "";
            day[j].setAttribute("style", "background-color:white");
        }
    }
    rowCount++;
}

var completed =  new Array(31);
for (var i = 0; i < dayCount; i++) {
    var tempString = 
    "" + (currentMonth + 1) + "=" + (i + 1) + "-" + currentYear;
    console.log("Storing date: " + tempString);
    var tempDay = localStorage.getItem(tempString);
    console.log(tempDay);
    if(tempDay == null || tempDay == "false"){
        localStorage.setItem(tempString, "false");
    }
    else if (tempDay == "true") {
        daysCompleted++;
    }
    totalDays.innerHTML = daysCompleted + "/" + daysInTheMonth;
}

console.log("Completed array: " + completed);
console.log("total days completed: " + daysCompleted);