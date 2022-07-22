// initialization
import { showAddMovieSection } from "./create.js"
import { showView, element } from "./dom.js"
import { showDetailsSection } from "./details.js"

// caching already loaded from server response
let moviesCache = null
let lastLoaded = null
const maxAge = 1000 // testing time

// find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("home-page")
const catalog = section.querySelector(
  ".card-deck.d-flex.justify-content-center"
)

section.querySelector("#createLink").addEventListener("click", (event) => {
  event.preventDefault()
  showAddMovieSection()
})
catalog.addEventListener("click", (event) => {
  event.preventDefault()

  let target = event.target

  if (target.tagName === "BUTTON") {
    target = target.parentElement
  }
  if (target.tagName === "A") {
    const id = target.dataset.id
    showDetailsSection(id)
    console.log(id)
  }
})
section.remove()

// display logic
export function showHomeSection() {
  showView(section)
  getMovies()
}

async function getMovies() {
  catalog.replaceChildren(element("p", {}, "Loading..."))

  const now = Date.now()
  if (moviesCache === null || now - lastLoaded > maxAge) {
    lastLoaded = now

    const response = await fetch("http://localhost:3030/data/movies")
    const data = await response.json()
    moviesCache = data
  }
  catalog.replaceChildren(...moviesCache.map(createMovieCard))

  // const response = await fetch("http://localhost:3030/data/movies")
  // const data = await response.json()

  // catalog.replaceChildren(...data.map(createMovieCard))
}

function createMovieCard(movie) {
  const elements = element("div", { className: "card mb-4" })
  elements.innerHTML = `
<img
class="card-img-top"
src="${movie.img}"
alt="Card image cap"
width="400"
/>
<div class="card-body">
<h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
<a data-id=${movie._id} href="#">
  <button type="button" class="btn btn-info">
    Details
  </button>
</a>
</div>
  `
  return elements
}
