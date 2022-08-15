import { page, render } from "./lib.js"
import { getUserData } from "./util.js"
import { dashboardPage } from "./views/dashboard.js"
import { loginPage } from "./views/login.js"
import { registerPage } from "./views/register.js"
import { logout } from "./api/api.js"
import { createPage } from "./views/create-post.js"
import { detailsPage } from "./views/details.js"
import { editPage } from "./views/edit.js"
import { myPostsPage } from "./views/my-posts.js"

const root = document.getElementById("main-content")
document.getElementById("logoutButton").addEventListener("click", onLogout)

page(decorateContext)
page("/", dashboardPage)
page("/login", loginPage)
page("/register", registerPage)
page("/details/:id", detailsPage)
page("/create", createPage)
page("/edit/:id", editPage)
page("/my-posts", myPostsPage)

// Initiate app
updateUserNav()
page.start()

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root)
  ctx.updateUserNav = updateUserNav
  next()
}

function onLogout() {
  logout()
  updateUserNav()
  page.redirect("/")
}
function updateUserNav() {
  const userData = getUserData()

  if (userData) {
    document.getElementById("user").style.display = "inline-block"
    document.getElementById("guest").style.display = "none"
  } else {
    document.getElementById("user").style.display = "none"
    document.getElementById("guest").style.display = "inline-block"
  }
}
