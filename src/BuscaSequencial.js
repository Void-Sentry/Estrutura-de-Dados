function buscaSequencial(chave, dados){
    for(var i = 0; i <dados.length; i++){
        if(dados[i] == chave)
        return dados[i]
    }
    return -1
}

function buscaSequencialSentinela(chave, dados){}