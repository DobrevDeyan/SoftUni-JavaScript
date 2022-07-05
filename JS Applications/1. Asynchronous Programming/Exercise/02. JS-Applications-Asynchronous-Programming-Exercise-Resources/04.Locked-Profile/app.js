function profileGenerator({ username, email, age }, id) {
  const wrapper = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = "Show more";

  wrapper.className = "profile";
  wrapper.innerHTML = `<img src="./iconProfile2.png" class="userIcon">
  <label>Lock</label>
  <input type="radio" name="user${id}Locked" value="lock" checked >
  <label>Unlock</label>
  <input type="radio" name="user${id}Locked" value="unlock"><br>
  <hr>
  <label>Username</label>
  <input type="text" name="user${id}Username" value=${username} disabled="" readonly="">
  <div id="user${id}HiddenFields">
  <hr>
  <label>Email:</label>
  <input type="email" name="user${id}Email" value=${email} disabled="" readonly="">
  <label>Age:</label>
  <input type="email" name="user${id}Age" value=${age} disabled="" readonly="">
  </div>`;

  button.addEventListener("click", () => {
    const checked = wrapper.querySelector("input[type=radio]:checked");
    if (checked && checked.value === "unlock") {
      if (button.innerText === "Show more") {
        wrapper.querySelector(`#user${id}HiddenFields`).style.display = "block";
        button.innerText = "Hide it";
      } else {
        wrapper.querySelector(`#user${id}HiddenFields`).style.display = "none";
        button.innerText = "Show more";
      }
    }
  });

  wrapper.appendChild(button);
  return wrapper;
}

async function lockedProfile() {
  try {
    const response = await fetch(
      `http://localhost:3030/jsonstore/advanced/profiles`
    );
    if (response.status !== 200) {
      throw new Error(
        `${response.statusText} / Status ${response.status} : Server data not found.`
      );
    }
    const data = await response.json();

    const mainContent = document.querySelector("main");
    mainContent.innerHTML = "";

    Object.values(data).forEach((person, index) => {
      mainContent.appendChild(profileGenerator(person, index + 1));
    });
  } catch (error) {
    console.log(error.message, error.status);
  }
}
