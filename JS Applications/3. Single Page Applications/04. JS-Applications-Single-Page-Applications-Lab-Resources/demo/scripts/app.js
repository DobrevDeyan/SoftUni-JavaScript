import { showCatalogPage } from "./catalog.js"
import { showHomePage, showAboutPage } from "./home.js"

document.querySelector("nav").addEventListener("click", onNavigate)

const sections = {
  homeButton: showHomePage,
  catalogButton: showCatalogPage,
  aboutButton: showAboutPage,
}

showHomePage()

function onNavigate(event) {
  // if (event.target.tagName === "BUTTON") {
  //   switch (event.target.id) {
  //     case "homeButton":
  //       showHomePage()
  //       break
  //     case "catalogButton":
  //       showCatalogPage()
  //       break
  //     case "aboutButton":
  //       showAboutPage()
  //       break
  //   }
  // }

  if (event.target.tagName === "A") {
    const view = sections[event.target.id]
    if (typeof view == "function") {
      event.preventDefault()

      view()
    }
  }
}
