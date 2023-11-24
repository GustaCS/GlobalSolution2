
let medicos=localStorage.getItem("medicos")
let medicoArray = JSON.parse(medicos)

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
            window.location.href="../paginas/telaReceita.html"
            usuarioAtual.push(comparacao)
            atualizar()
        }
    }
})