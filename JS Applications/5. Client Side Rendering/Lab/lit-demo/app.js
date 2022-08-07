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

  document.getElementById("change-button").addEventListener("click", onChange)

  function onRender() {
    data[1].author += "1"
    const result = data.map(articleTemplate)
    render(result, content)
  }
  function onChange() {
    data.shift()
    data.unshift({
      title: "First Article 21321",
      content: "dsadasda",
      author: "John Smith",
    })
    onRender()
  }
}
