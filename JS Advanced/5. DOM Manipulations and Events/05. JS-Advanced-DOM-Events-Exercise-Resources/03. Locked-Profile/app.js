function lockedProfile() {
  const showMoreButtons = Array.from(
    document.querySelectorAll(".profile button")
  );
  showMoreButtons.forEach((b) => {
    b.addEventListener("click", onToggle);
  });

  function onToggle(event) {
    const profile = event.target.parentElement;
    const hiddenInformation = event.target.previousElementSibling;
    const isActive = profile.querySelector(
      'input[type="radio"][value="unlock"]'
    ).checked;

    if (isActive) {
      if (event.target.textContent === "Show more") {
        hiddenInformation.style.display = "block";
        event.target.textContent = "Hide it";
      } else {
        hiddenInformation.style.display = "";
        event.target.textContent = "Show more";
      }
    }
  }
}
