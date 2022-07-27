import { register } from "../api/data.js"

const registerSection = document.getElementById("registerSection")
registerSection.remove()
const form = registerSection.querySelector("form")
form.addEventListener("submit", onSubmit)
let context = null

export function showRegisterSection(contextTarget) {
  context = contextTarget
  context.showSection(registerSection)
}

async function onSubmit(event) {
  event.preventDefault()
  const formData = new FormData(form)

  const email = formData.get("email").trim()
  const password = formData.get("password").trim()
  const repass = formData.get("repass").trim()

  if (password != repass) {
    alert("Passwords don't match.")
    return
  }

  await register(email, password)
  context.updateNavigation()
  context.goTo("home")
}
