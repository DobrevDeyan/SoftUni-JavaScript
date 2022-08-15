import { html } from "../lib.js"
import {
  getPostById,
  deletePost,
  donatePost,
  getMyDonationsByPostId,
  getDonationsByPostId,
} from "../api/data.js"
import { getUserData } from "../util.js"

const detailsTemplate = (
  post,
  isOwner,
  onDelete,
  donations,
  showDonationButton,
  onDonation
) => html` <section id="details-page">
  <h1 class="title">Post Details</h1>

  <div id="container">
    <div id="details">
      <div class="image-wrapper">
        <img src="${post.imageUrl}" alt="Material Image" class="post-image" />
      </div>
      <div class="info">
        <h2 class="title post-title">${post.title}</h2>
        <p class="post-description">${post.description}</p>
        <p class="post-address">Address: ${post.address}</p>
        <p class="post-number">Phone number: ${post.phone}</p>
        <p class="donate-Item">Donate Materials: ${donations}</p>

        <!--Edit and Delete are only for creator-->

        <div class="btns">
          <!-- <a href="#" class="edit-btn btn">Edit</a>
          <a href="#" class="delete-btn btn">Delete</a> -->
          ${postControlsTemplate(post, isOwner, onDelete)}
          ${donationsControlTemplate(showDonationButton, onDonation)}

          <!--Bonus - Only for logged-in users ( not authors )-->
        </div>
      </div>
    </div>
  </div>
</section>`
//       ${bookControlsTemplate(book, isOwner, onDelete)}
//       <!-- Bonus -->
//       <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
//       ${likeControlTemplate(showLikeButton, onLike)}
//       <!-- ( for Guests and Users )  -->
//       <div class="likes">
//         <img class="hearts" src="/images/heart.png" />
//         <span id="total-likes">Likes: ${likes}</span>
//       </div>
//       <!-- Bonus -->

const donationsControlTemplate = (showDonationButton, onDonation) => {
  if (showDonationButton) {
    return html`<a
      @click=${onDonation}
      class="donate-btn btn"
      href="javascript:void(0)"
      >Donate</a
    >`
  } else {
    return null
  }
}
const postControlsTemplate = (post, isOwner, onDelete) => {
  if (isOwner) {
    return html`
      <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
      <a @click=${onDelete} href="/" class="delete-btn btn">Delete</a>
    `
  } else {
    return null
  }
}

export async function detailsPage(ctx) {
  const userData = getUserData()

  const [post, donations, hasDonate] = await Promise.all([
    getPostById(ctx.params.id),
    getDonationsByPostId(ctx.params.id),
    userData ? getMyDonationsByPostId(ctx.params.id, userData.id) : 0,
  ])

  const isOwner = userData && userData.id == post._ownerId

  const showDonationButton =
    userData != null && isOwner == false && hasDonate == false

  ctx.render(
    detailsTemplate(
      post,
      isOwner,
      onDelete,
      donations,
      showDonationButton,
      onDonation
    )
  )
  async function onDelete(event) {
    const choice = confirm(
      "Are you sure you want to delete this post forever ? "
    )
    if (choice) {
      await deletePost(ctx.params.id)
      ctx.page.redirect("/")
    }
  }
  async function onDonation(event) {
    await donatePost(ctx.params.id)
    ctx.page.redirect("/details/" + ctx.params.id)
  }
}
