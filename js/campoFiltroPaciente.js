var chk_medicamento = document.querySelector('#chk_medicamento');
var chk_cirurgia = document.querySelector('#chk_cirurgia');

var input_medicamento = document.querySelector('#medicamentoPaciente');
var input_cirurgia = document.querySelector('#input_cirurgia');

chk_medicamento.addEventListener('change', function() {
    input_medicamento.disabled = !chk_medicamento.checked;

});

chk_cirurgia.addEventListener('change', function() {
    input_cirurgia.disabled = !chk_cirurgia.checked;

});

