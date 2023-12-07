const texto_regalo = document.querySelector('#texto-regalo');
const imagen_regalo = document.querySelector('#imagen-regalo');
let segundoIntento = true;
let contadorIntento = 0;

const mensajesPremios = {
    vela: 'ESTUCHE DE VINO',
    regaloSorpresa_1: 'REGALO SORPRESA',
    giftcar_50: 'GIFT CARD DE $50',
    estucheVino: 'ESTUCHE DE VINO',
    regaloSorpresa_2: 'REGALO SORPRESA',
    giftcar_20: 'GIFT CARD DE $20',
    botellaVino: 'BOTELLA DE VINO',
    regaloSorpresa_3: 'REGALO SORPRESA',
    giftcar_10: 'GIFT CARD DE $10',
    reloj: 'BOTELLA DE VINO',
    regaloSorpresa_4: 'REGALO SORPRESA',
    giftcar_100: 'GIFT CARD DE $100',
};

const premiacion = (tipo) => {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');

    texto_regalo.innerHTML = `${mensajesPremios[tipo]}`;
    imagen_regalo.src = '../img/win.png';
};

$('#modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');

    if (!segundoIntento) {
        window.location.href = '../../index.html';
    }
});
