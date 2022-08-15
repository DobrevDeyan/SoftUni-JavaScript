import { html } from "../lib.js"
import { getShoeById, deleteShoe } from "../api/data.js"
import { getUserData } from "../util.js"

const detailsTemplate = (shoe, isOwner, onDelete) => html` <section
  id="details"
>
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src="${shoe.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
      <p>Model: <span id="details-model">${shoe.model}</span></p>
      <p>Release date: <span id="details-release">${shoe.release}</span></p>
      <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
      <p>Value: <span id="details-value">${shoe.value}</span></p>
    </div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${isOwner
        ? html`
            <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="/" id="delete-btn">Delete</a>
          `
        : null}
    </div>
  </div>
</section>`

export async function detailsPage(ctx) {
  const shoe = await getShoeById(ctx.params.id)

  const userData = getUserData()
  console.log(shoe)
  console.log(userData)
  console.log(shoe._ownerId)
  console.log(userData.id)
  const isOwner = userData && shoe._ownerId === userData.id
  console.log(isOwner)

  ctx.render(detailsTemplate(shoe, isOwner, onDelete))

  async function onDelete(event) {
    const choice = confirm("Are you sure you want to delete this shoe ?")
    if (choice) {
      await deleteShoe(ctx.params.id)
      ctx.page.redirect("/dashboard")
    }
  }
}
