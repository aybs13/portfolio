// javascript DOM
const toggle = document.getElementById('theme-toggle');
let isDarkMode = true;

toggle.addEventListener('click', () => {
    document.body.style.background = isDarkMode
        ? 'linear-gradient(to bottom, #243B55, #141E30)'
        : 'linear-gradient(to bottom, #141E30, #243B55)';
    isDarkMode = !isDarkMode;
});

const dynamicText = document.getElementById('dynamic-text');
const textArray = ['Fullstack Developer', 'Cyber Security'];
let textIndex = 0;

function updateText() {
    dynamicText.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(updateText, 5000);