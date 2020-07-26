var inputValorHora = document.querySelector('#valor-hora');
var inputHorasProjeto = document.querySelector('#horas-projeto');
var spanValorProjeto = document.querySelector('#resposta');

function calcularValorProjeto() {
	var valorTotalProjeto = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2);

	spanValorProjeto.textContent = 'R$ ' + valorTotalProjeto;
}
