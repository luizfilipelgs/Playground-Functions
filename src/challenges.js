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
let arr = ["cap", "my" , "cap"]
//console.log(concatName(arr));

// Desafio 5
function footballPoints(vitorias, empates) {
  let pontosTotais = vitorias*3 + empates*1
  return pontosTotais
}
//console.log(footballPoints(14,8)); 

// Desafio 6

function highestCount(arrayNumeros) {

  let maiorNum = arrayNumeros[0];
  let numVezes = 1;
  for (let i = 1; i < arrayNumeros.length; i += 1) {
    if (maiorNum === arrayNumeros[i] ) {
      
      numVezes += 1
    } else if (maiorNum < arrayNumeros[i] ) {
      maiorNum = arrayNumeros[i] 
      numVezes = 1
    }
    
  }
  return numVezes
}

let numbers = [1,2,2,5,10,11,3,11]
console.log(highestCount(numbers));


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
