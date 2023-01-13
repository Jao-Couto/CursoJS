let andarAtual = 0


function moveElevador(andarDestino) {
    console.log("Fecha a Porta");
    while (andarAtual != andarDestino) {
        console.log("Está no andar: " + andarAtual)
        if (andarAtual < andarDestino)
            andarAtual++
        else if (andarAtual > andarDestino)
            andarAtual--
    }
    console.log("Está no andar: " + andarAtual)
    console.log("Chegou no destino")
    console.log("Abre a Porta");
}


moveElevador(4)
console.log("Pessoa Entrou");
moveElevador(3)

