window.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout")
  logoutButton.addEventListener("click", onLogout)
})
async function onLogout() {
  try {
    const response = await fetch("http://localhost:3030/users/logout", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.token,
      },
    })

    if (response.ok !== true) {
      const error = await response.json()
      return alert(error.message)
    }

    const data = await response.json()

    sessionStorage.clear()
    window.location = "index.html"
    document.getElementById("guest").style.display = "inline-block"
    document.getElementById("user").style.display = "none"
  } catch (err) {
    alert(err.message)
  }
}
