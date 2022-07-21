// initialization
import { showView } from "./dom.js"
// - find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("form-sign-up")
section.remove()
// display logic
export function showRegisterSection() {
  showView(section)
}
