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


const manoForma = document.querySelector('#kontaktu_forma');

manoForma.addEventListener(
    'submit',
    function (ivykis) {
        ivykis.preventDefault();
        console.log('Ivyko submitas');
        console.log(ivykis);

        const forma = ivykis.target;
        console.log(forma);

        const elementai = forma.elements;
        console.log(elementai);

        console.log(elementai.vardas);
        console.log(elementai.vardas.value);
        console.log(elementai.elpastas.value);
        console.log(elementai.zinute.value);
    }
);










