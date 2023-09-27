const sachmatai = document.querySelector('.sachmatai');
const url = 'https://picsum.photos/v2/list?page=';

function generuotiGalerijosElementa(elementas) {
    const galleryElement = document.createElement('div');
    galleryElement.className = 'galleryElement';

    const img = document.createElement('img');
    img.src = elementas.download_url;
    img.alt = elementas.author;

    // Jei Ekrane matom tik daly nuotrauku kraus tik tas kurios matosi
    // ekrane veliau paskrolinus kraun likusias
    img.loading = 'lazy';

    galleryElement.append(img);

    const autorius = document.createElement('div');
    autorius.textContent = elementas.author;
    galleryElement.append(autorius);
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
