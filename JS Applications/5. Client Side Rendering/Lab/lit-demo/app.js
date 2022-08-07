import { html, render } from "https://unpkg.com/lit-html?module"

const articleTemplate = (data) => html`
  <article>
    <h3>${data.title}</h3>
    <div class="content-body">
      <p>${data.content}</p>
    </div>
    <footer>Author: ${data.author}</footer>
    <div class="comments">
      <p>Some comments</p>
    </div>
  </article>
`
start()

async function start() {
  const data = await (await fetch("./data.json")).json()
  const main = document.querySelector("main")
  const content = document.querySelector("#content")
  const renderButton = document.querySelector("#render-button")
  renderButton.addEventListener("click", onRender)

  function onRender() {
    data[0].author += "1"
    const result = data.map(articleTemplate)
    render(result, content)
  }
}
