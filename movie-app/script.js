const API_URL = ""
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const form = document.getElementById('form')
const search = document.getElementById('search')
//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json
    console.log(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.nodeValue

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm)

        search.value = ""
    } else {
        windows.location.reload()
    }
})