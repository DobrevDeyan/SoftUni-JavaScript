import { page, render } from "./lib.js"
import { homePage } from "./views/home.js"
import { catalogPage } from "./views/catalog.js"

// below for debugging in console
import * as api from "./api/data.js"
window.api = api
// above for debugging in console

const root = document.querySelector("main")

page(decorateContext)
page("/", homePage)
// page("/memes", catalogPage)

// Initiate app
page.start()

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root)

  next()
}
