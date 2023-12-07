const ruleta = document.querySelector('.ruleta');
const btnJugar = document.querySelector('#btnJugar');
const cantVueltas = 10;
let categoriaSeleccionada = 0;
const gradosVela = 15;
const gradosRegaloSorpresa_1 = 45;
const gradosGiftcar_50 = 75;
const gradosEstucheVino = 105;
const gradosRegaloSorpresa_2 = 135;
const gradosGiftcar_20 = 165;
const gradosBotellaVino = 195;
const gradosRegaloSorpresa_3 = 225;
const gradosGiftcar_10 = 255;
const gradosReloj = 285;
const gradosRegaloSorpresa_4 = 315;
const gradosGiftcar_100 = 345;
let girosTotales = 0;

const premios = {
    vela: 15,
    regaloSorpresa_1: 45,
    giftcar_50: 75,
    estucheVino: 105,
    regaloSorpresa_2: 135,
    giftcar_20: 165,
    botellaVino: 195,
    regaloSorpresa_3: 225,
    giftcar_10: 255,
    reloj: 285,
    regaloSorpresa_4: 315,
    giftcar_100: 345,
};


const premiosCategoria_1 = [gradosRegaloSorpresa_1, gradosRegaloSorpresa_2, gradosGiftcar_10, gradosRegaloSorpresa_3, gradosBotellaVino, gradosRegaloSorpresa_4];
const premiosCategoria_2 = [gradosGiftcar_20, gradosRegaloSorpresa_1, gradosReloj, gradosRegaloSorpresa_2];
const premiosCategoria_3 = [gradosGiftcar_50, gradosVela, gradosRegaloSorpresa_3, gradosEstucheVino];
const premiosCategoria_4 = [gradosGiftcar_100, gradosVela, gradosRegaloSorpresa_4, gradosEstucheVino];

let grados = 0;
let indiceAleatorio = 0;
const girarRuleta = () => {
    categoriaSeleccionada = localStorage.getItem('categoria');
    grados = 0;

    if (categoriaSeleccionada === '1') {
        indiceAleatorio = Math.floor(Math.random() * premiosCategoria_1.length);
        grados = premiosCategoria_1[indiceAleatorio];
        segundoIntento = false;
    }

    if (categoriaSeleccionada === '2') {
        indiceAleatorio = Math.floor(Math.random() * premiosCategoria_2.length);
        grados = premiosCategoria_2[indiceAleatorio];
        segundoIntento = false;
    }

    if (categoriaSeleccionada === '3') {
        indiceAleatorio = Math.floor(Math.random() * premiosCategoria_3.length);
        grados = premiosCategoria_3[indiceAleatorio];
        // premiosCategoria_3.splice(indiceAleatorio, 1); //Eliminar Premio para que no se reppita en el segundo giro
        // contadorIntento++;
        // segundoIntento = contadorIntento === 2 ? false : true;
        segundoIntento = false;
    }

    if (categoriaSeleccionada === '4') {
        indiceAleatorio = Math.floor(Math.random() * premiosCategoria_4.length);
        grados = premiosCategoria_4[indiceAleatorio];
        premiosCategoria_4.splice(indiceAleatorio, 1); //Eliminar Premio para que no se reppita en el segundo giro
        contadorIntento++;
        segundoIntento = contadorIntento === 2 ? false : true;
    }

    const girosTotales = 360 * cantVueltas + grados;

    ruleta.style.transition = 'all 5s ease';
    ruleta.style.transform = `rotate(${girosTotales}deg)`;
    ruleta.classList.add('blur');
};

const buscarRegaloPorGrados = (grados) => {
    for (const [nombre, gradosRegalo] of Object.entries(premios)) {
        if (gradosRegalo === grados) {
            return nombre;
        }
    }
    return 'Regalo no encontrado';
};

btnJugar.addEventListener('click', () => {
    girarRuleta();
});

ruleta.addEventListener('transitionend', () => {
    ruleta.classList.remove('blur');
    ruleta.style.transition = 'none';
    ruleta.style.transform = `rotate(${grados % 360}deg)`;
    premiacion(buscarRegaloPorGrados(grados));

    

});
