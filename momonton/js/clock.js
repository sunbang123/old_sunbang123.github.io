const clock = document.getElementById("clock");
const date = new Date();
const currentHours = String(date.getHours()).padStart(2, "0");
const currentMinutes = String(date.getMinutes()).padStart(2, "0");
const currentSeconds = String(date.getSeconds()).padStart(2, "0");

clock.innerText = `${currentHours}:${currentMinutes}:${currentSeconds}`;