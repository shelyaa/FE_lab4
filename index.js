const element = document.getElementById('change-color');
const nextElement = document.querySelector(".class");
const increaseButton = document.getElementById('increase-button');
const decreaseButton = document.getElementById('decrease-button');
const removeButton = document.getElementById('remove-button');

const image = document.getElementById('image')

document.addEventListener('click', function (e) {
    if (e.target === element) {
        e.target.style.color = e.target.style.color === 'red' ? 'black' : 'red';
        e.target.style.backgroundColor = e.target.style.backgroundColor === 'black' ? 'red' : 'black';
    }

    if (e.target === nextElement) {
        e.target.style.color = e.target.style.color === 'red' ? 'black' : 'red';
        e.target.style.backgroundColor = e.target.style.backgroundColor === 'black' ? 'red' : 'black';
    }
});

increaseButton.addEventListener('click', function () {
    image.style.width = '800px';
});

decreaseButton.addEventListener('click', function () {
    image.style.width = '400px';
});

removeButton.addEventListener('click', function () {
    image.remove();
});
