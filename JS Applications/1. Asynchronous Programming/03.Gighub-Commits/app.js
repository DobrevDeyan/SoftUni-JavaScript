async function loadCommits() {
  const username = document.getElementById("username");
  const repo = document.getElementById("repo");
  const commits = document.getElementById("commits");
  commits.innerHTML = "";

  try {
    const dataPromise = await fetch(
      `https://api.github.com/repos/${username.value}/${repo.value}/commits`
    );
    if (!dataPromise.ok) {
      throw new Error(`${data.status} ${data.statusText}`);
    }
    const receivedData = await dataPromise.json();
    receivedData.forEach((commit) => {
      const liItem = document.createElement("li");
      liItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
      commits.appendChild(liItem);
    });
  } catch (error) {
    const liItem = document.createElement("li");
    liItem.textContent = `Error: ${error} (Not Found)`;
    commits.appendChild(liItem);
  }
}
