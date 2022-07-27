import * as api from "../api/data.js"
import { showSection } from "./dom.js"
import { showHomePage } from "./home.js"
import { updateNavigation } from "./app.js"

updateNavigation()

const registerSection = document.getElementById("registerSection")
registerSection.remove()

const form = registerSection.querySelector("form")
form.addEventListener("submit", onSubmit)

export function showRegisterSection() {
  showSection(registerSection)
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

  await api.register(email, password)
  updateNavigation()
  showHomePage()
}
