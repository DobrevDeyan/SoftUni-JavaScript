const loadButton = document.getElementById("btnLoad");
const createButton = document.getElementById("btnCreate");
const phoneBook = document.getElementById("phonebook");
const person = document.getElementById("person");
const phone = document.getElementById("phone");

function attachEvents() {
  loadButton.addEventListener("click", viewContacts);
  createButton.addEventListener("click", createContact);
}
attachEvents();

async function viewContacts() {
  const url = "http://localhost:3030/jsonstore/phonebook";

  try {
    const response = await fetch(url);
    if (response.ok !== true) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();

    phoneBook.innerHTML = "";

    // phoneBook.replaceChildren(...Object.values(data).map(createElement));

    for (let contact of Object.values(data)) {
      const liElement = document.createElement("li");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.id = contact._id;
      deleteButton.addEventListener("click", deleteContact);

      liElement.textContent = `${contact.person}: ${contact.phone}`;

      liElement.appendChild(deleteButton);
      phoneBook.appendChild(liElement);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createContact() {
  const url = `http://localhost:3030/jsonstore/phonebook`;
  if (person.value && phone.value) {
    const record = {
      person: person.value,
      phone: phone.value,
    };
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(record),
    });
  }

  person.value = "";
  phone.value = "";

  await viewContacts();
}
async function deleteContact(event) {
  const url = `http://localhost:3030/jsonstore/phonebook/${event.target.id}`; // event.target.dataset.id usable
  const response = await fetch(url, {
    method: "delete",
  });

  await viewContacts();
}

// function attachEvents() {
//   document.getElementById("btnCreate").addEventListener("click", async () => {
//     const person = document.getElementById("person");
//     const phone = document.getElementById("phone");

//     if (person.value && phone.value) {
//       const record = {
//         person: person.value,
//         phone: phone.value,
//       };

//       await createNewPhoneRecord(record);

//       person.value = "";
//       phone.value = "";

//       await load();
//     }
//   });

//   document.getElementById("btnLoad").addEventListener("click", load);
// }

// async function load() {
//   const url = `http://localhost:3030/jsonstore/phonebook`;
//   const response = await fetch(url);
//   const data = await response.json();

//   const phonebook = document.getElementById("phonebook");

//   phonebook.innerHTML = "";

//   Object.values(data).forEach((p) => {
//     const li = createElement("li", `${p.person}: ${p.phone}`);
//     const deleteBtn = createElement("button", "Delete", ["id", p._id]);

//     li.appendChild(deleteBtn);
//     phonebook.appendChild(li);

//     deleteBtn.addEventListener("click", deletePhone);
//   });
// }

// async function createNewPhoneRecord(record) {
//   const url = `http://localhost:3030/jsonstore/phonebook`;
//   const response = await fetch(url, {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(record),
//   });
// }

// async function deletePhone(event) {
//   const url = `http://localhost:3030/jsonstore/phonebook/${event.target.id}`;
//   const response = await fetch(url, {
//     method: "delete",
//   });

//   await load();
// }

// function createElement(type, content, attributes = []) {
//   const element = document.createElement(type);

//   if (content) {
//     element.textContent = content;
//   }

//   if (attributes.length > 0) {
//     element.setAttribute(attributes[0], attributes[1]);
//   }

//   return element;
// }

// attachEvents();
