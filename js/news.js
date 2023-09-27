const chuckCategories = document.getElementById('chuckCategories');
const chuckJokes = document.getElementById('chuckJokes');
const favBtn = document.getElementById('megstami');
const baseUrl = 'https://api.chucknorris.io/jokes';
let listOfJokes = [];

// 1. Parsisiunciame "Kategoriju" sarasa.
// https://api.chucknorris.io/jokes/categories
fetch(baseUrl + '/categories')
    .then(response => response.json())
    .then(result => renderCategories(result))
    .catch(err => console.error(err));

// 2. Generuojame naujus elementus pagal gautas kategorijas
function renderCategories(list) {
    list.forEach(item => generateCategoryItem(item));
}

// 3. Kiekvienam elementui prisegame 'click' eventa, kad kai ji
//    paspausime mums sius nauja uzklausa gauti juokeli pagal
//    pasirinkta kategorija

// https://api.chucknorris.io/jokes/random?category={category}
function generateCategoryItem(item) {
    const li = document.createElement('li');
    li.textContent = item;
    li.onclick = generateJoke;
    chuckCategories.append(li);
}

function generateJoke(e) {
    const categoryName = e.target.textContent;
    fetch(baseUrl + '/random?category=' + categoryName)
        .then(response => response.json())
        .then(joke => generateJokeElement(joke))
        .catch(err => console.error(err));
}

// 4. Kai gaunamas "Juokelis" sukuriamas <LI> elementas kuriame bus
//    "Juokelio tekstas" ir mygtukas "☆" "★" (saugoti i LocalStorage)
function generateJokeElement(joke) {
    const li = document.createElement('li');
    const starBtn = document.createElement('span');
    starBtn.textContent = '☆';
    starBtn.dataset.juokelis = joke.value;
    starBtn.onclick = saveToFavorites;
    li.textContent = joke.value;
    li.prepend(starBtn);
    chuckJokes.append(li);
}

function saveToFavorites(e) {
    const zvaigzdMygt = e.target;
    const juokelisDataSete = zvaigzdMygt.dataset.juokelis;
    listOfJokes.push({'value': juokelisDataSete});
    localStorage.setItem('juokeliai', JSON.stringify(listOfJokes));
    zvaigzdMygt.textContent = '★';
}

// 5. Atidarius svetaine is naujo ir paspaudus mygtuka "Megstami",
//    atvaizduoti vius megstamus (paspausti su ★) elementus
//    is LocalStorage
favBtn.onclick = displayFavoritesJokes;

function displayFavoritesJokes() {
    const stingList = localStorage.getItem('juokeliai');
    const jokeList = JSON.parse(stingList);
    jokeList.forEach(joke => generateJokeElement(joke));
}
