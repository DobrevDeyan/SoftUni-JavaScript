// initialization
import { showView } from "./dom.js"
// - find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("home-page")
section.remove()
// display logic
export function showHomeSection() {
  showView(section)
}
