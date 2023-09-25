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

        // ??? Sukurti DOM elementus

        // Prideti DOM elementus i 'output' elementa
    }
);










