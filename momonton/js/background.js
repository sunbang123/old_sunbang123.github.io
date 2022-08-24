const body = document.body;
const images = ["0.jpg", "1.jpg", "2.jpg"];

let backgroundImageIndex = -1;
const prevIndex = localStorage.getItem("todo-background-index");

do {
    // 실행할 코드 작성
    backgroundImageIndex = Math.floor(Math.random()*images.length);
                            // 랜덤 인수를 반환해준다.
} while (prevIndex && +prevIndex === backgroundImageIndex); // 조건문
localStorage.setItem("todo-background-index", backgroundImageIndex);
// 조건이 true일때 반복, 조건이 false일때 반복을 멈춘다.
// prevIndex는 string

const chosenImage = images[backgroundImageIndex];

body.style.backgroundImage = `url(img/${chosenImage})`;