const clock = document.getElementById("clock");
const date = new Date();

clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;