// модалка
const openModal = document.querySelector("button[data-action = open-modal]");
const modal = document.querySelector(".js-backdrop");

openModal.addEventListener("click", () => {
    modal.classList.add("is-active")
    document.body.classList.add("no-scroll");
}
);


const closeModal = document.querySelector('button[data-action=close-modal]');

closeModal.addEventListener("click", () => {
    modal.classList.remove("is-active")
    document.body.classList.remove("no-scroll");
});

const modalWindow = document.querySelector(".modal");

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.classList.remove("is-active")
        document.body.classList.remove("no-scroll");
    }
});


// радіобатони
const text = document.querySelector(".color");
const radioButtons = document.querySelectorAll('input[name="color"]');

radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
        text.style.backgroundColor = this.value;
    });
});


// інпут з текстом
const input = document.querySelector(".js-input");
const span = document.querySelector('.js-span');

input.addEventListener("input", function () {
    const name = input.value.trim();
    span.textContent = name ? name : 'Незнайомець'

});
// к-сть символів
const lengthInput = document.getElementById("validation-input");
const len = parseInt(lengthInput.getAttribute("data-length"));

lengthInput.addEventListener("input", () => {
    if (lengthInput.value.length === len) {
        lengthInput.classList.add("valid");
        lengthInput.classList.remove("invalid");
    } else {
        lengthInput.classList.remove("valid");
        lengthInput.classList.add("invalid");
    }
});


// повзунок з текстом
const rangeText = document.querySelector("#range-text");
const range = document.querySelector("#range");

range.addEventListener("input", () => {
    rangeText.style.fontSize = `${range.value}px`;
});
