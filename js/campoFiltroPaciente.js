var chk_responsavel = document.querySelector("#chk_pacienteCrianca");
var chk_medicamento = document.querySelector('#chk_medicamento');
var chk_cirurgia = document.querySelector('#chk_cirurgia');
var chk_medicamento = document.querySelector('#chk_medicamento')
var chk_idoso = document.querySelector('#idoso');

var input_responsavel = document.querySelector('#RespPaciente');
var input_cpfResponsavel = document.querySelector('#cpfResponsavel');
var input_remedioPaciente = document.querySelector('#medicamentoPaciente');
var input_cirurgia = document.querySelector('#input_cirurgia');

var input_pressaoAlta = document.querySelector('#input_pressaoAlta');
var input_colesterol = document.querySelector('#input_colesterol');
var input_diabete = document.querySelector('#input_diabete');
var input_probCardiaco = document.querySelector('#input_prob_cardiaco');


chk_responsavel.addEventListener('change', function() {
    input_responsavel.disabled = !chk_responsavel.checked;
    input_cpfResponsavel.disabled = !chk_responsavel.checked;

});

chk_medicamento.addEventListener('change', function() {
    input_remedioPaciente.disabled = !chk_medicamento.checked;

});

chk_cirurgia.addEventListener('change', function() {
    input_cirurgia.disabled = !chk_cirurgia.checked;

});

chk_idoso.addEventListener('change', function() {
    chk_medicamento.disabled = !chk_idoso.checked;
    chk_cirurgia.disabled = !chk_idoso.checked;

    input_pressaoAlta.disabled = !chk_idoso.checked;
    input_colesterol.disabled = !chk_idoso.checked;
    input_diabete.disabled = !chk_idoso.checked;
    input_probCardiaco.disabled = !chk_idoso.checked;
});

