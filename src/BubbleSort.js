function BubbleSort (n){

    for(i = 0; i < n.length; i++){
        
        for(j = 0; j < n.length - 1 - i; j++){

            if(n[j] > n[j + 1]){

                [n[j], n[j + 1]] = [n[j + 1], n[j]]

            }

        }
        
    }

}