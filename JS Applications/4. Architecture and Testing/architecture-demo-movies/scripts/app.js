import * as api from "../api/data.js"
import { showCatalogPage } from "./catalog.js"
import { showHomePage, showAboutPage } from "./home.js"
import { showLoginSection } from "./login.js"
import { showRegisterSection } from "./register.js"

document.getElementById("logoutButton").addEventListener("click", onLogout)
document.querySelector("nav").addEventListener("click", onNavigate)

const sections = {
  homeButton: showHomePage,
  catalogButton: showCatalogPage,
  aboutButton: showAboutPage,
  loginButton: showLoginSection,
  registerButton: showRegisterSection,
}
updateNavigation()
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

export function updateNavigation() {
  const userData = JSON.parse(sessionStorage.getItem("userData"))
  if (userData !== null) {
    document.getElementById("userNav").style.display = "inline-block"
    document.getElementById("guestNav").style.display = "none"
  } else {
    document.getElementById("userNav").style.display = "none"
    document.getElementById("guestNav").style.display = "inline-block"
  }
}

async function onLogout(event) {
  event.stopImmediatePropagation()
  await api.logout()
  updateNavigation()
  showHomePage()
}
