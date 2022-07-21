// initialization
import { showView } from "./dom.js"
// - find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("form-login")
section.remove()
// display logic
export function showLoginSection() {
  showView(section)
}
