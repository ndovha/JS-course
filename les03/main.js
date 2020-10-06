// Task 1 


function  Duplicate(elem) {
 const low = elem.toLowerCase().split('');
 const result = low.reduce((acc, el) => {
     if(acc[el]) {
         acc[el]++;
     } else {
         acc[el] = 1;
     }
     return acc;
 }, {});

   return result;
}

console.log(Duplicate('Indivisibilities'));

// Task 2
let DNA_strand = 'ATTGC';
let element = ['A', 'T', 'G', 'C'];
let resultArray = [];
for(let i = 0; i < DNA_strand.length; i++) {
    for(let j = 0; j < element.length; j++) {
        if(DNA_strand[i] === element[j]) {
            if(DNA_strand[i] === 'A') {
                resultArray.push('T');
            } else if(DNA_strand[i] === 'T') {
                resultArray.push('A');          
            } else if(DNA_strand[i] === 'G') {
                resultArray.push('C');   
            } 
              else if(DNA_strand[i] === 'C') {
                resultArray.push('G');   
            } else {
                resultArray.push(DNA_strand[i]);
            }
       }
    }
}
console.log(resultArray.join(''));

// Task 3
let phrase = 'bitcoin take over the world maybe who knows perhaps';
let words = phrase.split(' ');

// let min = Math.min(...words.map(({ length }) => length));
// console.log(min); ----> ????
let min = words.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  });
console.log(min.length);

// Task 4
let phraseNum = '4of Fo1r pe6ople g3ood th5e the2';
let phrases = phraseNum.split(' ');
let sort = phrases.sort(
    function(a, b){
    return +a[a.search(/[0-9]/)] - +b[b.search(/[0-9]/)]
    });

let stringSort = sort.join(" ");
console.log(stringSort);
    
