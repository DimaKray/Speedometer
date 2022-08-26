let output = document.querySelector('.output');
let arrow = document.querySelector('.arrow');
let numberOne = document.querySelector('.one');
let numberTwo = document.querySelector('.two');
let numberThree = document.querySelector('.three');
let numberFour = document.querySelector('.four');
let timer;
let timerBack;
class Car {
   constructor (name, model, speed) {
      this.name = name;
      this.model = model;
      this.speed = +speed;
   };
   registration () {
      this.speed = 180;
   };
   panelSpeed () {
      numberOne.textContent = this.speed / 4;
      numberTwo.textContent = this.speed / 2;
      numberThree.textContent = (this.speed / 2) + (this.speed / 4);
      numberFour.textContent = this.speed;
   };
   move () {
      let delay = 0;
      let degrees = 0;
      let keyPoint = 0;
      document.addEventListener('keydown', function (event) {
         if (event.code == 'KeyW' && keyPoint == 0) {
            keyPoint++;
            clearInterval(timerBack);
            timer = setTimeout(function arrowMove () {
               degrees++;
               console.log(degrees, delay);
               output.textContent = degrees;
               arrow.style.transform = 'rotate(' + degrees + 'deg)';
               if (degrees < 45) {
                  delay = 60;
               } else if (degrees < 90 && degrees > 45) {
                  delay = 30;
               } else if (degrees > 90) {
                  delay = 10;
               };
               timer = setTimeout (arrowMove, delay);
               if (degrees == 180) {
                  clearTimeout(timer);
                  return
               };
            }, delay);
         };
      });
      document.addEventListener('keyup', function (event) {
         if (event.code == 'KeyW' && degrees > 0) {
            keyPoint--;
            clearTimeout(timer);
            timerBack = setInterval(() => {
               degrees--;
               console.log(degrees);
               output.textContent = degrees;
               arrow.style.transform = 'rotate(' + degrees + 'deg)';
               if (degrees == 0 || degrees < 0) {
                  clearInterval(timerBack);
                  return;
               };
            }, 10);
         };
      });
   };
};
function main () {
   let MyCar = new Car();
   MyCar.registration ();
   MyCar.panelSpeed ();
   MyCar.move();
};
main ();


