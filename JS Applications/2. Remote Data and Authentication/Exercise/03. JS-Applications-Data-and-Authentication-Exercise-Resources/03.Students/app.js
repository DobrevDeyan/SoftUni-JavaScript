window.addEventListener("load", async () => {
  const submitForm = document.getElementById("form");

  viewStudents();
  submitForm.addEventListener("submit", createStudent);
});

//Create student function
async function createStudent(event) {
  event.preventDefault();
  const form = event.target;
  const studentData = new FormData(form);

  const firstName = studentData.get("firstName");
  const lastName = studentData.get("lastName");
  const facultyNumber = studentData.get("facultyNumber");
  const grade = Number(studentData.get("grade"));

  if (firstName && lastName && facultyNumber && Number(grade)) {
    const studentEntry = {
      firstName,
      lastName,
      facultyNumber,
      grade,
    };

    const url = "http://localhost:3030/jsonstore/collections/students";

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(studentEntry),
      });
      if (response.ok !== true) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const data = await response.json();
    } catch (error) {
      alert(error.message);
    }

    form.reset();
    viewStudents();
  }
}

//View all students function
async function viewStudents() {
  const url = "http://localhost:3030/jsonstore/collections/students";
  try {
    const response = await fetch(url);
    if (response.ok !== true) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();
    Object.values(data).map(createTable);
  } catch (error) {
    alert(error.message);
  }
}
async function createTable(studentData) {
  const studentsTable = document.getElementsByTagName("tbody")[0];
  const tableRow = document.createElement("tr");
  const individualStudentData = `    
  <td>${studentData.firstName}</td>
  <td>${studentData.lastName}</td>
  <td>${studentData.facultyNumber}</td>
  <td>${studentData.grade.toFixed(2)}</td>
  `;
  studentsTable.appendChild(tableRow);
  tableRow.innerHTML = individualStudentData;
}

// function start() {
//     getAllStudents();

//     document.getElementById('form').addEventListener('submit', createStudent);
// }

// start();

// async function request(url, options) {
//     const response = await fetch(url, options);

//     if (response.ok != true) {
//         const error = await response.json();
//         alert(error.message);
//         throw new Error(error.message);
//     }

//     const data = await response.json();
//     return data;
// }

// async function getAllStudents() {
//     const students = await request('http://localhost:3030/jsonstore/collections/students');

//     const rows = Object.values(students).map(createRow).join('');

//     document.querySelector('tbody').innerHTML = rows;
// }

// function createRow(student) {
//     return `<tr>
//         <td>${student.firstName}</td>
//         <td>${student.lastName}</td>
//         <td>${student.facultyNumber}</td>
//         <td>${student.grade.toFixed(2)}</td>
//     </tr>`;
// }

// async function createStudent(event) {
//     event.preventDefault();

//     var formData = new FormData(event.target);

//     const firstName = formData.get('firstName');
//     const lastName = formData.get('lastName');
//     const facultyNumber = formData.get('facultyNumber');
//     const grade = Number(formData.get('grade'));

//     if (firstName && lastName && facultyNumber && Number(grade)) {
//         const student = {
//             firstName,
//             lastName,
//             facultyNumber,
//             grade,
//         };

//         await request('http://localhost:3030/jsonstore/collections/students', {
//             method: 'post',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(student),
//         });

//         event.target.reset();
//         getAllStudents();
//     }
// }
