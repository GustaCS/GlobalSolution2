

let atual=localStorage.getItem("usuario_atual")
let usuario_at = JSON.parse(atual)
var nome =usuario_at[0].nome
var nomeMed = usuario_at[0].medicoNome

document.querySelector("#salvarQtde").addEventListener('click',function(){

    let pac=localStorage.getItem("receitas")
    let pacArray = JSON.parse(pac)
    var pacCerto = pacArray.find(function(registro) {
        return registro.id === idContagem;
    });
    //console.log(pacCerto)
    apagar(idContagem);
    pacCerto.contagem = contRemedios;
    
    var horaFutura = 0

    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;
    var horarioAtual = horas + ":" + minutos + ":" + segundos;

    if(pacCerto.quantidade==1){
        horaFutura = horas;
    }else if(pacCerto.quantidade==12){
        horaFutura = horas;
    }else if(pacCerto.quantidade==12){
        horaFutura = horas+2;
    }else if(pacCerto.quantidade==6){
        horaFutura = horas+4;
    }else if(pacCerto.quantidade==4){
        horaFutura = horas+6;
    }else if(pacCerto.quantidade==3){
        horaFutura = horas+8;
    }else if(pacCerto.quantidade==2){
        horaFutura = horas+12;
    }
    if (horaFutura > 23) {
        horaFutura = horaFutura % 24; // Ajustar para o formato de 24 horas
    }
    var horarioNext = horaFutura + ":" + minutos + ":" + segundos;

    pacCerto.horario = horarioAtual;
    pacCerto.horarioProximoRemedio = horarioNext;
    console.log(pacCerto)
    receitas.push(pacCerto)
    atualizar()

})

let receitas =[]
window.addEventListener("load",()=>{
    receitas= JSON.parse(localStorage.getItem("receitas"))||[]
    atualizar()

})

function atualizar(){

    document.querySelector("#cardPac").innerHTML =""
    localStorage.setItem("receitas", JSON.stringify(receitas))
    receitas.forEach((prod)=>{
        if(prod.nome==nome){
            document.querySelector("#cardPac").innerHTML += createCard(prod)
        }
    })
}

function apagar(id){
    receitas = receitas.filter((pac)=>{
        return pac.id != id
    })
    atualizar()
}
idContagem = 0
function usoMedicamento(id){
    idContagem = id
    return idContagem;
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
        <h2 style="display:inline-block">Dr.</h2> 
        <h2 style="display:inline-block">${pacients.medicoNome}</h2>
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
            </div>

            <div>
                <p style="font-weight: bold; display:inline-block">Horario proximo remedio:</p>
                <p class="card-text" style="display:inline-block">${pacients.horarioProximoRemedio}</p>
            </div>
            </a>
            <a  onClick ="apagar(${pacients.id})" href="#" class="btn btn-danger" title="apagar Paciente">
            <i class="bi bi-trash"></i>
            </a>
            <a  onClick ="usoMedicamento(${pacients.id})" href="#" class="btn btn-info class qtdeSalvar"data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="bi bi-check-square"></i>
            </a>
        </div>
    </div>
    </div>`//template literals
}

let contador = 0;
let contRemedios = 0

function incrementar() {
    contador++;
    atualizarContador();
}

function decrementar() {
    if (contador > 0) {
        contador--;
        atualizarContador();
    }
}

function atualizarContador() {
    document.getElementById("contador").value = contador;
    contRemedios = contador;
    return contRemedios
}

