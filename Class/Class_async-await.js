function sleep(ms = 300) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms);
   });
}

class UserApi{
   async getUser() {
      await sleep(1500);
      return {name: "John", age: 32};
   }
   async createUser(user) {
      await sleep(1500);
      return user;
   }
}

const api = new UserApi();
api.getUser().then((name) => console.log(name));
api.createUser({name: "Jane", age: 19}).then((name) => console.log(name));