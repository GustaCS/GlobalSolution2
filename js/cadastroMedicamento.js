document.querySelector('#salvarReceita').addEventListener('click',cadastrarReceita)

let receitas =[]

window.addEventListener("load",()=>{
    receitas= JSON.parse(localStorage.getItem("receitas"))||[]
    atualizar()

})

function atualizar(){
    localStorage.setItem("receitas", JSON.stringify(receitas))
}

usuario= localStorage.getItem("usuario_Atual")
console.log(usuario)

function cadastrarReceita(){
    const nome  = document.querySelector('#nomePacienteReceita').value
    const nomeRemedio  = document.querySelector('#nomeRemedio').value    
    const quantidade = document.querySelector('#quantidade').value
    const periodo = document.querySelector('#periodoRemedio').value
       
    const medico = {
        id:Date.now(),
        nome,
        nomeRemedio,
        quantidade,
        periodo,

    }    
    //receitas.push(medico)
    atualizar()
}

function atualizar(){
    localStorage.setItem("receitas", JSON.stringify(receitas))
}