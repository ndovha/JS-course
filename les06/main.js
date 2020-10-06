// Task 1

let first = document.getElementById('container') 

for(let i = 1; i <= 100; i++) {
    div = document.createElement('div'); //Создаем див в диве 
    first.append(div);
    div.setAttribute('id', 'box' + i); //добавляем уникальное ид 
    div.classList.add('box');
}

function randomColor(idNum) { //красим каждую ячейку рандомным цветом
       let div = document.getElementById('box' + idNum)
        div.style = 'background-color: ' + 
        '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        // alert('Заполнение завершено');
}

function random_array() { //создаем рандомный массив
    let arr = Array.from({length: 100}, (_, i) => i + 1);
    ranNums = [],
    i = arr.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(arr[j]);
    arr.splice(j,1);
}
return ranNums;
}

function theLoop(arr,i) {
    setTimeout(function () {
        randomColor(arr[i]);// меняем цвет ячейки из рандомного массива 
        i++
      if (i < arr.length) {               
        theLoop(arr, i);  // Call the loop again
      } else {
        alert('Заполнение завершено');
      }
    }, 500);
  };
theLoop(random_array(),0)





