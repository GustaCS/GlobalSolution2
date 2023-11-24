document.querySelector('#salvarMedico').addEventListener('click',cadastrarMedico)

let medicos =[]

window.addEventListener("load",()=>{
    medicos= JSON.parse(localStorage.getItem("medicos"))||[]
    atualizar()

})

function atualizar(){
    localStorage.setItem("medicos", JSON.stringify(medicos))
}

function cadastrarMedico(){
    const nome  = document.querySelector('#nomeMedico').value
    const cod_medico  = document.querySelector('#codigoMedico').value    
    const senha = document.querySelector('#senhaMedico').value
    const data = document.querySelector("#dataMedico").value
    var dataParaFormatar = new Date(data)
    var dia = dataParaFormatar.getDate()+1
    var mes = dataParaFormatar.getMonth()+1
    var ano = dataParaFormatar.getFullYear()
    var data_de_aniversario = dia + '/' + mes + '/' + ano 
    
    var cpf  = document.querySelector('#cpfMedico').value
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpf.value = cpf;

    const medico = {
        id:Date.now(),
        nome,
        senha,
        data_de_aniversario,
        cpf,
        cod_medico,
    }    
    medicos.push(medico)
    atualizar()
}

function atualizar(){
    localStorage.setItem("medicos", JSON.stringify(medicos))
}