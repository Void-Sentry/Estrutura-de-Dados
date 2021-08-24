function QuickSort(n){

    if(inferior < superior){
        
        pivo = n[superior]

        i = inferior - 1

        for(j = inferior; j <= superior - 1; j++){

            if(n[j] <= pivo){

                i++

                swap(n[j], n(i))
            }
        }

        swap(n[superior], n[i + 1])

        pivo_pos = i + 1
    }

}