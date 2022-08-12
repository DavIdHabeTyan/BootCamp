class UserApi {
   getUser() {
      return new Promise((res) => {
         setTimeout(() => {
            res({ name: "John", age: 45 });
         }, 200);
      });
   }

   createUser(user) {
      return new Promise((res) => {
         setTimeout(() => {
            res(user);
         }, 1500);
      });
   }
}

const api = new UserApi();

api.getUser().then((name) => console.log(name));
api.createUser({ name: "Jane", age: 19 }).then((name) => console.log(name));