import { createPost } from "../api/data.js"
import { html } from "../lib.js"

const createPostTemplate = (onSubmit) => html`
  <section id="create-page" class="auth">
    <form @submit=${onSubmit} id="create">
      <h1 class="title">Create Post</h1>

      <article class="input-group">
        <label for="title">Post Title</label>
        <input type="text" name="title" id="title" />
      </article>

      <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" />
      </article>

      <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" />
      </article>

      <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" />
      </article>

      <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" />
      </article>

      <input type="submit" class="btn submit" value="Create Post" />
    </form>
  </section>
`
export function createPage(ctx) {
  ctx.render(createPostTemplate(onSubmit))

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const title = formData.get("title").trim()
    const description = formData.get("description").trim()
    const imageUrl = formData.get("imageUrl").trim()
    const address = formData.get("address").trim()
    const phone = formData.get("phone").trim()

    const post = { title, description, imageUrl, address, phone }

    if (Object.values(post).some((x) => !x)) {
      return alert("All fields are required")
    }

    await createPost({
      title,
      description,
      imageUrl,
      address,
      phone,
    })
    ctx.page.redirect("/")
  }
}
