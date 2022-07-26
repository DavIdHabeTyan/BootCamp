function Timer(time) {
   this.globalTime = time;

   this.start = function () {
      startTimer = setInterval(function () {
         if(this.globalTime > 0) {
            this.globalTime--;
            const hour = Math.floor(this.globalTime / 3600) % 24;
            const min = Math.floor(this.globalTime / 60) % 60;
            const sec = Math.floor(this.globalTime % 60);
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





