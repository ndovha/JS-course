// Task 1

const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXXXXX', 9]];
function meeting (rooms, needsChairs) {
  if (needsChairs <= 0) {
      console.log('Game On');
      return;
  };
  
  let result = [];
  for(let i =0; i < rooms.length; i++) {
    let spareChairs = rooms[i][1] - rooms[i][0].length
    if(spareChairs >= 0) {
      result.push(spareChairs);
      var spareChairsSum = result.reduce((a, b) => a + b); // var, let scope(область видимости)  ????
    };
    if(spareChairsSum >= needsChairs) {
    result[i] -= (spareChairsSum - needsChairs) // если в последней комнате больше стульев чем нам надо
    break;
   } 
  };

  if(spareChairsSum < needsChairs) {
    console.log('Not enough!')
  };
 console.log(result);
}

meeting(rooms, 3);

// // Task 2

let area = document.getElementById('area');
let step = 0;

area.addEventListener('click', function(event) { 
  if(step % 2 === 0) {
    player = 'X'
    event.target.innerHTML = player;
  } else {
    player = 'O'
    event.target.innerHTML = player;
  }
  step++;
  check(player);
})

function check(player){
    const newArr = [ //массив выигрышных операций
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  const cells = document.getElementsByClassName('input');
  let result = "";
  for(let i = 0; i < newArr.length; i++) {
  if(cells[newArr[i][0]].innerHTML == player 
  && cells[newArr[i][1]].innerHTML == player
   && cells[newArr[i][2]].innerHTML == player) 
   {
    result = player;
   } else if(step == 9) {
     result = 0
    };
  };
  switch(result){
    case 'X':
      game_reset(cells);
      console.log("1");
      break;
    case 'O':
      game_reset(cells);
      console.log("2");
      break;
    case 0:
      game_reset(cells);
      console.log("0");
      break;
    default:
      console.log("-1");
      break;
  }
};


function game_reset (cells) { //начинает игру заново
  for(let i=0; i<cells.length; i++){
    cells[i].innerHTML = "";
    step = 0;
  }
};

// Task 3


let test = ['apple', 'cherry', 'melon', 'pear', 'watermelon'];
// test.splice(0, 1); // shift - извлекает элемент из начала
// console.log(test);

// test.splice(4, 1); // pop - извлекает элемент из конца
// console.log(test);

// test.splice(0, 2, 'pizza', 'cake');
// console.log(test);

// test.splice(0, 0, 'sprite', 'cola');// unshift - добавляет элементы в начало
// console.log(test);

test.splice(5, 0, 'sprite', 'cola');// push - добавляет элементы в конец
console.log(test);

// concat - создаёт новый массив, в который копирует данные из других массивов и дополнительные значения