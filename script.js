/* ============================= */
/* DATE INFO */
/* ============================= */

const date = new Date();
const currentMonth = date.getMonth();
const currentDate = date.getDate();
const currentYear = date.getFullYear();

const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
];

document.getElementById("title").innerText = months[currentMonth];

/* ============================= */
/* HABIT TITLE */
/* ============================= */

const habitTitle = document.getElementById("habit-title");
habitTitle.onclick = () => {
    const habit = prompt("What's your habit?");
    if (habit) habitTitle.innerText = habit;
};

/* ============================= */
/* DAYS IN MONTH */
/* ============================= */

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const tracker = document.getElementById("tracker");
const totalDays = document.getElementById("total-days");

let daysCompleted = 0;

/* ============================= */
/* BUILD DAYS */
/* ============================= */

for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.className = "day";
    day.id = `day-${i}`;
    day.innerText = i;

    const storageKey = `${currentMonth + 1}-${i}-${currentYear}`;

    if (localStorage.getItem(storageKey) === "true") {
        day.classList.add("completed");
        daysCompleted++;
    }

    if (i === currentDate) {
        day.style.border = "3px solid black";
    }

    day.onclick = () => {
        day.classList.toggle("completed");

        const completed = day.classList.contains("completed");
        localStorage.setItem(storageKey, completed);

        daysCompleted += completed ? 1 : -1;
        updateCounter();
    };

    tracker.appendChild(day);
}

/* ============================= */
/* COUNTER */
/* ============================= */

function updateCounter() {
    totalDays.innerText = `${daysCompleted}/${daysInMonth}`;
}

updateCounter();

/* ============================= */
/* RESET */
/* ============================= */

document.getElementById("resetButton").onclick = () => {
    for (let i = 1; i <= daysInMonth; i++) {
        const key = `${currentMonth + 1}-${i}-${currentYear}`;
        localStorage.removeItem(key);

        document.getElementById(`day-${i}`).classList.remove("completed");
    }

    daysCompleted = 0;
    updateCounter();
};
