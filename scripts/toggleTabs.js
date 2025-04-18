//Ter num json tudo aquilo que vem pra cá dps

// Obter as tabs para poder utilizalas
const tabVisitados = document.getElementById("visitados")
const tabPorVisitar = document.getElementById("por-visitar")



//função para reconhecer o toque nas tabs e 
//funções para executar quando isso acontecer

//0 -> Visitados  |1 -> Por Visitar

var tabState = 0
updateBorder()
displayVisitado()



tabPorVisitar.addEventListener("click", ()=>{
    //se já estiver nessa tab, fazer nada
    if(tabState == 1) return;

    tabState = !tabState

    displayPorVisitar();

})


tabVisitados.addEventListener("click", ()=>{
    //se já estiver nessa tab, fazer nada
    if(tabState == 0) return;

    tabState = !tabState


    displayVisitado();

})

function updateBorder(){
    //new state é PorVisitar
    if(tabState == 1){
        tabPorVisitar.classList.remove("border")
        tabPorVisitar.classList.add("hover")

        tabVisitados.classList.add("border")
        tabVisitados.classList.remove("hover")
    }else{
        tabPorVisitar.classList.add("border")
        tabPorVisitar.classList.remove("hover")

        tabVisitados.classList.remove("border")
        tabVisitados.classList.add("hover")
    }
}


function displayPorVisitar(){
    updateBorder()
    renderAllPorVisitar()

}


function displayVisitado(){
    updateBorder()
    renderAllVisitados()
}