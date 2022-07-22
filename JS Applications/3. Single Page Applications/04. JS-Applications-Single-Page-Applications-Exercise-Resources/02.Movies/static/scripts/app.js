import { showHomeSection } from "./home.js"
import { showLoginSection } from "./login.js"
import { showRegisterSection } from "./register.js"

// create placeholder module for every view
// configure the test navigation
// implement modules for each view
// - create async function for request
// - implement DOM logic
const nav = document.querySelector("nav")
const views = {
  homeLink: showHomeSection,
  loginLink: showLoginSection,
  registerLink: showRegisterSection,
}

document.getElementById("logoutButton").addEventListener("click", onLogout)
nav.addEventListener("click", (event) => {
  //   if (event.target.tagName === "A") {}
  const view = views[event.target.id]
  if (typeof view === "function") {
    event.preventDefault()
    view()
  }
})

// Start application in home view (catalog)
updateUserName()
showHomeSection()

export function updateUserName() {
  const userData = JSON.parse(sessionStorage.getItem("userData"))
  if (userData !== null) {
    document.getElementById(
      "welcomeMessage"
    ).textContent = `Welcome, ${userData.email}`
    const user = [...nav.querySelectorAll(".user")]
    user.forEach((link) => (link.style.display = "block"))
    const guest = [...nav.querySelectorAll(".guest")]
    guest.forEach((link) => (link.style.display = "none"))
  } else {
    const user = [...nav.querySelectorAll(".user")]
    user.forEach((link) => (link.style.display = "none"))
    const guest = [...nav.querySelectorAll(".guest")]
    guest.forEach((link) => (link.style.display = "block"))
  }
}

async function onLogout(event) {
  event.preventDefault()
  event.stopImmediatePropagation()

  const { token } = JSON.parse(sessionStorage.getItem("userData"))
  await fetch("http://localhost:3030/users/logout", {
    // without stated method the request defaults to GET method
    headers: {
      "X-Authorization": token,
    },
  })
  sessionStorage.removeItem("userData")
  updateUserName()
  showLoginSection()
}
