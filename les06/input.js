//Task 3

document.getElementById('one').addEventListener("input", validation);
function validation (){
    input = document.getElementById('one').value //entered input
if(!isNaN(input.slice(-1))) //check last element
{
    document.getElementById('one').value = input.slice(0, -1);
}}

