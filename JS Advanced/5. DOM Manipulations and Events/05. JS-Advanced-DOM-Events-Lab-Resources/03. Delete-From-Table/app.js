function deleteByEmail() {
     // const email = document.getElementsByName("email")[0];
     const email = document.querySelector("input[name='email']").value;

     // const secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
     const secondColumn = Array.from(document.querySelector("tbody").children);


    for (let td of secondColumn) {
         if (td.textContent === email) {
             let row = td.parentNode;
             row.parentNode.removeChild(row);
             document.getElementById("result").textContent = "Deleted.";
             return;
         }
         document.getElementById("result").textContent = "Not found.";
     }
}





