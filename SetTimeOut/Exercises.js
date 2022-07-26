function Timer(time) {
   this.time = time;
   this.start = function () {
      startTimer = setInterval(function () {
         if (time > 0) {
            time--;
            const hour = Math.floor(time / 3600) % 24;
            const min = Math.floor(time / 60) % 60;
            const sec = Math.floor(time % 60);
            console.log(`${hour} : ${min} : ${sec} `)
         }
      }, 1000)
   }
   this.stop = function () {

      clearInterval(startTimer)
   }

   this.restart = () => {
      this.start()
   }
}

let timer = new Timer(9600) // secunde

timer.restart()


