
let ladder = {
    step: 0,
    up: function () {
        this.step++
        return this;
    },
    down: function () { 
        if (this.step > 0){
            this.step--
            return this;
        }  else {
            console.log('Це сама найнижча сходинка, спускатись нема куди');
            this.step = 0;
        }
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this.step;
    }
  };


ladder.up().up().down().showStep()
  