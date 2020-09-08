// Task 1 
const morse = {
  ".-": "a",
  "-...":"b",
  "-.-.": "c",
  "-..": "d", 
  ".":"e", 
  "..-.":"f",
  "--.":"g",
  "....":"h", 
  "..":"i", 
  ".---":"j", 
  "-.-":"k", 
  ".-..":"l", 
  "--":"m", 
  "-.":"n", 
  "---":"o", 
  ".--.":"p", 
  "--.-":"q", 
  ".-.":"r",
  "...":"s", 
  "-":"t", 
  "..-":"u", 
  "...-":"v", 
  ".--":"w", 
  "-..-":"x", 
  "-.--":"y", 
  "--..":"z", 
  ".----":"1", 
  "..---":"2", 
  "...--":"3", 
  "....-":"4", 
  ".....":"5", 
  "-....":"6", 
  "--...":"7", 
  "---..":"8", 
  "----.":"9", 
  "-----":"0", 
  ".-.-.-":".",
  "--..--":",",
  "..--..":"?",
  "-.-.--":"!",
  "-....-":"-",
  "-..-.":"/",
  ".--.-.":"@",
  "-.--.":"(",
  "-.--.-":")",
  "···−−−···":"SOS"
 };

  const decodeMorse = function(morseCode){
    let words = morseCode.split('  ');//разделяем на слова
    let letters = words.map((w) => w.split(' '));//делим массив слов на символы
    let decoded = [];
  
    for(let i = 0; i < letters.length; i++){
      decoded[i] = [];
      for(let x = 0; x < letters[i].length; x++){
          if(morse[letters[i][x]]){
              decoded[i].push( morse[letters[i][x]] );
          }
      }
    }
  
    return decoded.map(arr => arr.join('')).join(' ').toUpperCase();
  }
  


console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

// Task 2

// 2-1

function CamelCase(string) {
  string = string.replace(/[-_\s]+(.)?/g, (match, ch) => // regexp and function, match delet -
    (ch ? ch.toUpperCase() : '')
  );
  //  first word is always lowercase
  return string.substring(0, 1).toLowerCase() + string.substring(1);
};
console.log(CamelCase('Background-color'));

//2-2
function abbreviation(str) {
  let arr = str.split(/[-\s]/);
  let newstr = [];
  for(let i = 0; i < arr.length; i++) {
     newstr.push(arr[i][0].toUpperCase());
  }
  return newstr.join('');
}

console.log(abbreviation('объектно-ориентированное программирование'));

//2-3

function info(url) {
  let parsed = url.split(/(http[s]?):\/\/?([^\/\s]+)\/(.*)/);
  let result = `Протокол: ${parsed[1]}, домен: ${parsed[2]}, путь: ${parsed[3]}`;
  return result;
}

console.log(info('https://career.softserveinc.com/en-us/learning-and-certification/formats-2/'));

