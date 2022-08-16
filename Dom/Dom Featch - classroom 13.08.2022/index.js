const URL = "./employees.json"
const button = document.getElementById("button");
const tableBody = document.getElementById("employees");

// --- delete button
// const taskDeleteEl = document.createElement('button');
// taskDeleteEl.classList.add("delete")
// taskDeleteEl.innerHTML = "Delete"
//
// taskDeleteEl.addEventListener("click", (e) => {
//    console.log("heee");
// })


// taskDeleteEl.addEventListener("click", (e) => {
//    if(e.target.nodeName === "TD"){
//       e.target.parentNode.remove();
//    }
// })


// tableBody.addEventListener("click", handleBodyClick);
button.addEventListener("click", handleButtonClick);

   // function handleBodyClick(e) {
   //    if(e.target.nodeName === "TD"){
   //       e.target.parentNode.remove();
   //    }
   // }

function deleteElement(event) {
   let e = event.target;
   let i = e.parentNode.parentNode.rowIndex;
   document.getElementById("myTable").deleteRow(i);
}

   function handleButtonClick() {
      tableBody.innerHTML = getLoaderHTML();

   fetch(URL)
      .then((res) => {
         return res.json();
      })
      .then((employees) => {
         tableBody.innerHTML = "";

         employees.forEach(elem => {
            tableBody.innerHTML += getRowHTML(
               elem.id,
               elem.name,
               elem.status,
            );
         });
      })
      .then(() => {
         const deleteButtons = document.querySelectorAll(
            "input[value = 'Delete']"
      )
         deleteButtons.forEach(button =>
            button.addEventListener("click", deleteElement)
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
    <td>${status} </td>
    <td>
      <input type="button" value ="Delete"/> 
     </td>
  </tr>  `
}


function getLoaderHTML() {
   return `
   <tr>
      <td colspan="3">
        <img
          src="https://icons8.com/preloaders/preloaders/1487/%E2%80%8B%E2%80%8BIphone-spinner-1.gif"
        />
      </td>
    </tr>
   `
}

function getFailMsgHTML() {
   return `
    <tr>
      <td colspan="3">
        <p>Failed to load Employees</p>
      </td>
    </tr>`;
}


