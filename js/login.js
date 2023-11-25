
let medicos=localStorage.getItem("medicos")
let medicoArray = JSON.parse(medicos)

let pacientes=localStorage.getItem("pacientes")
let pacientesArray = JSON.parse(pacientes)

let usuarioAtual =[]
window.addEventListener("load",()=>{
    usuarioAtual= JSON.parse(localStorage.getItem("usuario_atual"))||[]
})

function atualizar(){
    localStorage.setItem("usuario_atual", JSON.stringify(usuarioAtual))
}

document.querySelector('#entrar').addEventListener('click',function(event){
    event.preventDefault()
    const nomeLogin  = document.querySelector('#nomeLogin').value
    const senhaLOgin= document.querySelector('#senhaLogin').value

    for(var i=0; i<medicoArray.length;i++){
        var comparacao = medicoArray[i]
        console.log(comparacao)
        if(comparacao.nome === nomeLogin && comparacao.senha === senhaLOgin){
            window.location.href="../paginas/telaPacienteMedico.html"
            usuarioAtual.push(comparacao)
            atualizar()
        }
    }

    for(var i=0; i<pacientesArray.length;i++){
        var pac_comparacao = pacientesArray[i]
        console.log(pac_comparacao)
        if(pac_comparacao.nome === nomeLogin && pac_comparacao.senha === senhaLOgin){
            window.location.href="../paginas/paciente.html"
            usuarioAtual.push(pac_comparacao)
            atualizar()
        }
    }
})