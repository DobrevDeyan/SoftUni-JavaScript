// initialization
import { showAddMovieSection } from "./create.js"
import { showView } from "./dom.js"
// find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("home-page")
section.querySelector("#createLink").addEventListener("click", (event) => {
  event.preventDefault()
  showAddMovieSection()
})
section.remove()
// display logic
export function showHomeSection() {
  showView(section)
}
