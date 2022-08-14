const API_KEY = "6b167018d3703cb8d023b66f4b0ccb34";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url);
}
function onGeoError(){
    alert("Can't Find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);