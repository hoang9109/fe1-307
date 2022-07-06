const lightWrapper = document.querySelector('.light-wrapper');
for (let i = 0; i < 50; i++) {
    lightWrapper.innerHTML += `<div class="light"></div>`;
}

const lights = document.querySelectorAll('.light');
const colors = ['pink', 'violet', 'yellow', 'cyan', 'orange'];
const colorsLength = colors.length;

let lightInterval = setInterval(function () {
    lights.forEach(element => {
        element.style.background = colors[getRandomInt(0, colorsLength)];
    });
}, 100);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}