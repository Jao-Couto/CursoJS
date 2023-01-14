let titulo = document.createElement('h1')
titulo.textContent = "Título 1"

let texto = document.createElement('p')
texto.textContent = "Lorem Ipsum"

let imagem = document.createElement('img')
imagem.src = 'https://t1.uc.ltmcdn.com/pt/posts/3/7/6/o_que_significa_pagar_o_pato_23673_orig.jpg'
imagem.height = 400
imagem.style.display = 'block'



let botao = document.createElement('button')
botao.textContent = "Clique aqui"
botao.onclick = (e) => {
    texto.innerText = "Novo texto!"
}

document.querySelector("body").appendChild(titulo)
document.querySelector("body").appendChild(texto)
document.querySelector("body").appendChild(imagem)
document.querySelector("body").appendChild(botao)