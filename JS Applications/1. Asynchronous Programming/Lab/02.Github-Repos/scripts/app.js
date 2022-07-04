function loadRepos() {
  const userName = document.getElementById("username").value;
  const list = document.getElementById("repos");
  const url = `https://api.github.com/users/${userName}/repos`;

  fetch(url)
    .then((res) => {
      console.log(res);
      if (res.ok == false) {
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .then(handleResponse)
    .catch(handleError);

  function handleResponse(data) {
    // list.innerHTML = "";
    list.querySelectorAll("*").forEach((n) => n.remove());

    for (let repo of data) {
      const liElement = document.createElement("li");
      liElement.innerHTML = `<a href="${repo.html_url}"> ${repo.full_name} </a>`;
      list.appendChild(liElement);
    }
  }
  function handleError(error) {
    list.querySelectorAll("*").forEach((n) => n.remove());
    list.textContent = `${error.message}`;
  }
}
