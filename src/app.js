function sidebarToggle() {
    let sidebar = document.querySelector('.sidebar-mobile'); 
    sidebar.classList.toggle('show'); 
}

function updateTime() {
    let today = new Date();
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let time = hours + ":" + minutes + ":" + seconds;
    sidebarTime.innerHTML = time;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
setInterval(updateTime, 1000);

updateTime();

function getWeekNumber(date) {
    let firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    let lastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((lastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
function updateWeekNumber() {
    let currentDate = new Date();
    let weekNumber = getWeekNumber(currentDate);
    sidebarWeeks.innerHTML = `Tydzień ${weekNumber}`;
}
updateWeekNumber();
