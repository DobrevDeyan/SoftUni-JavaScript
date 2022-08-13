import { html } from "../lib.js"
import { getListingById, deleteListing } from "../api/data.js"
import { getUserData } from "../util.js"

const detailsTemplate = (listing, isOwner, onDelete) => html` <section
  id="listing-details"
>
  <h1>Details</h1>
  <div class="details-info">
    <img src="${listing.imageUrl}" />
    <hr />
    <ul class="listing-props">
      <li><span>Brand:</span>${listing.brand}</li>
      <li><span>Model:</span>${listing.model}</li>
      <li><span>Year:</span>${listing.year}</li>
      <li><span>Price:</span>${listing.price}$</li>
    </ul>

    <p class="description-para">${listing.description}</p>

    <div class="listings-buttons">
      ${isOwner
        ? html`
            <a href="/edit/${listing._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="/" class="button-list">Delete</a>
          `
        : null}
    </div>
  </div>
</section>`

export async function listingDetailsPage(ctx) {
  const listing = await getListingById(ctx.params.id)

  const userData = getUserData()
  const isOwner = userData && listing._ownerId == userData.id

  ctx.render(detailsTemplate(listing, isOwner, onDelete))

  async function onDelete(event) {
    const choice = confirm("Are you sure you want to delete this car ?")
    if (choice) {
      await deleteListing(ctx.params.id)
      ctx.page.redirect("/allListings")
    }
  }
}
