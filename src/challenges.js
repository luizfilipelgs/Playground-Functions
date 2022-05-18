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
//console.log(highestCount(numbers));


// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 > distanciaCat2) {
    return "cat2";
  } else if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  }

  return "os gatos trombam e o rato foge";
}


// Desafio 8
function fizzBuzz(arrayFb) {
  for (let i = 0; i < arrayFb.length; i+= 1) {
    if (arrayFb[i] % 3 === 0 && arrayFb[i] % 5 === 0 ) {
      arrayFb[i] = "fizzBuzz" 
    } else if (arrayFb[i] % 3 === 0) {
      arrayFb[i] = "fizz"
    } else if (arrayFb[i] % 5 === 0) {
      arrayFb[i] = "buzz"
    } else {
      arrayFb[i] = "bug!"
    }
  }
  return arrayFb
}

let teste8 = [2,15,7,9,45]
//console.log(fizzBuzz(teste8));

// Desafio 9
function encode(frase) {
  let fraseArr = frase.split("")
    for (let i = 0; i < fraseArr.length; i += 1) {
      if (fraseArr[i] ==="a") {
        fraseArr[i] = "1"
      } else if (fraseArr[i] ==="e") {
        fraseArr[i] = "2"
      } else if (fraseArr[i] ==="i") {
        fraseArr[i] = "3"
      } else if (fraseArr[i] ==="o") {
        fraseArr[i] = "4"
      } else if (fraseArr[i] ==="u") {
        fraseArr[i] = "5"   
    }  
  }
  return fraseArr.join("");
}


function decode(fraseCod) {
  let fraseCodArr = fraseCod.split("")
    for (let i = 0; i < fraseCodArr.length; i += 1) {
      if (fraseCodArr[i] ==="1") {
        fraseCodArr[i] = "a"
      } else if (fraseCodArr[i] ==="2") {
        fraseCodArr[i] = "e"
      } else if (fraseCodArr[i] ==="3") {
        fraseCodArr[i] = "i"
      } else if (fraseCodArr[i] ==="4") {
        fraseCodArr[i] = "o"
      } else if (fraseCodArr[i] ==="5") {
        fraseCodArr[i] = "u"   
    }  
  }
  return fraseCodArr.join("");
}



// Desafio 10
function techList(arrTech, nome) {
  if (arrTech !="") {
    arrTech = arrTech.sort();
    for (let i in arrTech) {
      arrTech[i] = { 
      tech: arrTech[i],
      name: nome,
      } 
    } 
   return arrTech
    
  } else {
    
    return "Vazio!"
  }

 
}

let teste10 = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']
let nome = "luiz"

console.log(techList(teste10,nome));

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
