import { getByID, deleteById } from "../api/data.js"

const section = document.getElementById("detailsPage")
section.remove()
let ctx = null

export async function showDetailsPage(ctxTarget, id) {
  ctx = ctxTarget
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

  const userData = JSON.parse(sessionStorage.getItem("userData"))
  if (userData && userData.id == idea.id) {
    fragment.appendChild(
      element(
        "div",
        { className: "text-center" },
        element(
          "a",
          { className: "btn detb", href: "", onClick: onDelete },
          "Delete"
        )
      )
    )
  }
  return fragment

  function onDelete(event) {
    event.preventDefault()
    const confirmed = confirm("Are you sure you want to delete this")
    if(confirmed) {
      await deleteById(idea._id)
      ctx.goTo("catalog")
    }
  }
}
