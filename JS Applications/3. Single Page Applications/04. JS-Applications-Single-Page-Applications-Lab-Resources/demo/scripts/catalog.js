import { showSection, element } from "./dom.js"

const catalogSection = document.getElementById("catalogSection")
const ul = document.querySelector("#catalogSection ul")
catalogSection.remove()

export function showCatalogPage() {
  showSection(catalogSection)

  loadMovies()
}

async function loadMovies() {
  ul.replaceChildren(element("p", {}, "Loading..."))

  const response = await fetch("http://localhost:3030/data/movies")
  const movies = await response.json()

  ul.replaceChildren(...movies.map(createMovie))
}

function createMovie(movie) {
  return element("li", {}, movie.title)
}
