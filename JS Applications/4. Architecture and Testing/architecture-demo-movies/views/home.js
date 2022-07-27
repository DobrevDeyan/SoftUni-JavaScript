const homeSection = document.getElementById("homeSection")
homeSection.remove()

const aboutSection = document.getElementById("aboutSection")
aboutSection.remove()

export function showHomePage(context) {
  context.showSection(homeSection)
}

export function showAboutPage(context) {
  context.showSection(aboutSection)
}
