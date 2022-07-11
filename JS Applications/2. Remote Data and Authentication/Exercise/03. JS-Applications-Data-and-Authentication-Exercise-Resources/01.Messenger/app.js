function attachEvents() {
  document.getElementById("refresh").addEventListener("click", loadMessages);
  document.getElementById("submit").addEventListener("click", onSubmit);

  loadMessages();
}

const authorInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');
const list = document.getElementById("messages");

attachEvents();
// event object is to be set as parameter on below function when dealing with forms to use preventDefault and handle request manually
async function onSubmit() {
  const author = authorInput.value;
  const content = contentInput.value;

  const result = await createMessage({ author, content });
  contentInput.value = "";
  //   list.value += `\n` + `${message.author}: ${message.content}`;
  list.value += `\n` + `${author}: ${content}`;
}
async function loadMessages() {
  const url = "http://localhost:3030/jsonstore/messenger";
  const response = await fetch(url);
  const data = await response.json();

  const messages = Object.values(data);
  list.value = messages
    .map((message) => `${message.author}: ${message.content}`)
    .join("\n");
}
async function createMessage(message) {
  const url = "http://localhost:3030/jsonstore/messenger";

  const options = {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(message),
  };
  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}
