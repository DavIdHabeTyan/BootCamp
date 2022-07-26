

let user = {
   name: "Dav",
}

let result = Object.defineProperty(user, "lastName", {
   value: "Habetyan",
   writable:true,
})

console.log(result)
