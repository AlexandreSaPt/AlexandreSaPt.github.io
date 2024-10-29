//this urls are relative to the index.html
const iconURL = {
    euro: "./icons/euro.svg",
    pc_friendly: "./icons/laptop.png",
    localization: "./icons/localization.png",
    snack: "./icons/snack.png"
}

const mainEl = document.getElementById("main")

function createTextEl(text){
    if(typeof text != "string" || text == ""){
        console.log("Erro! \n text não é um número")
    }
    var el = document.createElement('div')
    el.classList.add("text")
    el.innerHTML = text
    return el
}

/*
    em vez de recer o URL, recebe o tipo: euro, pc_friendly, localization, por aí
*/
function createIcon(property){
    if(typeof property != "string" || property == ""){
        console.log("Erro")
        return
    }
    console.log(`Property: ${property}`)
    var el = document.createElement('div')
    el.classList.add("icon")
    url = ""

    for(let i = 0; i < Object.keys(iconURL).length; i++){
        if(property == Object.keys(iconURL)[i]){
            url = iconURL[property]
            break;
        }
    }
    if(url == ""){
        //significa que a property não existe, logo abortar 
        console.log("erro");
        //return
    }

    el.style.backgroundImage = `url(${url})`
    return el
}


/**
 * 
 * "information": {
        "euro": "Barato",
        "pc_friendly": "Há mesas específicas para a utilização de computador (e tomadas)",
        "localization": "R. Guedes de Azevedo 217, 4000-273 Porto",
        "snack": "Tiras de Frango - 5.30€ <br>Sumo de Laranja - 3.30€"
    },
*/

function createInformation(information){
    //CHECKED
    var infoEl = document.createElement('div')
    infoEl.classList.add("information")

    console.log(`Information JSON: `)
    console.log(information)
    console.log(`Properties: ${Object.keys(information)}`)

    for(let i = 0; i < Object.keys(information).length; i++){
        var propertyName = Object.keys(information)[i]

        textEl = createTextEl(information[propertyName])
        iconEl = createIcon(propertyName)

        infoEl.appendChild(iconEl)
        infoEl.appendChild(textEl)
    }
    return infoEl
}

function createTitle_Subtitle(title, subtitle){
    if(typeof title != "string" || title == "" || typeof subtitle != "string" || subtitle == ""){
        console.log("erro")
        return
    }

    var container = document.createElement('div')
    container.classList.add("title")

    var titleEl = document.createElement('h1')
    titleEl.textContent = title

    var subtitleEl = document.createElement('h2')
    subtitleEl.textContent = subtitle

    container.appendChild(titleEl)
    container.appendChild(subtitleEl)

    return container
}

function createCafeInfoContainer(titleEl, informationEl){
    var cafeContainer = document.createElement('div')
    cafeContainer.classList.add("cafe-info-container")

    cafeContainer.appendChild(titleEl)
    cafeContainer.appendChild(informationEl)
    return cafeContainer
}

function createSideImage(url){
    if(typeof url != "string" || url == ""){
        console.log("Erro")
        return
    }

    var sideImgEl = document.createElement('div')
    sideImgEl.classList.add("image")

    sideImgEl.style.backgroundImage = `url(${url})`

    return sideImgEl
}

function createVisitados(cafeInfoContainer, sideImgEl){
    var visitadosEl = document.createElement('div')
    visitadosEl.classList.add("visitados-container")

    visitadosEl.appendChild(cafeInfoContainer)
    visitadosEl.appendChild(sideImgEl)

    return visitadosEl
}


function renderVisitado(singlePlace){
    var titleEl = createTitle_Subtitle(singlePlace.title, singlePlace.subtitle)
    var informationEl = createInformation(singlePlace.information)

    var cafeInfoContainer = createCafeInfoContainer(titleEl, informationEl)

    var sideImgEl = createSideImage(singlePlace.img)

    var visitadosEl = createVisitados(cafeInfoContainer, sideImgEl)
    mainEl.appendChild(visitadosEl)
}



function renderAllVisitados(){
    for(let i = 0; i < studyData.visitados.length; i++){
        renderVisitado(studyData.visitados[i])
    }
}



renderAllVisitados()