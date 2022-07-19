import { showSection, element } from "./dom.js"

export function showCatalogPage() {
  showSection("catalogSection")

  loadMovies()
}

async function loadMovies() {
  const response = await fetch("http://localhost:3030/data/movies")
  const movies = await response.json()

  document
    .querySelector("#catalogSection ul")
    .replaceChildren(...movies.map(createMovie))
}

function createMovie(movie) {
  return element("li", {}, movie.title)
}
