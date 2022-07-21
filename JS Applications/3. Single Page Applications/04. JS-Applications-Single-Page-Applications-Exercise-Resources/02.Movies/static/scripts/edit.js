// initialization
import { showView } from "./dom.js"
// - find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("edit-movie")
section.remove()
// display logic
export function showEditMovieSection() {
  showView(section)
}
