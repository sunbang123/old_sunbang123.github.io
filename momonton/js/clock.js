const clock = document.getElementById("clock");

const date = new Date();
let timestamp = Math.floor((date.getTime() - new Date(date.toLocaleDateString())) / 1000);

clock.innerText = getDateFormatByTimestamp(timestamp);
timestamp++;

let timerId = setTimeout(function tick() {
    clock.innerText = getDateFormatByTimestamp(timestamp);
    timestamp++;
    timerId = setTimeout(tick, 1000);
  }, 1000);

function getDateFormatByTimestamp(timestamp) {
    let seconds = timestamp % 60;
    let minutes = ((timestamp - seconds) / 60) % 60;
    let hours = (timestamp - seconds - (minutes * 60)) / 3600;
    
    const currentHours = String(hours).padStart(2, "0");
    const currentMinutes = String(minutes).padStart(2, "0");
    const currentSeconds = String(seconds).padStart(2, "0");

    return `${currentHours}:${currentMinutes}:${currentSeconds}`;
}