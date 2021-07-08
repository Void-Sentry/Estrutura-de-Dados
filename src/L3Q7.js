class FilaCircular{

    constructor(n){

        this.dado = []
        this.inicio = 0
        this.fim = 0
        this.capacidade = n

    }

    enqueue(dado){

        if(this.isFull()){

            //throw new Error('queue overflow')

        }

        else{

            this.dado[this.fim] = dado

            if(this.fim === this.capacidade){
                this.fim = 0
            }

            else{
                this.fim++
            }

        }

    }

    dequeue(d){

        if(this.isEmpty()){

            //throw new Error('queue underflow')

        }

        else{

            if(this.inicio === this.capacidade){
                this.inicio = 0
            }

            else if(d < this.capacidade){
                this.inicio += d
            }

            else{
                this.inicio++
            }

        }

    }

    isEmpty(){

        return this.inicio === this.fim

    }

    isFull(){

        return this.inicio === this.fim + 1

    }

    size(){

        if(this.isEmpty()){
            return 0
        }

        else if(this.inicio < this.fim){
            return this.fim - this.inicio
        }

        else{
            return this.capacidade - this.inicio + this.fim + 1
        }

    }

    

    first(){
        if(!this.isEmpty()){
            return this.dado[this.inicio]
        }

    }

    jump(quantidade_a_pular){
        
        let i = 0
        let q = 0

        while(i <= 3){
        
            i++

            if(this.size() === 1){
                i = 4
            }

            if(i === 3){

                this.dequeue(quantidade_a_pular)

                q++

                i = 0

            }
        
        }
        console.log(q)
    }

}

export default FilaCircular