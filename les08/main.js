
let first = document.getElementById('container');
let count = 0;

for(let i = 1; i <= 100; i++) {
    var div = document.createElement('div'); //Создаем див в диве
    div.setAttribute('id', 'box' + i); //добавляем уникальное ид 
    div.classList.add('box');
    first.append(div);
};



function randomColor(idNum) { //красим каждую ячейку рандомным цветом
       let div = document.getElementById('box' + idNum)
        div.style = 'background-color: ' + `#${Math.random().toString(16).slice(2,8)}`;
        // alert('Заполнение завершено');
}

function random_array() { //создаем рандомный массив
    let arr = Array.from({length: 100}, (_, i) => i + 1);
    let ranNums = [];
    let i = arr.length;
    let j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(arr[j]);
    arr.splice(j,1);
}
return ranNums;
}

function  setT(arr,i) {
  first.addEventListener('click', function() {
    count += 1;
    document.getElementById('clicks').innerHTML = count;
  })
    setTimeout(function () {
        randomColor(arr[i]);// меняем цвет ячейки из рандомного массива 
        i++;
      if (i < arr.length) {               
        setT(arr, i);  
      } else {
        alert('Заполнение завершено');
      }
    }, 500);
  };  
  setT(random_array(),0)



