const body = document.body;
const header = document.querySelector('header');
let counteris = 0;

function spausdintiKiekPaspaude() {
    console.log('Paspaude: ! ' + counteris + 'kartus');
}

function skaiciuoti() {
    counteris++;
}

header.addEventListener('click', spausdintiKiekPaspaude);
// body.addEventListener('click', skaiciuoti);
body.onclick = skaiciuoti;

const output = document.getElementById('output')
const manoForma = document.querySelector('#kontaktu_forma');

manoForma.addEventListener(
    'submit',
    function (ivykis) {
        ivykis.preventDefault();
        const forma = ivykis.target;
        const elementai = forma.elements;

        const vardoVerte = elementai.vardas.value;
        const elPastoVerte = elementai.elpastas.value;
        const zinutesVerte = elementai.zinute.value;

        const vardoElementas = document.createElement('div');
        const pastoElementas = document.createElement('div');
        const zinutesElementas = document.createElement('div');

        vardoElementas.innerHTML = 'Vardas: ' + vardoVerte;
        pastoElementas.textContent = 'El.Pastas: ' + elPastoVerte;
        pastoElementas.className = 'red';
        zinutesElementas.append('Zinute: ' + zinutesVerte);

        output.append(vardoElementas);
        output.append(pastoElementas);
        output.append(zinutesElementas);
    }
);
