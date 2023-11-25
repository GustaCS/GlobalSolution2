document.querySelector('.sair').addEventListener('click',voltarLogin)

function voltarLogin (){
    localStorage.removeItem('usuario_atual')
    window.location.href="../index.html"
}