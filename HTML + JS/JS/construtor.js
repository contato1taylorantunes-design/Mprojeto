export default function productMaker(imageURL, name, vendidos, preco) {
    let divDoProduto = document.createElement("div")
    let divProductInfo = document.createElement("div")
    let elementoImg = document.createElement("img")
    let elementoH4 = document.createElement("h4")
    let elementoP = document.createElement("p")
    let elementoSpan = document.createElement("span")
    divProductInfo.classList.add("product-info")
elementoImg.src = imageURL
elementoH4.innerText = name       
elementoP.innerText = `${vendidos} vendidos`
elementoSpan.innerText = `R$ ${preco},00`
divDoProduto.appendChild(elementoImg)
divDoProduto.appendChild(divProductInfo)
divProductInfo.appendChild(elementoH4)
divProductInfo.appendChild(elementoP)
divProductInfo.appendChild(elementoSpan)
divProdutos.appendChild(divDoProduto)
}


