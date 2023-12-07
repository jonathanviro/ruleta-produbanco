

const btnCategoria1 = document.querySelector('#btn-categoria-1');
const btnCategoria2 = document.querySelector('#btn-categoria-2');
const btnCategoria3 = document.querySelector('#btn-categoria-3');
const btnCategoria4 = document.querySelector('#btn-categoria-4');

const startGame = (categoria) => {
    localStorage.setItem('categoria', categoria);    
    window.location.href = './src/views/ruleta.html';
};

btnCategoria1.addEventListener('click', () => {
    startGame(1);
});
btnCategoria2.addEventListener('click', () => {
    startGame(2);
});
btnCategoria3.addEventListener('click', () => {
    startGame(3);
});
btnCategoria4.addEventListener('click', () => {
    startGame(4);
});
