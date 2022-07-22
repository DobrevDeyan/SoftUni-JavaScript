// initialization
import { showView } from "./dom.js"
// - find relevant section and detach from DOM (saved in memory)
const section = document.getElementById("movie-details")
section.remove()
// display logic
export function showDetailsSection(movieId) {
  showView(section)
}
async function getMovie(id) {
  const response = await fetch("http://localhost:3030/data/movies/" + id)
  const data = await response.json()


}
// window.getMovie = getMovie / for testing only attaching ot window



<div class="container">
<div class="row bg-light text-dark">
  <h1>Movie title: Black Widow</h1>

  <div class="col-md-8">
    <img
      class="img-thumbnail"
      src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
      alt="Movie"
    />
  </div>
  <div class="col-md-4 text-center">
    <h3 class="my-3">Movie Description</h3>
    <p>
      Natasha Romanoff aka Black Widow confronts the darker parts of
      her ledger when a dangerous conspiracy with ties to her past
      arises. Comes on the screens 2020.
    </p>
    <a class="btn btn-danger" href="#">Delete</a>
    <a class="btn btn-warning" href="#">Edit</a>
    <a class="btn btn-primary" href="#">Like</a>
    <span class="enrolled-span">Liked 1</span>
  </div>
</div>
</div>