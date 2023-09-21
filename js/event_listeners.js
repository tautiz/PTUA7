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














