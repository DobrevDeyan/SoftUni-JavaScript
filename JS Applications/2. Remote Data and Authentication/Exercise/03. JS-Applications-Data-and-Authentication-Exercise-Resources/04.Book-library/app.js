const tableBody = document.querySelector("tbody");
document.getElementById("loadBooks").addEventListener("click", loadBooks);
document.getElementById("createForm").addEventListener("submit", onCreate);
tableBody.addEventListener("click", onTableClick);

loadBooks();
////

function onTableClick(event) {
  if (event.target.className === "delete") {
    onDelete(event.target);
  } else if (event.target.className === "edit") {
  }
}

async function onDelete(button) {
  const id = button.parentElement.dataset.id;
  await deleteBook(id);
  button.parentElement.parentElement.remove();
}

async function onCreate(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const author = formData.get("author");
  const title = formData.get("title");

  const result = await createBook({ author, title });
  tableBody.appendChild(createRow(result._id, result));

  event.target.reset();
}

async function loadBooks() {
  const books = await request(
    "http://localhost:3030/jsonstore/collections/books"
  );

  const result = Object.entries(books).map(([id, book]) => createRow(id, book));
  tableBody.replaceChildren(...result);
}

function createRow(id, book) {
  const row = document.createElement("tr");
  row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td data-id="${id}">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </td>
  `;
  return row;
}

async function createBook(book) {
  const result = await request(
    "http://localhost:3030/jsonstore/collections/books",
    {
      method: "post",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      body: JSON.stringify(book),
    }
  );
  return result;
}

async function updateBook(id, book) {
  const result = await request(
    `http://localhost:3030/jsonstore/collections/books/` + id,
    {
      method: "put",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      body: JSON.stringify(book),
    }
  );
  return result;
}

async function deleteBook(id) {
  const result = await request(
    `http://localhost:3030/jsonstore/collections/books/` + id,
    {
      method: "delete",
    }
  );
  return result;
}

async function request(url, options) {
  if (options && options.body !== undefined) {
    Object.assign(options, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const response = await fetch(url, options);
  if (response.ok !== true) {
    const error = response.json();
    alert(error.message);
    throw new Error(error.message);
  }
  const data = await response.json();
  return data;
}
