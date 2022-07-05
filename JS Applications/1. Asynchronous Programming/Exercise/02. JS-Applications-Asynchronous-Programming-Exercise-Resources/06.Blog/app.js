function attachEvents() {
  const loadButton = document.getElementById("btnLoadPosts");
  const viewButton = document.getElementById("btnViewPost");
  loadButton.addEventListener("click", getAllPosts);
  viewButton.addEventListener("click", displayPost);
}
attachEvents();

async function displayPost() {
  const postBody = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");
  const postTitle = document.getElementById("post-title");
  const selectedId = document.getElementById("posts").value;

  postTitle.textContent = "Loading...";
  postBody.textContent = "";
  postComments.replaceChildren();

  const [post, comments] = await Promise.all([
    getPostById(selectedId),
    getCommentsById(selectedId),
  ]);

  //   const post = await getPostById(selectedId);
  //   const comments = await getCommentsById(selectedId);

  postTitle.textContent = post.title;
  postBody.textContent = post.body;

  postComments.replaceChildren();
  comments.forEach((comment) => {
    const liElement = document.createElement("li");
    liElement.textContent = comment.text;
    postComments.appendChild(liElement);
  });
}

async function getAllPosts() {
  const getPosts = `http://localhost:3030/jsonstore/blog/posts`;
  const response = await fetch(getPosts);
  const data = await response.json();
  const selectedPost = document.getElementById("posts");

  Object.values(data).forEach((post) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = post.title;
    optionElement.value = post.id;
    selectedPost.appendChild(optionElement);
  });
}
async function getPostById(postId) {
  const getPost = `http://localhost:3030/jsonstore/blog/posts/` + postId;
  const response = await fetch(getPost);
  const data = await response.json();
  return data;
}
async function getCommentsById(postId) {
  const getComments = `http://localhost:3030/jsonstore/blog/comments`;
  const response = await fetch(getComments);
  const data = await response.json();
  const comments = Object.values(data).filter(
    (comment) => comment.postId === postId
  );
  return comments;
  //   const posts = Object.entries(data);
  //   for (let [postID, postAttributes] of posts) {
  //     const { body, id, title } = postAttributes;
  //   }
}
