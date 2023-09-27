const data = document.getElementById('data');
const saveBtn = document.getElementById('save');
const displayBtn = document.getElementById('display');
const storageTypeBtn = document.getElementById('storage');
let storage = localStorage;
let storageType = true;

saveBtn.onclick = function () {
    storage.setItem('raktaZodis', data.value);
    // Cia informuojam vartotoja apie sekminga ssaugojima
    // ...
}

displayBtn.onclick = function () {
    const newElementas = document.createElement('div');
    newElementas.textContent = storage.getItem('raktaZodis');
    document.querySelector('main').append(newElementas);
}

storageTypeBtn.onclick = function () {
    storageType = !storageType
    if (!storageType) {
        storage = sessionStorage;
        storageTypeBtn.textContent = 'Session'
        return;
    }
    storageTypeBtn.textContent = 'Local'
    storage = localStorage;
}

