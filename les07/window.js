const modal = document.getElementById('myModal');

const  btnopen = document.getElementById('open');
let btnclose = document.getElementById('close');

btnopen.onclick = function() {
    modal.style.display = 'block';
  };
  
btnclose.onclick = function() {
    modal.style.display = "none";
  };

