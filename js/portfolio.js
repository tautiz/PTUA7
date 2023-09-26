const sachmatai = document.querySelector('.sachmatai');
const url = '/galerijos_duomenys.json';

function generuotiGalerijosElementa(elementas) {
    const galleryElement = document.createElement('div');
    galleryElement.className = 'galleryElement';

    const img = document.createElement('img');
    img.src = elementas.url;
    img.alt = elementas.autorius + ' ' + elementas.pavadinimas;
    galleryElement.append(img);

    const pavadinimas = document.createElement('span');
    pavadinimas.textContent = elementas.pavadinimas;
    galleryElement.append(pavadinimas);

    const data = document.createElement('div');
    data.textContent = elementas.data;
    galleryElement.append(data);
    return galleryElement;
}

function generuotiGalerija(url) {

    fetch(url)
        .then(response => response.json())
        .then(jsonObjektas => {
            jsonObjektas.forEach(elementoDuomenys => {
                const galleryElement = generuotiGalerijosElementa(elementoDuomenys);
                sachmatai.append(galleryElement);
            });
        })
}

generuotiGalerija(url);
