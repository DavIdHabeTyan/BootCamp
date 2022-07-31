
//write Timer

class Timer{
   constructor(minut, timeId) {
      this._time = minut;

   }

   start() {
      let timeId
      function Timer(time){
         return () => {
            if(time === 1) {
               clearInterval(timeId)
            }
            return this._time
         }
      }
      timeId = setInterval(Timer(10),900);

   }
   stop() {

   };

   pause() {

   };

   restart() {

   }


}


let timer = new Timer(10);

console.log(timer.start())
