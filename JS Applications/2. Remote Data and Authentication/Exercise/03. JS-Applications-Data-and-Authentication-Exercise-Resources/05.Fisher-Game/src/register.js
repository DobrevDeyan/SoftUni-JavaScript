window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form#register")
  form.addEventListener("submit", onRegister)
})

async function onRegister(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const email = formData.get("email").trim()
  const password = formData.get("password").trim()
  const repass = formData.get("rePass").trim()

  if (email == "" || password == "" || repass == "") {
    alert("All fields are required!")
  } else if (password != repass) {
    alert("Passwords don't match!")
  } else {
    try {
      const url = `http://localhost:3030/users/register`
      const response = await fetch(url, {
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
      const userName = document.getElementsByTagName("span")[0]
      userName.textContent = userData.email
      window.location = "index.html"
    } catch (err) {
      alert(err.message)
      window.location = "register.html"
    }
  }
}
