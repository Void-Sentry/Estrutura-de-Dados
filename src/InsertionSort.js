function InsertionSort(n){

    for(i = 1; i < n.length; i++){
        
        aux = n[i]

        for(j = i - 1; (j >= 0) && (n[j] > aux); j = j - 1){

            n[j + 1] = n[j]

        }

        n[j + 1] = aux

    }

}