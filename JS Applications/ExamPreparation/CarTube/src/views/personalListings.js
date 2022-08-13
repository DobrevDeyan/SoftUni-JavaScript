import { getMyListings } from "../api/data.js"
import { getUserData } from "../util.js"
import { html } from "../lib.js"

const myListingsTemplate = (listings) => html`
  <section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
      ${listings.length == 0
        ? html` <p class="no-cars">You haven't listed any cars yet.</p> `
        : html` ${listings.map(listingTemplate)}`}
    </div>
  </section>
`
const listingTemplate = (listing) => html`
  <div class="listing">
    <div class="preview">
      <img src="${listing.imageUrl}" />
    </div>
    <h2>${listing.brand}</h2>
    <div class="info">
      <div class="data-info">
        <h3>Year: ${listing.year}</h3>
        <h3>Price: ${listing.price} $</h3>
      </div>
      <div class="data-buttons">
        <a href="/details/${listing._id}" class="button-carDetails">Details</a>
      </div>
    </div>
  </div>
`

export async function personalListingsPage(ctx) {
  const userData = getUserData()
  const listings = await getMyListings(userData.id)
  ctx.render(myListingsTemplate(listings))
  //   ctx.render(booksTemplate(books, userData))
}
