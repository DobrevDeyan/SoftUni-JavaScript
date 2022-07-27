import * as api from "../api/data.js"
import { showCatalogPage } from "../views/catalog.js"
import { showHomePage, showAboutPage } from "../views/./home.js"
import { showLoginSection } from "../views/./login.js"
import { showRegisterSection } from "../views/register.js"
import { showSection } from "./dom.js"

document.getElementById("logoutButton").addEventListener("click", onLogout)
document.querySelector("nav").addEventListener("click", onNavigate)

const views = {
  home: showHomePage,
  catalog: showCatalogPage,
  about: showAboutPage,
  login: showLoginSection,
  register: showRegisterSection,
}
const links = {
  homeButton: "home",
  catalogButton: "catalog",
  aboutButton: "about",
  loginButton: "login",
  registerButton: "register",
}
updateNavigation()

const context = {
  updateNavigation,
  goTo,
  showSection,
}

//Start application
goTo("home")

function onNavigate(event) {
  if (event.target.tagName === "A") {
    const name = links[event.target.id]
    if (name) {
      event.preventDefault()
      goTo(name)
    }
  }
}
function goTo(name, ...params) {
  const view = views[name]
  if (typeof view === "function") {
    view(context, ...params)
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
  goTo("home")
}
