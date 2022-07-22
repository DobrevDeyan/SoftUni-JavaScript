import { showView } from "./dom.js"
import { showHomeSection } from "./home.js"
import { updateUserName } from "./app.js"
// - find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("form-login")
const form = section.querySelector("form")
form.addEventListener("submit", onLogin)
section.remove()
// display logic
export function showLoginSection() {
  showView(section)
}
async function onLogin(event) {
  event.preventDefault()

  const formData = new FormData(form) // variable form === event.target

  const email = formData.get("email").trim()
  const password = formData.get("password").trim()

  try {
    const response = await fetch("http://localhost:3030/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    if (response.ok !== true) {
      const error = await response.json()
      throw new Error(error.message)
    }
    const data = await response.json()
    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken,
    }

    sessionStorage.setItem("userData", JSON.stringify(userData))
    form.reset()
    updateUserName()
    showHomeSection()
  } catch (err) {
    alert(err.message)
  }
}
