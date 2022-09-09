let currentInput = document.querySelector('.currentInput');
let answersScreen = document.querySelector('.answersScreen');
let button = document.querySelector('.button');
let erasebtn = document.querySelector('.erase');
let clearbtn = document.querySelector('.clear');
let evaluate = document.querySelector('.evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener('click', () => {
    realTimeScreenValue = [''];
    answersScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answersScreen.className = 'answerScreen';
    answersScreen.style.color = " rgba(150, 150, 150, 0.87)";
})