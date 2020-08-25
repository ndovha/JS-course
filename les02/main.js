// Task 1
const L = prompt('Length');
const W = prompt('Width');
const H = prompt('Height');
const paint = 16;

if (L < 1000 && W < 1000 && H < 1000) {
    S :Math.floo,((2 * (L * W + L * H + W * H)) / paint);
    alert(`number of paint cans: ${S}`)
} else {
    alert(undefined)
};

// Task 2

const A1 = prompt('Price1:');
const A2 = prompt('Price2:');
const A3 = prompt('Price3:');
const B1 = prompt('Weight1:');
const B2 = prompt('Weight2:');
const B3 = prompt('Weight3:');

if(A1, A2, A3, B1, B2, B3 < 100 ){
 const max = Math.max(A1*B1, A1*B2, A1*B3, A2*B1, A2*B2, A2*B3, A3*B1, A3*B2, A3*B3)
   alert(`Max ${max}`)
} else (
    alert(undefined)
);

// Task 3
const happyNum = prompt('number of ticket: ');

if(happyNum >= 0 && happyNum < 10**6) {
    let num = happyNum.toString().split('').map(Number)
    let sum1 = num[0] + num[1] + num[2]
    let sum2 = num[3] + num[4] + num[5]
    if(sum1 === sum2) {
        alert('Yes')
    } else {
    alert('No')
}
 }
 else {
    alert('--')
};

// Task 4

// 1
const age = prompt('How old are you?');

switch(true) {
    case age > 0 && age <= 12 : {
        alert('child')
        break;
    }
    case age > 12 && age <= 18 : {
        alert('teenager')
        break;
    }
    case age > 18 && age <= 60 : {
        alert('adult')
        break;
    }
    case age > 60 : {
        alert('retiree')
        break;
    }
    default: {
        alert(undefined)
        break;
    }
};

// 2
const number = +prompt('Write a number from 0 to 9:');

switch(number) {
    case 0: {
        alert(')')
        break;
    }
    case 1 : {
        alert('!')
        break;
    }
    case 2 : {
        alert('@')
        break;
    }
    case 3 : {
        alert('#')
        break;
    }
    case 4 : {
        alert('$')
        break;
    }
    case 5 : {
        alert('%')
        break;
    }
    case 6 : {
        alert('^')
        break;
    }
    case 7 : {
        alert('&')
        break;
    }
    case 8 : {
        alert('*')
        break;
    }
    case 9 : {
        alert('(')
        break;
    }
    default: {
        break;
    }
};

// 3
let num = prompt('three-digit number:');

let newNum = num.split('').map(Number);
newNum[0] === newNum[1] || newNum[1] === newNum[2] || newNum[0] === newNum[2] ? alert('Yes') : alert('No');

// 4
const year = +prompt('Year');
(year % 4 == 0 && year % 100 !== 0) || year % 400 == 0 ? alert('Yes') : alert('No')

// 5
const p = prompt('five-digit number');

if(p.length == 5 && p[0] === p[4] && p[1] === p[3]) {
    alert('true')
} else {
    alert('false')
};

// 6 ------
// let element = document.getElementById('USD');
// let element2 = document.getElementById('currency');
// // let element3 = document.getElementById('Submit');

// const EUR = 0.84;
// const UAH = 27;
// const GBP = 0.76;

// if(element2 == 'EUR') {
//     alert(element * EUR)
// } else if(element2 == 'UAH') {
//     alert(element * UAH)
// } else if(element2 == 'GBP') {
//     alert(element * GBP)
// }


// 7
const sum = +prompt('Purchase amount');

if(sum >= 200 && sum < 300) {
    let result = sum / 100 * 3
    alert(`Price 3%: ${sum - result}`)
} else if(sum >=300 && sum < 500) {
    let result = sum / 100 * 5
    alert(`Price 5%: ${sum - result}`)
} else if(sum >= 500) {
    let result = sum / 100 * 7
    alert(`Price 7%: ${sum - result}`)
};

// 8
const circle = prompt('circumference');
const square = prompt('perimeter square');

circle <= square ? alert('Yes') : alert('No');

// 9
const q1 = prompt('Сколько будет 2+2: 1) 5; 2) 4; 3) 3 ?');
const q2 = prompt('Столица Украины: 1) Киев; 2)Харьков; 3) Днепр ?');
const q3 = prompt('Числа Пи равно: 1) 7; 2)2.14; 3)3.14');
const result1 = 0;
const result2 = 2;
const result3 = 2;
const result4 = 0;
const result5 = 2;
const result6 = 0;

if(q1 == 5 || q1 == 3) {
   console.log(result1)
} else if(q1 == 4) {
    console.log(result2)
};

if(q2 == 'Киев') {
    console.log(result3)
} else if(q2 == 'Харьков' || q2 == 'Днепр') {
    console.log(result4)
};

if(q3 == 3.14) {
    console.log(result5)
} else if(q3 == 2.14 || q3 == 7) {
    console.log(result6)
};

if(q1 == 4 && q2 == 'Киев' && q3 == 3.14) {
    alert(result2 + result3 + result5)
} else (
    alert(0)
);

// 10 ????

// function nextDay() {
//     let tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     return tomorrow.getDate();
//   }
  
//   alert(nextDay())



 
