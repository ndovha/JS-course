// Task 2

 class Marker {
    constructor(color, amount) {
      this.color = color;
      this.amount = amount;
    }
  
    print(string) {
      let div = document.getElementById("content");
      for (let i = 0; i < string.length; i++) {
        if (this.amount != 0) {
          if (string[i] == ' ') { //если пробел то добавляем краску
            this.amount += 0.5;
          }
          div.innerHTML += string[i];
          div.style.color = this.color;
          this.amount -= 0.5; //тут отнимаем краску
        } else {
          alert('Marker is over');
          break;
        }
      }
    }
  }
  
  class FilledMarker extends Marker {
    fill() { //метод для заправки маркера
     this.amount = 100;
    }
  }
  
  let marker = new FilledMarker('red', 2);
  
  marker.fill();
  
  const l = 'Классы в JavaScript были введены в ECMAScript 2015 и представляют собой синтаксический сахар над существующим в JavaScript механизмом прототипного наследования. Синтаксис классов не вводит новую объектно-ориентированную модель, а предоставляет более простой и понятный способ создания объектов и организации наследования.'
  marker.print(l);



//   Task 3

 class Circle {
   constructor(radius) {
     this.radius = radius
   }

   get radius(){
      return this._radius;
   }
   set radius(_radius){
    this._radius = _radius;
   }
   get diameter() {
     return this._radius * 2;
   }

   area() {
      return Math.floor(Math.PI * this._radius * this._radius);
   }
   
   circumference() {
     return Math.floor(Math.PI * this._radius * 2);
   }
 }

 let circle = new Circle(15);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area());
console.log(circle.circumference());