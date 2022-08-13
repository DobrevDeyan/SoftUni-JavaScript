import { getListingById, editListing } from "../api/data.js"
import { html } from "../lib.js"

const editListingTemplate = (listing, onSubmit) => html`
  <section id="edit-listing">
    <div class="container">
      <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input
          type="text"
          placeholder="Enter Car Brand"
          name="brand"
          value="${listing.brand}"
        />

        <p>Car Model</p>
        <input
          type="text"
          placeholder="Enter Car Model"
          name="model"
          value="${listing.model}"
        />

        <p>Description</p>
        <input
          type="text"
          placeholder="Enter Description"
          name="description"
          value="${listing.description}"
        />

        <p>Car Year</p>
        <input
          type="number"
          placeholder="Enter Car Year"
          name="year"
          value="${listing.year}"
        />

        <p>Car Image</p>
        <input
          type="text"
          placeholder="Enter Car Image"
          name="imageUrl"
          value="${listing.imageUrl}"
        />

        <p>Car Price</p>
        <input
          type="number"
          placeholder="Enter Car Price"
          name="price"
          value="${listing.price}"
        />

        <hr />
        <input type="submit" class="registerbtn" value="Edit Listing" />
      </form>
    </div>
  </section>
`
export async function editListingPage(ctx) {
  const listing = await getListingById(ctx.params.id)
  ctx.render(editListingTemplate(listing, onSubmit))

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const brand = formData.get("brand").trim()
    const model = formData.get("model").trim()
    const description = formData.get("description").trim()
    const year = formData.get("year").trim()
    const imageUrl = formData.get("imageUrl").trim()
    const price = formData.get("price").trim()

    const listing = { brand, model, description, year, imageUrl, price }

    if (Object.values(listing).some((x) => !x)) {
      return alert("All fields are required")
    }
    if (year <= 0 || price <= 0) {
      return alert("Year and Price must be greater than zero")
    }

    await editListing(ctx.params.id, {
      brand,
      model,
      description,
      year,
      imageUrl,
      price,
    })
    ctx.page.redirect(`/details/${ctx.params.id}`)
  }
}
