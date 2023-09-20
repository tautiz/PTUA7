const meniuDuomenyus = [
    {
        pavadinimas: 'Apie mus visus',
        nuoroda: 'about.html'
    },
    {
        pavadinimas: 'Paslaugos',
        nuoroda: 'services.html'
    },
    {
        pavadinimas: 'Portfolio',
        nuoroda: 'portfolio.html'
    },
    {
        pavadinimas: 'Kontaktai',
        nuoroda: 'contacts.html'
    },
    {
        pavadinimas: 'Naujienos',
        nuoroda: 'news.html'
    }
];

function getMenuData() {
    return meniuDuomenyus;
}

function generateMenuHTML(data) {
    let menuHTML = '';
    for (let i = 0; i < data.length; i++) {
        menuHTML += `<li><a href="${data[i].nuoroda}">${data[i].pavadinimas}</a</li>`;
    }

    return menuHTML;
}

let menuData = getMenuData();
const sugeneruotasMeniuHTML = generateMenuHTML(menuData);

const menuDOM = document.querySelector('.menu');
menuDOM.innerHTML = sugeneruotasMeniuHTML;