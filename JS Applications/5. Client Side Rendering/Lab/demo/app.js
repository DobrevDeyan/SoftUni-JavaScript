import { renderTemplate } from "./engine.js"

async function start() {
  const data = await (await fetch("./data.json")).json()
  //   const template = await (await fetch("./article.html")).text()
  const templateAsString = await (await fetch("./article.html")).text()

  const template = renderTemplate(templateAsString)
  const main = document.querySelector("main")
  //   main.innerHTML = data.map((item) => renderTemplate(template, item)).join("")
  main.innerHTML = data.map(template).join("")
}
start()
