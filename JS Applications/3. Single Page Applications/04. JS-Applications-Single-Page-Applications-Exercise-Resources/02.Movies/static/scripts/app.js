import { showHomeSection } from "./home.js"
import { showDetailsSection } from "./details.js"
import { showAddMovieSection } from "./create.js"

// create placeholder module for every view
// configure the test navigation
// implement modules for each view
// - create async function for request
// - implement DOM logic



// Order of views:
// - catalog (home view)
// - login/register
// - create
// - details
// - likes
// - edit
// - delete

showHomeSection()

window.showHomeSection = showHomeSection
window.showDetailsSection = showDetailsSection
window.showAddMovieSection = showAddMovieSection
