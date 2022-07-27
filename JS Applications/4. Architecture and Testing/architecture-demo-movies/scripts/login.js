import * as api from "../api/data.js"
import { showSection } from "./dom.js"
import { showHomePage } from "./home.js"
import { updateNavigation } from "./app.js"

const loginSection = document.getElementById("loginSection")
loginSection.remove()

const form = loginSection.querySelector("form")
form.addEventListener("submit", onSubmit)

export function showLoginSection() {
  showSection(loginSection)
}

async function onSubmit(event) {
  event.preventDefault()
  const formData = new FormData(form)

  const email = formData.get("email").trim()
  const password = formData.get("password").trim()

  await api.login(email, password)

  updateNavigation()
  showHomePage()
}
