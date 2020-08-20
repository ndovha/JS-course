//Задание 1
const name = prompt('What is your name?');
console.log(name);
alert(`Hello ${name}`);

//Задание 2
const newAge = prompt('When were you born?', 1990);
const age = 2020 - newAge;
console.log(age);
alert(`My age: ${age}`);

//Задание 3
const squareLength = prompt('How long is the side of the square?');
const squareLong = 4;
const multiply = squareLength * squareLong;
console.log(multiply);
alert(`Perimeter of a square: ${multiply}`);

//Задание 4
const circle = prompt('What is the radius of the circle?');
const P = 3.14;
const radius = circle ** 2;
const area = P * radius;
console.log(area);
alert(`Area of circle: ${area}`);

//Задание 5
const distance = prompt('What is the distance in km between two cities?');
const time = prompt('How many hours do you want to come?');
const speed = distance / time;
console.log(speed);
alert(`Speed: ${speed}`);

//Задание 6
const dollar = prompt('Dollars');
const eur = 0.85;
const convert = dollar * eur;
console.log(convert);
alert(`Euro: ${convert}`);

//Задание 7
const volume = prompt('Flash drive size in GB:');
const file = 820;
const files = Math.floor((volume * 1000)/820);
console.log(files);
alert(`Number of files: ${files}`);

//Задание 8
const chocolate = prompt('Amount of money:');
const price = 15;
const amountOfChoco = Math.floor(chocolate / price);
const balance = (chocolate - (amountOfChoco * price));
alert(`Amount of chocolates: ${amountOfChoco}, balance: ${balance}`);


//Задание 9
const num = prompt('Three-digit number:')
const ed = num % 10;
const des =( (num - ed) / 10) % 10;
const sot = (num - des * 10 - ed) / 100;
const sum = ed * 100 + des * 10 + sot * 1
console.log(sum)
alert(`${sum}`)