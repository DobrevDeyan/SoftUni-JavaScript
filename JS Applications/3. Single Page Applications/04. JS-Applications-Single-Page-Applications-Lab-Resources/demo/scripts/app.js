import { showCatalogPage } from "./catalog.js"
import { showHomePage, showAboutPage } from "./home.js"
import { showLoginSection } from "./login.js"
import { showRegisterSection } from "./register.js"

document.querySelector("nav").addEventListener("click", onNavigate)

const sections = {
  homeButton: showHomePage,
  catalogButton: showCatalogPage,
  aboutButton: showAboutPage,
  loginButton: showLoginSection,
  registerButton: showRegisterSection,
}

showHomePage()

function onNavigate(event) {
  if (event.target.tagName === "A") {
    const view = sections[event.target.id]
    if (typeof view == "function") {
      event.preventDefault()
      view()
    }
  }
}
