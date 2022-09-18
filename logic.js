const button = document.querySelector('#btn-executa');
const garrafasValor = document.querySelector('#garrafas-valor');
const textArea = document.querySelector('#testarea');

const garrafas = [2, -5, -9, 5, 0, 2, 9, 10, 2, 5, 8];
garrafasValor.innerHTML = `[${garrafas.join(', ')}]`;

button.addEventListener('click', function(ev) {
  eval(textArea.value);
  garrafasValor.innerHTML = `[${garrafas.join(', ')}]`;
});