document.querySelector("nav").addEventListener("click", onNavigate)
const main = document.querySelector("main")

showSection("homeSection")

function onNavigate(event) {
  if (event.target.tagName === "BUTTON") {
    switch (event.target.id) {
      case "homeButton":
        showSection("homeSection")
        break
      case "catalogButton":
        showSection("catalogSection")

        break
      case "aboutButton":
        showSection("aboutSection")
        break
    }
  }
}

function showSection(section) {
  document
    .querySelectorAll("section")
    .forEach((s) => (s.style.display = "none"))
  document.getElementById(section).style.display = ""
}
