// API 비번
const API_KEY = "6b167018d3703cb8d023b66f4b0ccb34";
function onGeoOk(position){
    // 날씨 api 객체에서 위도를 불러옴.
    const lat = position.coords.latitude;
    // 날씨 api 객체에서 경도를 불러옴.
    const lng = position.coords.longitude;
    // 무료 api
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    // api fetch
    fetch(url);
}
function onGeoError(){
    alert("Can't Find you.");
}

// 웹에서 장치의 위치를 알아낼 때 사용
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
                // 장치의 현재 위치를 조사한 후 GeolocationPosition 객체로 반환(주어진 시간에 디바이스가 위치한 지점)