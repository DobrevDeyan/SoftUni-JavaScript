import { showHomeSection } from "./home.js"
import { showLoginSection } from "./login.js"
import { showRegisterSection } from "./register.js"

// create placeholder module for every view
// configure the test navigation
// implement modules for each view
// - create async function for request
// - implement DOM logic

const views = {
  homeLink: showHomeSection,
  loginLink: showLoginSection,
  registerLink: showRegisterSection,
}

document.querySelector("nav").addEventListener("click", (event) => {
  //   if (event.target.tagName === "A") {}
  const view = views[event.target.id]
  if (typeof view === "function") {
    event.preventDefault()
    view()
  }
})

// Order of views:
// - catalog (home view)
// - login/register
// - create
// - details
// - likes
// - edit
// - delete

// Start application in home view (catalog)
showHomeSection()
