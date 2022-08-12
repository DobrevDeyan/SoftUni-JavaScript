import * as api from "./api/data.js"
window.api = api

import { page, render } from "./lib.js"
// import { getUserData } from "./util.js"
// import { homePage } from "./views/home.js"
// import { dashboardPage } from "./views/dashboard.js"
// import { loginPage } from "./views/login.js"
// import { registerPage } from "./views/register.js"
// import { createPage } from "./views/create.js"
// import { editPage } from "./views/edit.js"
// import { detailsPage } from "./views/details.js"
// import { profilePage } from "./views/profile.js"
// import { logout } from "./api/api.js"

// const root = document.getElementById("site-content")
// document.getElementById("logoutButton").addEventListener("click", onLogout)

// page(decorateContext)
// page("/", homePage)
// page("/dashboard", dashboardPage)
// page("/details/:id", detailsPage)
// page("/login", loginPage)
// page("/register", registerPage)
// page("/profile", profilePage)
// page("/create", createPage)
// page("/edit/:id", editPage)

// Initiate app
// updateUserNav()
// page.start()

// function decorateContext(ctx, next) {
//   ctx.render = (content) => render(content, root)
//   ctx.updateUserNav = updateUserNav
//   next()
// }

// function onLogout() {
//   logout()
//   updateUserNav()
//   page.redirect("/")
// }
// function updateUserNav() {
//   const userData = getUserData()

//   if (userData) {
//     document.getElementById("user").style.display = "block"
//     document.getElementById("guest").style.display = "none"
//     document.querySelector(
//       "#user span"
//     ).textContent = `Welcome, ${userData.email}`
//   } else {
//     document.getElementById("user").style.display = "none"
//     document.getElementById("guest").style.display = "block"
//   }
// }
