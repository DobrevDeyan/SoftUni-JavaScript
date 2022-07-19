import { showSection, element } from "./dom.js"

const loginSection = document.getElementById("loginSection")
loginSection.remove()

export function showLoginSection() {
  showSection(loginSection)
}
