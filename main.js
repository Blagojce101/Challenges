const btn = document.querySelectorAll('.button');
const paragraph = document.querySelector('p');

const dell = document.querySelector('.delete');
const shift = document.querySelector('.shift');
const space = document.querySelector('.space');

let arrayOfLetters = [];

// Click Events

btn.forEach((item) => {
    item.addEventListener("click", (event) => {
        paragraph.innerText += `${event.target.innerText}`;
        arrayOfLetters = paragraph.innerText.split('');
    });
});

// Delete
dell.addEventListener("click", () => {
    arrayOfLetters.pop('');
    paragraph.innerText = arrayOfLetters.join('');
});

// Space
space.addEventListener("click", () => {
    arrayOfLetters.push(space.value);
    paragraph.innerText = arrayOfLetters.join('');
});

// Shift
shift.addEventListener("click", () => {
    btn.forEach(btn => {
        btn.classList.toggle('text-lowercase');
    });
});