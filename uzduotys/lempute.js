const lemputeDOM = document.getElementById('lempute');
let lemposBusena = false;

function ijungtiLempute() {
    lemputeDOM.src = '../img/on.png';
}

function isjungtiLempute() {
    lemputeDOM.src = '../img/off.png';
}

function toggleLempute() {
    if (lemposBusena) {
        ijungtiLempute();
    } else {
        isjungtiLempute();
    }
    lemposBusena = !lemposBusena;
}
