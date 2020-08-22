function sum(operador1, operador2) {
  return operador1 + operador2;
}

function subs(operador1, operador2) {
  return operador1 - operador2;
}

function mult(operador1, operador2) {
  return operador1 * operador2;
}

function div(operador1, operador2) {
  return operador1 / operador2;
}

module.exports = {
  sum: sum,
  subs: subs,
  mult: mult,
  div: div,
};

//module.exports = { sum, subs, mult, div };

/*module.exports.sum = sum;
module.exports.subs = subs;
module.exports.mult = mult;
module.exports.div = div;*/
