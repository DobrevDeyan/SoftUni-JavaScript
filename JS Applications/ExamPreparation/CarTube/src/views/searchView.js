import { getListingByYear } from "../api/data.js"
import { html } from "../lib.js"

const searchViewTemplate = (onChange, onSearch, listings = []) => html`
  <section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired production year"
        @input=${onChange}
      />
      <button class="button-list" @click=${onSearch}>Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
      ${listings.length == 0
        ? html` <p class="no-cars">No results.</p> `
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

export async function searchViewPage(ctx) {
  let currentSearch = ""

  const onSearchChange = (event) => {
    currentSearch = Number(event.target.value)
  }
  const onSearchClick = () => {
    let year = Number(currentSearch)

    getListingByYear(year).then((listings) => {
      ctx.render(searchViewTemplate(onSearchChange, onSearchClick, listings))
    })
  }

  ctx.render(searchViewTemplate(onSearchChange, onSearchClick))
}
