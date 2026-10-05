//Dados de um produto
let imageURL="https://t2.tudocdn.net/786853?w=1200&h=1200"
let name = "Memoria RAM"
let vendidos = 600
let preco = 245
//div onde cria componentes do produto
let divProdutos = document.querySelector(".produtos");

//Criar elementos
    //Div
    let divDoProduto = document.createElement("div")
    let divProductInfo = document.createElement("div")
    //Image
    let elementoImg = document.createElement("img")
    ///H4
    let elementoH4 = document.createElement("h4")
    //P
    let elementoP = document.createElement("p")
    //span
    let elementoSpan = document.createElement("span")


//Adicionar Classes CSS:
    //Div:
    divProductInfo.classList.add("product-info")

// Atribuir informações
elementoImg.src = imageURL
elementoH4.innerText = name       
elementoP.innerText = `${vendidos} vendidos`
elementoSpan.innerText = `R$ ${preco},00`

//Afiliar elementos
divDoProduto.appendChild(elementoImg)
divDoProduto.appendChild(divProductInfo)
divProductInfo.appendChild(elementoH4)
divProductInfo.appendChild(elementoP)
divProductInfo.appendChild(elementoSpan)

//associar so HTML
divProdutos.appendChild(divDoProduto)