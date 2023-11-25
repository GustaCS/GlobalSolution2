document.querySelector('#salvarPaciente').addEventListener('click',cadastrarPaciente)

let pacientes =[]

window.addEventListener("load",()=>{
    pacientes= JSON.parse(localStorage.getItem("pacientes"))||[]
    atualizar()

})

function atualizar(){
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
}

function cadastrarPaciente(){
    const nome  = document.querySelector('#nomePaciente').value
    var cpf  = document.querySelector('#input_cpf').value
    const medicamento = document.querySelector('#medicamentoPaciente').value
    const cirurgia = document.querySelector('#input_cirurgia').value
    const senha = document.querySelector('#senhaPaciente').value
    
    const data = document.querySelector("#data").value
    var dataParaFormatar = new Date(data)
    var dia = dataParaFormatar.getDate()+1
    var mes = dataParaFormatar.getMonth()+1
    var ano = dataParaFormatar.getFullYear()
    var data_de_aniversario = dia + '/' + mes + '/' + ano 

    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpf.value = cpf;

    var chk_pressao = document.getElementById('input_pressaoAlta');
    var pressao = ""
    if(chk_pressao.checked){
        pressao="sim"
    }else{
        pressao ="nao"
    }

    var chk_colesterol = document.getElementById('input_colesterol');
    var colesterol = ""
    if(chk_colesterol.checked){
        colesterol="sim"
    }else{
        colesterol ="nao"
    }

    var chk_diabete = document.getElementById('input_diabete');
    var diabete = ""
    if(chk_diabete.checked){
        diabete="sim"
    }else{
        diabete ="nao"
    }

    var chk_prob_cardiaco = document.getElementById('input_prob_cardiaco');
    var prob_Cardiaco = ""
    if(chk_prob_cardiaco.checked){
        prob_Cardiaco="sim"
    }else{
        prob_Cardiaco ="nao"
    }
    if (medicamento ===""){
        medicamento == "";
    }
    if (cirurgia ===""){
        cirurgia == "";
    }

    const paciente = {
        id:Date.now(),
        nome,
        senha,
        data_de_aniversario,
        cpf,
        medicamento,
        cirurgia,
        colesterol,
        pressao,
        diabete,
        prob_Cardiaco,
    }    
    pacientes.push(paciente)
    atualizar()
}

function atualizar(){
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
}