import Node from './node_ponteiro'

class Lista{

    constructor(){

        this.head = new Node()

    }

    //Aloca um espaço de memória para um nó e adiciona um dado no início da lista.
    add(dado){
        
        let novo_no = new Node(dado)
        
        novo_no.proximo = this.head.proximo
        this.head.proximo = novo_no

    }

    //Aloca um espaço de memória para um nó e adiciona um dado no final da lista.
    append(dado){
        
        let novo_no = new Node(dado)

        if(this.isEmpty()){

            this.head.proximo = novo_no

        }

        else{

            let aux = this.head.proximo

            while(aux.proximo !== null){

                aux = aux.proximo

            }

            aux.proximo = novo_no

        }
    
    }

    //Aloca um espaço de memória para um nó e adiciona um dado em uma posição específica da lista.
    addAt(posição, dado){

        if(posição >= this.length()){
    
            this.append(dado)

        }
        
        else{
        
            if(posição <= 0){

                this.add(dado)
                
            }
            
            else{
            
                let novo_no = new Node(dado)
                let i = 0
                let node_a = this.head
                let node_b = this.head.proximo

                while(i != posição){
                
                    node_a = node_b
                    node_b = node_b.proximo
                    i++

                }

                node_a.proximo = novo_no
                novo_no.proximo = node_b
        
            }

        }

    }

    //Remove um nó do início da lista e libera o espaço de memória usado pelo nó.
    removeFirst(){
        
        if(this.isEmpty()){
            
            throw new Error('Is Empty!!')
        
        }

        else{
            
            let aux = this.head.proximo
            this.head.proximo = aux.proximo
        
        }
    
    }

    //Remove um nó do fim da lista e libera o espaço de memória usado pelo nó.
    removeLast(){
        
        if(this.isEmpty()){

            throw new Error('Is Empty!')

        }
        
        let node_a = this.head
        let node_b = this.head.proximo
            
        while(node_b.proximo != null){
                
            node_a = node_b
            node_b = node_b.proximo

           }

        node_a.proximo = null
        return node_b.dado

    }

    //Remove um nó de uma posição específica da lista e libera o espaço de memória usado pelo nó.
    removeAt(dado, posição){

    }

    //Verifica se a lista está vazia.
    isEmpty(){
        
        return this.head.proximo === null
    
    }

    toString(){

        let aux = this.head.proximo
        let r = ''

        while(aux !== null){

            r += aux.dado + (aux.proximo ? ' -> ' : '')
            aux = aux.proximo

        }

        return r

    }

    //Pesquisa se um dado está presente em algum nó da lista.
    search(dado){

        if(this.isEmpty()){
            return false

        }

        else{

            let aux = this.head.proximo

            while(aux !== null){

                if(aux.dado === dado){
                    return true
                }

                aux = aux.proximo

            }

            return false

        }

    }

    last(){
        
        if (this.isEmpty()) {
			
            throw new Error('Is Empty!')
		
        }

		let aux1 = this.head
		let aux2 = this.head.proximo

		while (aux2.proximo !== null) {
			
            aux1 = aux2
			aux2 = aux2.proximo
		
        }

		return aux2.dado

    }

    getAt(dado){

        let node1 = this.head
        let node2 = this.head.proximo
        let i

        for(i = 0; i <= dado; i++){

            if(i == dado){

                return node2

            }
            else{

                node2 = node2.proximo

                if(node2 === null){
                    return null
                }
            
            }

        } 

    }

    swap(indice1, indice2){

        let aux = this.getAt(indice1).dado
        this.getAt(indice1).dado = this.getAt(indice2).dado
        this.getAt(indice2).dado = aux

    }

    //Informa a quantidade de elementos na lista.
    length(){

        let i = 0
        let node = this.head.proximo

        while(node !== null){

            node = node.proximo
            i++

        }

        return i

    }

    clear(){
        this.head = new Node(null)
    }

    //Inverte os elemtnos de uma lista simplesmente encadeada
    //L3Q4
    inverterElementos(){

        let aux1 = this.head.proximo

        this.clear()
        
        while(aux1 !== null){
            
            this.add(aux1.dado)

            aux1 = aux1.proximo

        }

    }

    //L3Q5
    randomizer(){

        let i

        for(i = this.length() - 1; i >= 0; i--){

            let j = Math.floor(Math.random() * i)

            this.swap(i, j)

        }
    
    }

}

export default Lista