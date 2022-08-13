const API_URL = "https://api.github.com/users"

function getUsers() {
   fetch(API_URL)
      .then(res => res.json())
      .then(users => {
         console.log(users)
         let container = document.createElement("div");
         container.classList.add("container")
         users.map(user => {
            let userCard = document.createElement("div");
            let login = document.createElement("div");
            let avatar = document.createElement("img");
            let remove = document.createElement("img");
            avatar.setAttribute("src", `${user.avatar_url}`)
            remove.setAttribute("src", "./img/delete1.svg")
            remove.classList.add("icon")

            // add click to remove button
            remove.onclick = (event) => {
               event.target.parentElement.parentElement.remove();
            }

            let content = document.createElement("div");
            userCard.classList.add("userCard");
            login.innerText = `User: ${user.login}`;
            content.classList.add("cardContent")
            content.appendChild(login)
            content.appendChild(remove)


            userCard.appendChild(avatar);
            userCard.appendChild(content);
            container.appendChild(userCard);
         })
         document.body.appendChild(container);
      })
}

getUsers()

let filterInput = document.getElementById("filter");

filterInput.addEventListener("input" , (event) => {
   if(event.target.value.length >= 3){
     let container = document.querySelector(".container");
      console.log(container)
   }

})
