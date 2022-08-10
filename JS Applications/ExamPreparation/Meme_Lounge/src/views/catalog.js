import { html } from "../lib.js"

const catalogTemplate = (memes) => html`
  <section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
      ${memes.length == 0
        ? html` <p class="no-memes">No memes in database.</p> `
        : memes.map(memeCard)}
    </div>
  </section>
`

const memeCard = (meme) => html`
  <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">Debugging</p>
        <img class="meme-image" alt="meme-img" src="./images/2.png" />
      </div>
      <div id="data-buttons">
        <a class="button" href="#">Details</a>
      </div>
    </div>
  </div>
`

export function catalogPage(ctx) {
  ctx.render(catalogTemplate([]))
}
