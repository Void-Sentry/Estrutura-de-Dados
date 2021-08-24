function Merge(vetor, esquerda, centro, direta){

    //transfere os elementos de esquerda e direita para um array auxiliar
    aux = vetor.length

    for(let i = esquerda; i <= direta; i++){

        aux[i] = vetor[i]

    }

    //índices para controle de execução
    let i = esquerda
    let j = centro + 1
    let k = esquerda

    //O laço trata da comparação entre aux[i] e aux[j] para adicionar o menor em vetor[k]
    //O laço tem que ser executado até i atingir centro ou j atingir direita
    while(i <= centro && j <= direita){

        if(aux[i] < aux[j]){
            vetor[k] = aux[i]
            i++
        }
        else{
            vetor[k] = aux[j]
            j++
        }

        k++

    }

    //Uma das duas partes do array será consumida antes da outra. Sendo necessário fazer o append de todos os elementos da parte que não foi totalmente consumida
    while(i <= centro){
        
        vetor[k] = aux[i]
        i++
        k++
    }

    while(j <= direita){

        vetor[k] = aux[j]
        j++
        k++
    }



}

function MergeSort(vetor, esquerda, direita){

    //inicialmente temos esquerda = 0 e direita = vetor.length - 1
    //Quando possuir apenas 1 elemento ele para de "quebrar"
    if(esquerda >= direita){
        return
    }
    
    //senão if(esquerda < direita)
    else{

        //Valor central entre esquerda e direita
        let centro = (esquerda + direita) / 2
        //Chamadas recursivas da esquerda até centro | centro + 1 até direita
        MergeSort(vetor, esquerda, direita)
        MergeSort(vetor, centro + 1, direita)
        //Após cada quebra há uma chamada do método Merge
        Merge(vetor, esquerda, centro, direita)

    }

}