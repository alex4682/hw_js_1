const sliderLine = document.querySelector('.gallery');
const images = document.querySelectorAll('.image');
let offset = 0;
const imageWidth = 300;
const totalWidth = imageWidth * images.length;

document.body.addEventListener('keydown', function (evt) {
    if (evt.key === "ArrowRight") {
        offset += imageWidth;
        if (offset >= totalWidth) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    } else if (evt.key === "ArrowLeft") {
        offset -= imageWidth;
        if (offset < 0) {
            offset = totalWidth - imageWidth;
        }
        sliderLine.style.left = -offset + 'px';
    }
});


const input = document.querySelector("input");
const render = document.querySelector("[data-action='render']");
const reset = document.querySelector("[data-action='destroy']");
const boxesDiv = document.querySelector("#boxes");

render.addEventListener("click", () => {
    const num = parseInt(input.value, 10);
    let str = [];

    for (let i = 0; i < num; i++) {
        str.push(`<div class="box"></div>`);
    }
    boxesDiv.innerHTML = str.join('');
});

reset.addEventListener("click", () => {
    input.value = '';
    boxesDiv.innerHTML = ' ';
});
