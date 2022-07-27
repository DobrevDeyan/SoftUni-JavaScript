import * as api from "../api/data.js"

const loginSection = document.getElementById("loginSection")
loginSection.remove()
const form = loginSection.querySelector("form")
form.addEventListener("submit", onSubmit)
let context = null

export function showLoginSection(contextTarget) {
  context = contextTarget
  context.showSection(loginSection)
}
async function onSubmit(event) {
  event.preventDefault()
  const formData = new FormData(form)

  const email = formData.get("email").trim()
  const password = formData.get("password").trim()

  await api.login(email, password)
  context.updateNavigation()
  context.goTo("home")
}
