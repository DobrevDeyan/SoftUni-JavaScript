import { renderTemplate } from "./engine.js"

async function start() {
  const data = await (await fetch("./data.json")).json()
  const template = await (await fetch("./article.html")).text()

  const result = renderTemplate(template, data[0])
  console.log(result)
}
start()
