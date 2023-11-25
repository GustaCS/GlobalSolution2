document.querySelector('#salvarReceita').addEventListener('click',cadastrarReceita)

let receitas =[]

window.addEventListener("load",()=>{
    receitas= JSON.parse(localStorage.getItem("receitas"))||[]
    atualizar()

})

function atualizar(){
    localStorage.setItem("receitas", JSON.stringify(receitas))
}

function cadastrarReceita(){
    const nome  = document.querySelector('#nomePacienteReceita').value
    const nomeRemedio  = document.querySelector('#nomeRemedio').value    
    const quantidade = document.querySelector('#quantidade').value
    const periodo = document.querySelector('#periodoRemedio').value

    const modal = bootstrap.Modal.getInstance(document.querySelector('#exampleModal'))

    let atual=localStorage.getItem("usuario_atual")
    let usuario_at = JSON.parse(atual)
    var medicoNome =usuario_at[0].nome
       
    const medico = {
        id:Date.now(),
        nome,
        medicoNome,
        nomeRemedio,
        quantidade,
        periodo,
        contagem:0,
        horario:"",
        horarioProximoRemedio:""

    }
    receitas.push(medico)
    atualizar()
    modal.hide()
}

function atualizar(){

    document.querySelector("#cardPacientes").innerHTML =""
    localStorage.setItem("receitas", JSON.stringify(receitas))
    receitas.forEach((prod)=>{
        document.querySelector("#cardPacientes").innerHTML += createCard(prod)
    })
}

function apagar(id){
    receitas = receitas.filter((pac)=>{
        return pac.id != id
    })
    atualizar()
}

document.querySelector("#busca").addEventListener("keyup",()=>{
    let busca = document.querySelector("#busca").value
    let recFiltradas=receitas.filter((pac)=>{
        return pac.nome.toLowerCase().includes(busca.toLowerCase())
    })

    filtrar(recFiltradas)
})
function filtrar(receitas){
    document.querySelector("#cardPacientes").innerHTML =""
    receitas.forEach((pac)=>{
        document.querySelector("#cardPacientes").innerHTML += createCard(pac)
    })
}






function createCard(pacients){
    recomendacao="";
    if(pacients.quantidade ==2){
        recomendacao = "Tomar de 12 em 12 horas";
    }else if(pacients.quantidade ==1){
        recomendacao = "Tomar 1 por dia";
    }else if(pacients.quantidade ==12){
        recomendacao = "Tomar de 2 em 2 horas";
    }else if(pacients.quantidade ==6){
        recomendacao = "Tomar de 4 em 4 horas";
    }else if(pacients.quantidade ==3){
        recomendacao = "Tomar de 8 em 8 horas";
    }else if(pacients.quantidade ==2){
        recomendacao = "Tomar de 12 em 12 Horas";
    }
    total = pacients.quantidade*pacients.periodo;
    return `
    <div class="col-lg-3 col-md-12">
    <div class="card">
        <div class="card-header">
        ${pacients.nome}
        </div>
        <div class="card-body">
            <p style="font-weight: bold; display:inline-block">Remédio: </p>
            <p class="card-text" style="display:inline-block">${pacients.nomeRemedio}</p>
            <p class="card-text" style="font-weight: bold;">${recomendacao}</p>
            <p class="card-text" style="font-weight: bold;">Durante ${pacients.periodo} dias.</p>
            <p style="font-weight: bold; display:inline-block">Remedios Tomados:</p>
            <p class="card-text" style="display:inline-block">${pacients.contagem}/${total}</p>
            <div>
            <p style="font-weight: bold; display:inline-block">Horario ultimo remedio:</p>
            <p class="card-text" style="display:inline-block">${pacients.horario}</p>
            <div>
                <p style="font-weight: bold; display:inline-block">Horario proximo remedio:</p>
                <p class="card-text" style="display:inline-block">${pacients.horarioProximoRemedio}</p>
            </div>
            <a  onClick ="apagar(${pacients.id})" href="#" class="btn btn-danger" title="apagar Paciente">
            <i class="bi bi-trash"></i>
            </a>
        </div>
        </div>
    </div>
    </div>`
    //template literals
}