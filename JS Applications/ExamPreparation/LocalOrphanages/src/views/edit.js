import { getPostById, editPost } from "../api/data.js"
import { html } from "../lib.js"
import { getUserData } from "../util.js"

const editPostTemplate = (post, onSubmit) => html`
  <section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
      <h1 class="title">Edit Post</h1>

      <article class="input-group">
        <label for="title">Post Title</label>
        <input type="text" name="title" id="title" value="${post.title}" />
      </article>

      <article class="input-group">
        <label for="description">Description of the needs </label>
        <input
          type="text"
          name="description"
          id="description"
          value="${post.description}"
        />
      </article>

      <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value="${post.imageUrl}"
        />
      </article>

      <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input
          type="text"
          name="address"
          id="address"
          value="${post.address}"
        />
      </article>

      <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" value="${post.phone}" />
      </article>

      <input type="submit" class="btn submit" value="Edit Post" />
    </form>
  </section>
`
export async function editPage(ctx) {
  const post = await getPostById(ctx.params.id)
  const userData = getUserData()
  const isOwner = userData && post._ownerId == userData.id

  ctx.render(editPostTemplate(post, onSubmit, isOwner))

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

    await editPost(ctx.params.id, {
      title,
      description,
      imageUrl,
      address,
      phone,
    })
    ctx.page.redirect(`/details/${ctx.params.id}`)
  }
}
