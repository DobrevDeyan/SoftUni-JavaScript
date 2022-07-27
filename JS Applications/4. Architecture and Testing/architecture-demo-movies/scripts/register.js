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

  try {
    const response = await fetch("http://localhost:3030/users/register", {
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
      username: data.username,
      id: data._id,
      token: data.accessToken,
    }

    sessionStorage.setItem("userData", JSON.stringify(userData))
    updateNavigation()
    showHomePage()
  } catch (err) {
    alert(err.message)
  }
}
