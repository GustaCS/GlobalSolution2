document.querySelector("#salvar").addEventListener("click",cadastrar)

let produtos =[]

window.addEventListener("load",()=>{
    produtos= JSON.parse(localStorage.getItem("produtos"))||[]
    atualizar()

})

document.querySelector("#busca").addEventListener("keyup",()=>{
    let busca = document.querySelector("#busca").value
    let prodFiltradas=produtos.filter((tarefa)=>{
        return tarefa.nome.toLowerCase().includes(busca.toLowerCase())
    })

    filtrar(prodFiltradas)
})

function filtrar(produtos){
    produtos.forEach((prod)=>{
        document.querySelector("#tarefas").innerHTML += createCard(prod)
    })
}

function atualizar(){
    localStorage.setItem("produtos", JSON.stringify(produtos))
    produtos.forEach((prod)=>{
        document.querySelector("#tarefas").innerHTML += createCard(prod)
    })
}

function cadastrar(){
    const nome  = document.querySelector('#nome').value
    const preco  = document.querySelector('#preco').value
    const marca  = document.querySelector('#marca').value
    const tipo = document.querySelector('#tipo_produto').value

    const modal = bootstrap.Modal.getInstance(document.querySelector('#exampleModal'))

    const tarefa = {
        id:Date.now(),
        nome,
        preco,
        marca,
        tipo,
        concluida: false
    }


    if(!validar(tarefa.nome,document.querySelector("#nome")))return
    if(!validar(tarefa.preco,document.querySelector("#preco")))return
    
    produtos.push(tarefa)
    atualizar()
    modal.hide()
}

function validar(valor,campo){
    //clean code
    if(valor==""){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }

    campo.classList.remove("is-invalid")
    campo.classList.add("is-valid")
    return true
}
function apagar(id){
    produtos = produtos.filter((tarefa)=>{
        return tarefa.id != id
    })
    atualizar()
}

function concluir(id){
    let produtoEncontrado = produtos.find((tarefa)=>{
        return tarefa.id == id
    })
    produtoEncontrado.concluida = true
    atualizar()
}

function createCard(tarefa){
    let disabled = (tarefa.concluida) ? "disabled" :  ""

    return `
        <div class="card col-lg-3 col-md-12 mr-2">
            <div class="card-header">
            ${tarefa.nome}
            </div>
            <div class="card-body">
                <p class="card-text">R$ ${tarefa.preco}</p>
                <p class="float-start"><span class="badge text-bg-light">${tarefa.marca}</span></p>
                <p> <span class="badge text-bg-dark">${tarefa.tipo}</span></p>
                <a href="#" class="btn btn-success ${disabled}" title="marcar como concluida">
                <i class="bi bi-check-lg"></i>
                </a>
                <a  onClick ="apagar(${tarefa.id})" href="#" class="btn btn-danger" title="apagar tarefa">
                <i class="bi bi-trash"></i>
                </a>
            </div>
        </div>`//template literals
}

