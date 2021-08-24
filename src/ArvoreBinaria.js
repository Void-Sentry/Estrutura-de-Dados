class Node{

    constructor(chave){

        this.chave = chave
        this.direita = null
        this.esquerda = null

    }

}

class ArvoreBinaria{
    
    constructor(){
    
        this.raiz = null
    
    }

    inserir(chave){

        let novoNó = new Node(chave)

        if(this.raiz === null){
    
            this.raiz = novoNó
    
        }
    
        else{
    
            this.inserirNó(this.raiz, novoNó)
    
        }
    
    }

    inserirNó(node, novoNó){
        
        if(novoNó.chave < node.chave){
        
            if(node.esquerda === null){
        
                node.esquerda = novoNó
        
            }
        
            else{
        
                this.inserirNó(node.esquerda, novoNó)
        
            }
        
        }
        
        else{
        
            if(node.direita === null){
                node.direita = novoNó
            }
        
            else{
        
                this.inserirNó(node.direita, novoNó)
        
            }

        }

    }

    remover(chave){
        this.raiz = this.removerNode(this.raiz, chave)
    }

    encontrarNó(node){

        while(node && node.esquerda !== null){
            node = node.esquerda
        }

        return node
    }

    removerNode(node,chave){

        if(this.node === null){
            return null
        }
        if(chave < node.chave){

            node.esquerda = this.removerNode(node.esquerda, chave)

            return node
        }
        else if(chave > node.chave){
            node.direita = this.removerNode(node.direita, chave)
            return node
        }
        else{

            if(node.esquerda === null && node.direita === null){
                node = null
                return node
            }

            if(node.esquerda === null){
                node = node.direita
                return node
            }
            else if(node.direita === null){
                node = node.esquerda
                return node
            }

            var aux = this.encontrarNó(node.direita)
            node.chave = aux.chave
            node.direita = this.removerNode(node.direita, aux.chave)
            
            return node
        }

    }

    altura(){
        if(this.raiz === null) return -1
        else return this.alturaNode(this.root)
    }

    alturaNode(raiz){
        
        if(raiz === null) return -1
        else{
            
            let altura_esquerda = this.alturaNode(raiz.esquerda)
            let altura_direita = this.alturaNode(raiz.direita)
            
            if(altura_esquerda < altura_direita) return altura_direita + 1
            else return altura_esquerda + 1
        }

    }

    preOrder(){
        this.preOrderNode(this.raiz)
    }

    preOrderNode(node){
        if(node !== null){
            this.preOrderNode(node.esquerda)
            this.preOrderNode(node.direita)
        }
    }

    inOrder(){
        this.inOrderNode(this.root)
    }

    inOrderNode(node){
        if(node !== null){
            this.inOrderNode(node.esquerda)
            this.inOrderNode(node.direita)
        }
    }

    posOrder(){
        this.posOrderNode(this.raiz)
    }

    posOrderNode(node){
        if(node !== null){
            this.posOrderNode(node.esquerda)
            this.posOrderNode(node.direita)
        }
    }

}