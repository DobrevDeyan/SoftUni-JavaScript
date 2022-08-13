import { html } from "../lib.js"
import { getAllListings } from "../api/data.js"

const listingsTemplate = (listings) => html`
  <section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
      <!-- Display all records -->
      ${listings.length == 0
        ? html` <p class="no-cars">No cars in database.</p> `
        : html` ${listings.map(listingTemplate)}`}
      <!-- Display if there are no records -->
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
export async function allListingsPage(ctx) {
  const listings = await getAllListings()
  ctx.render(listingsTemplate(listings))
}
