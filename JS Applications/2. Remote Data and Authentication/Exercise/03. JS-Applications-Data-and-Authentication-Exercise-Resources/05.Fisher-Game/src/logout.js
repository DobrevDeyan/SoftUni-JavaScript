window.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout")
  logoutButton.addEventListener("click", onLogout)
})
async function onLogout() {
  const token = sessionStorage.getItem("userData")
  // const token = sessionStorage.getItem(JSON.parse(sessionStorage.key))
  console.log(userData)
  console.log(JSON.parse(sessionStorage.userData))
  console.log(JSON.parse(token))

  // const url = "http://localhost:3030/users/logout"
  // const response = await fetch(url, {
  //   method: "get",
  //   headers: { "X-Authorization": token },
  // })
  // const response = await fetch("http://localhost:3030/users/logout", {
  //   method: "get",
  //   headers: { "X-Authorization": token },
  // })

  // if (!response.ok) {
  //   const error = await response.json()
  //   return alert(error.message)
  // }

  // const data = await response.json()
  // console.log(data)

  // sessionStorage.removeItem("accessToken")
  // sessionStorage.removeItem("userId")
  // sessionStorage.clear()
  // window.location = "index.html"
  // document.getElementById("guest").style.display = "block"
}
