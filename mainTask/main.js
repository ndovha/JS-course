// background body
function changeBackground() {
document.body.style.backgroundImage = "url('https://img4.goodfon.ru/original/1500x1000/a/9d/blue-wood-blossom-spring-flowers-vesna-iablonia-tsvety.jpg')"
}
changeBackground();

// Html elements
const clear = document.querySelector('.clear');
const filter1 = document.querySelector('.filter1');
const filter2 = document.querySelector('.filter2');
const date = document.getElementById('date')
const list = document.getElementById('list');
const input = document.getElementById('input');

const check = 'fa-check-circle';
const uncheck = 'fa-circle-thin';
const line_through = 'lineThrough';

let List = [];
let id = 0;


// Add to do

function addtoDo(toDo, id, done, trash, hidden) {
   
    if(hidden){return;}
    if(trash){return;}
    const doneItem = done ? check : uncheck;
    const lineItem = done ? line_through : '';

    const item = `
       <li class="items">
          <i class="fa ${doneItem} co" style="font-size:22px;" job="complete" id="${id}"></i>
          <p class="text ${lineItem}">${toDo}</p>
          <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
       </li>
    `
    list.insertAdjacentHTML('beforeend', item)
}

// Add button for toDo

document.getElementById('add').addEventListener('click', function() {
        const toDo = input.value
         if(toDo) { //check if input isn't empty
            addtoDo(toDo, id, false, false, false);
            List.push({ //push item to let List = []
               name: toDo,
               id: id,
               done: false,
               trash: false,
               hidden: false
         
           });
           localStorage.setItem('TODO', JSON.stringify(List));
            id++; //for next item
        }
        input.value = ''; //Empty input
    }
)

// localStorage
let data = localStorage.getItem('TODO');
if(data){
   List = JSON.parse(data);
   id = List.length;
   loadList(List)
} else{
   List = [];
   id = 0;
}
function loadList(array) {
   array.forEach(function(item) {
      addtoDo(item.name, item.id, item.done, item.trash, item.hidden);
   });
}

// Checked items
function completetoDo(element) {
   element.classList.toggle(check);
   element.classList.toggle(uncheck);
   element.parentNode.querySelector('.text').classList.toggle(line_through);
   List[element.id].done = List[element.id].done ? false : true;
}

// Delete

function deletetoDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  List[element.id].trash = true;
}

list.addEventListener('click', function(event) {
   let element = event.target;
   if (!element.attributes.job) {
      return;
   } else if(element.attributes.job.value == 'complete') {
      completetoDo(element);
   } else if(element.attributes.job.value == 'delete') {
      deletetoDo(element);
   }    
   localStorage.setItem('TODO', JSON.stringify(List));
 });


// clear 
clear.addEventListener('click', function () {
   localStorage.clear();
   location.reload();
})


// filter
function hiddenToDo(element) {
      element.parentNode.parentNode.removeChild(element.parentNode);
      List[element.id].hidden = true;
   }
filter1.addEventListener('click', function(event) {
   console.log(List)
   let element = document.querySelectorAll('.fa-check-circle');
   element.forEach((item) => {
      hiddenToDo(item);
  }) 
  localStorage.setItem('TODO', JSON.stringify(List));
})

filter2.addEventListener('click', function(event) {
  List.forEach((item) => {
   if (item.hidden){
      List[item.id].hidden = false;
      addtoDo(item.name, item.id, item.done, item.trash, false);
   }
})
localStorage.setItem('TODO', JSON.stringify(List));
})

// date

let options = {weekday: 'long', month: 'short', day: 'numeric'};
let today = new Date();
date.innerHTML = today.toLocaleDateString('en-US', options)







        