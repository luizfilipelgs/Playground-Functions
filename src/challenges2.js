// Desafio 11
function generatePhoneNumber(arrNumero) {
  let numeroCorreto = true;
  let numero;
  if (arrNumero.length === 11) {
    for (let i = 0; i < arrNumero.length; i += 1) {
      let count = 0;
      numero = arrNumero[i];
      for (let number of arrNumero) {
        if (number === arrNumero[i]) {
          count += 1;
        }
      }
      if (arrNumero[i] > 9 || arrNumero[i] < 0 || count >= 3) {
        numeroCorreto = false;
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    numeroCorreto = false;
    return 'Array com tamanho incorreto.';
  }
  if (numeroCorreto === true) {
    let numeroFinal = '(';
    for (let index = 0; index < 11; index += 1) {
      numeroFinal = numeroFinal + arrNumero[index];
        if (index === 1) {
        numeroFinal = numeroFinal + ') ';
      } else if (index === 6) {
        numeroFinal = numeroFinal + '-';
      }
    }
    return numeroFinal;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    Math.abs(lineA + lineB) > lineC 
    && Math.abs(lineB + lineC) > lineA 
    && Math.abs(lineC + lineB) > lineA 
    && Math.abs(lineA - lineB) < lineC 
    && Math.abs(lineB - lineC) < lineA 
    && Math.abs(lineC - lineB) < lineA
  )
   {
    return true;
  } 
    return false; 
  
  

}

// Desafio 13
function hydrate(pedidos) {
  let soma = 0;
  pedidos = pedidos.toString().split('');
  for (let pedido of pedidos) {
    pedido = parseInt(pedido, 0) || 0;
    soma = soma + pedido;
  }

  return soma === 1 ? `${soma} copo de água` : `${soma} copos de água`;
  
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
