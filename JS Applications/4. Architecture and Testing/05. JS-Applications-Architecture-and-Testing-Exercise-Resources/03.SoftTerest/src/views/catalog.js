import { getAllIdeas } from "../api/data.js"
import { element } from "../dom.js"

const section = document.getElementById("dashboard-holder")
section.remove()

export async function showCatalogPage(ctx) {
  ctx.showSection(section)
  loadIdes()
}
export async function loadIdes() {
  const ideas = await getAllIdeas()
  const fragment = document.createDocumentFragment()
  ideas.map(createIdeaCard).forEach((i) => fragment.appendChild(i))
  section.replaceChildren(fragment)
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
