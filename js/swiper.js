function appendImg(i, d) {
    let img = document.createElement("img")
    img.src = i.l
    img.setAttribute('class', 'T75of B5GQxf')
    img.setAttribute('alt', 'Imagem da captura de tela')
    img.setAttribute('itemprop', 'image')
    img.setAttribute('tabindex', '0')
    img.setAttribute('load', 'lazy')
    img.setAttribute('data-screenshot-index', '0')
    img.addEventListener('click', function imgGo() {
        if (i.v)
            window.open(i.v)
    })
    d.appendChild(img)
}

function appendDivSon(i, d) {
    let divSon = document.createElement("div")
    divSon.setAttribute('jscontroller', 'RQJprf')
    divSon.setAttribute('class', 'Atcj9b')
    d.appendChild(divSon)
    appendImg(i, divSon)
}

function appendDiv(i) {
    let div = document.createElement("div")
    div.setAttribute('class', 'ULeU3b Utde2e')
    div.setAttribute('role', 'listitem')
    appendDivSon(i, div)
    document.getElementById("swiper").appendChild(div)
}