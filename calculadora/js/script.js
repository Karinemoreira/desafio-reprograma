var inputSalario = document.querySelector('#ganho-mes');
var inputHoras = document.querySelector('#horas-dia');
var spanValorHora = document.querySelector('#resposta');

function calcularValorHora() {
	var qtdTotalDeHoras = inputHoras.value * 22;
	var valorDeHora = (inputSalario.valueAsNumber / qtdTotalDeHoras).toFixed(2);

	spanValorHora.textContent = 'R$ ' + valorDeHora;
}
