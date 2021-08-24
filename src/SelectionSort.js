function SelectionSort(){

    for(i = 0; i < n.length; i++){
        
        aux = i

        for(j = 1; j < n.length; j++){

            if(n[aux] > aux[j]){

                aux = j

            }
        }

        if(i != aux){

            swap(n[i], n[aux])

        }

    }
    
}