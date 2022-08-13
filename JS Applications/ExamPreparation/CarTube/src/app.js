import { page, render } from "./lib.js"
import { getUserData } from "./util.js"
import { homePage } from "./views/home.js"
import { loginPage } from "./views/login.js"
import { registerPage } from "./views/register.js"
import { logout } from "./api/api.js"
import { createListingPage } from "./views/createListing.js"
import { allListingsPage } from "./views/allListings.js"
import { listingDetailsPage } from "./views/listingDetails.js"
import { editListingPage } from "./views/editListing.js"
import { personalListingsPage } from "./views/personalListings.js"
import { searchViewPage } from "./views/searchView.js"

const root = document.getElementById("site-content")
document.getElementById("logoutButton").addEventListener("click", onLogout)

page(decorateContext)
page("/", homePage)
page("/login", loginPage)
page("/register", registerPage)
page("/allListings", allListingsPage)
page("/createListing", createListingPage)
page("/details/:id", listingDetailsPage)
page("/edit/:id", editListingPage)
page("/myListings", personalListingsPage)
page("/yearlyListings", searchViewPage)

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
    document.getElementById("profile").style.display = "inline-block"
    document.getElementById("guest").style.display = "none"
    document.querySelector(
      "#profile a:first-child"
    ).textContent = `Welcome, ${userData.username}`
  } else {
    document.getElementById("profile").style.display = "none"
    document.getElementById("guest").style.display = "inline-block"
  }
}
