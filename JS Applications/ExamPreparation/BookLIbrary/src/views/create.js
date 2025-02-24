import { createBook } from "../api/data.js"
import { html } from "../lib.js"

const createTemplate = (onSubmit) => html` <section
  id="create-page"
  class="create"
>
  <form @submit=${onSubmit} id="create-form">
    <fieldset>
      <legend>Add new Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" placeholder="Title" />
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input type="text" name="imageUrl" id="image" placeholder="Image" />
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type">
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Add Book" />
    </fieldset>
  </form>
</section>`
export function createPage(ctx) {
  ctx.render(createTemplate(onSubmit))

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const title = formData.get("title").trim()
    const description = formData.get("description").trim()
    const imageUrl = formData.get("imageUrl").trim()
    const type = formData.get("type").trim()

    // const book = { title, description, imageUrl, type }
    // if (Object.values(book).some((x) => !x)) {
    //   return alert("All fields are required")
    // }
    if (title === "" || description === "" || imageUrl === "" || type === "") {
      return alert("All fields are required")
    }

    await createBook({ title, description, imageUrl, type })
    ctx.page.redirect("/")
  }
}
