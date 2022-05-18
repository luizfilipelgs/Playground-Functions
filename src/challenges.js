// Desafio 1
function compareTrue(valor1,valor2) {

  if (valor1 === true && valor2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(b,h) {
  let area = (b*h)/2
  return area
  
}

// Desafio 3
function splitSentence(frase) {
  let fraseDiv = frase.split(" ")
  return fraseDiv
}

// Desafio 4
function concatName(arrayOrd) {
  let stringFinal = arrayOrd[arrayOrd.length -1] + ", "+ arrayOrd[0]
    return stringFinal
}
let arr = ["joao", "luiz"]
console.log(concatName(arr));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
