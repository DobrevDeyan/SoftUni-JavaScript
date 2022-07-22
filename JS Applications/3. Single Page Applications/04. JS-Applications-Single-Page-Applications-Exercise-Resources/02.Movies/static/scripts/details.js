// initialization
import { showView } from "./dom.js"
// - find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("movie-details")
section.remove()
// display logic
export function showDetailsSection(movieId) {
  showView(section)
}
