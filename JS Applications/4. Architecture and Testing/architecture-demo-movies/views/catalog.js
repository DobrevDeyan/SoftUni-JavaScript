import { element } from "../scripts/dom.js"
import { getAllMovies } from "../api/data.js"

const catalogSection = document.getElementById("catalogSection")
const ul = document.querySelector("#catalogSection ul")
catalogSection.remove()

export function showCatalogPage(context) {
  context.showSection(catalogSection)
  loadMovies()
}
async function loadMovies() {
  ul.replaceChildren(element("p", {}, "Loading..."))
  const movies = await getAllMovies()
  ul.replaceChildren(...movies.map(createMovie))
}
function createMovie(movie) {
  return element("li", {}, movie.title)
}
