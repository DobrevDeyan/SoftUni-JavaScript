import { getAllIdeas } from "../api/data.js"
import { element } from "../dom.js"

const section = document.getElementById("dashboard-holder")
section.remove()
section.addEventListener("click", onDetails)
let ctx = null

export async function showCatalogPage(ctxTarget) {
  ctx = ctxTarget
  ctx.showSection(section)
  loadIdeas()
}

export async function loadIdeas() {
  const ideas = await getAllIdeas()

  if (ideas.length === 0) {
    section.replaceChildren(
      element("h1", {}, "No ideas yet! Be the first one :)")
    )
  } else {
    const fragment = document.createDocumentFragment()
    ideas.map(createIdeaCard).forEach((i) => fragment.appendChild(i))
    section.replaceChildren(fragment)
  }
}

function createIdeaCard(idea) {
  const newElement = element("div", {
    className: "card overflow-hidden current-card details",
  })
  newElement.style.width = "20rem"
  newElement.style.hight = "18rem"

  newElement.innerHTML = `  
  <div class="card-body">
    <p class="card-text">${idea.title}</p>
  </div>
  <img
    class="card-image"
    src="${idea.img}"
    alt="Card image cap"
  />
  <a data-id="${idea._id}" class="btn" href="">Details</a>
  `
  return newElement
}

function onDetails(event) {
  if (event.target.tagName === "A") {
    const id = event.target.data.id
    event.preventDefault()
    ctx.goTo("details", id)
  }
}
