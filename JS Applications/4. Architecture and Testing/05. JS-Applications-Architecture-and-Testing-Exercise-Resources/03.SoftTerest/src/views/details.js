import { getByID } from "../api/data.js"

const section = document.getElementById("detailsPage")
section.remove()

export async function showDetailsPage(ctx, id) {
  console.log(id)
  ctx.showSection(section)
  loadIdea(id)
}

async function loadIdea(id) {
  const idea = await getByID(id)
  section.replaceChildren(createIdeaDiv(idea))
}
function createIdeaDiv(idea) {
  const fragment = document.createDocumentFragment()
  fragment.appendChild(element("img", { className: "det-img", src: idea.img }))
  fragment.appendChild(
    element(
      "div",
      { className: "desc" },
      element("h2", { className: "display-5" }, idea.title),
      element("p", { className: "infoType" }, "Description:"),
      element("p", { className: "idea-description" }, idea.description)
    )
  )
  fragment.appendChild(
    element(
      "div",
      { className: "text-center" },
      element("a", { className: "btn detb", href: "" }, "Delete")
    )
  )

  return fragment
}
