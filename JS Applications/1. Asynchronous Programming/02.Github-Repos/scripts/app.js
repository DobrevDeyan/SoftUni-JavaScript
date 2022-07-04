function loadRepos() {
  const userName = document.getElementById("username").value;
  const list = document.getElementById("repos");
  const url = `https://api.github.com/users/${userName}/repos`;

  fetch(url)
    .then((res) => {
      if (res.ok == false) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      return res.json();
    })
    .then(handleResponse)
    .catch((error) => console.log(error));

  function handleResponse(data) {
    // list.innerHTML = "";
    list.querySelectorAll("*").forEach((n) => n.remove());

    for (let repo of data) {
      const liElement = document.createElement("li");
      liElement.innerHTML = `<a href="${repo.html_url}"> ${repo.full_name} </a>`;
      list.appendChild(liElement);
    }
  }
}
