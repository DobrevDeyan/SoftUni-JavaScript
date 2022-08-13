import { getMyBooks } from "../api/data.js"
import { getUserData } from "../util.js"
import { html } from "../lib.js"

const booksTemplate = (books) => html`
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    ${books.length == 0
      ? html` <p class="no-books">No books in database!</p> `
      : html` <ul class="my-books-list">
          ${books.map(bookTemplate)}
        </ul>`}
  </section>
`
const bookTemplate = (book) => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}" /></p>
    <a class="button" href="/details/${book._id}">Details</a>
  </li>
`

export async function booksPage(ctx) {
  const userData = getUserData()
  const books = await getMyBooks(userData.id)
  ctx.render(booksTemplate(books))
  //   ctx.render(booksTemplate(books, userData))
}
