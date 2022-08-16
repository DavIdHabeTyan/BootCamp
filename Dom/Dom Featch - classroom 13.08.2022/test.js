
const button = document.getElementById("button");
const tableBody = document.getElementById("employees");

button.addEventListener("click", handleButtonClick);
// tableBody.addEventListener("click", handleBodyClick);

// function handleBodyClick(e) {
//   e.target.parentNode.remove();
// }

function deleteCurrentRowHTML(event) {
   let e = event.target;
   let i = e.parentNode.parentNode.rowIndex;
   document.getElementById("myTable").deleteRow(i);
}

function handleButtonClick() {
   tableBody.innerHTML = getLoaderHTML();

   fetch(URL)
      .then((resp) => resp.json())
      .then((employeesCollection) => {
         tableBody.innerHTML = "";

         employeesCollection.forEach((employee) => {
            tableBody.innerHTML += getRowHTML(
               employee.id,
               employee.name,
               employee.status
            );
         });
      })
      .then(() => {
         const deleteButtons = document.querySelectorAll(
            "input[value = 'Delete']"
         );
         deleteButtons.forEach((button) =>
            button.addEventListener("click", deleteCurrentRowHTML)
         );
      })
      .catch((err) => {
         tableBody.innerHTML = getFailMsgHTML();
      });
}

function getRowHTML(id, name, status) {
   return `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${status ? "active" : "passive"}</td>
      <td>
        <input type="button" value="Delete"/>
      </td>
    </tr>`;
}

function getLoaderHTML() {
   return `
    <tr>
      <td colspan="4">
        <img
          src="https://icons8.com/preloaders/preloaders/1487/%E2%80%8B%E2%80%8BIphone-spinner-1.gif"
        />
      </td>
    </tr>`;
}

function getFailMsgHTML() {
   return `
    <tr>
      <td colspan="4">
        <p>Failed to load Employees</p>
      </td>
    </tr>`;
}