//import { readFileSync, writeFileSync } from "fs"
const fs = require('fs')

class Node{
    constructor(soma, filho0, filho1){
        this.valor = soma
        this.esquerda = filho0
        this.direita = filho1
    }
}

export class Huffman{

    constructor(arquivo){
        
        //Armazenando caminho do arquivo
        this.StringOriginal = arquivo
        //Leitura do arquivo normal
        this.arquivo = this.leitura(this.StringOriginal)
        //Contador
        this.contagem = this.contador(this.arquivo)
        //Construção
        this.mapeamento = this.Arvore(this.contagem)
        //Compactação
        this.arquivoComprimido = this.compressor(this.arquivo, this.StringOriginal)
        //Descompactação
        this.arquivoDescomprimido = this.descompressor(this.mapeamento, this.arquivoComprimido, this.arquivo)
    }

    converterTabela(node, table = [], code = ''){
        if(node != null){
            if(node.chars){
                table[node.chars] = code
                return table
            }
            else{
                table = this.converterTabela(node.esquerda, table, code+'0')
                table = this.converterTabela(node.direita, table, code+'1')
            }
        }
        return table
    }

    leitura(arquivo){
        return fs.readFileSync(arquivo).toString()
    }

    contador(arquivo){
        let file = arquivo

        //Contagem
        let char = []

        for(let chars of file){
            if(!char[chars]){
                char[chars] = 0
            }
            char[chars]++
        }

        console.log(file)
        console.log(char)

        return char
    }

    Arvore(contagem){
        //Construção da árvore
        let char = Object.entries(contagem)

        let arvore = char.map(c => ({
            chars: c[0],
            valor: c[1]
        }))
 
        while(arvore.length !== 1){
            arvore = arvore.sort((a, b) => b.valor-a.valor)
 
            let filho0 = arvore.pop()
            let filho1 = arvore.pop()
 
            arvore.push(new Node(filho0.valor+filho1.valor, filho0, filho1))
        }
        arvore = arvore[0]
 
        console.log(arvore)

        return arvore
    }

    compressor(arquivo, caminho){

        //Compactação
        let tabela = this.converterTabela(this.mapeamento)

        //console.log(tabela)

        let convertido = ''

        for(let char of arquivo){
            convertido += tabela[char]
        }
    
        fs.writeFileSync(caminho+'.zip', convertido)

        return caminho+'.zip'
    }

    //Em falta
    descompressor(arvore, str){

        let file = this.leitura(str)
        let tabela = this.converterTabela(arvore)
        let conversao = ''

        for(let i in str){
          conversao += tabela[i][0]
        }
        
        console.log(file)
        console.log(conversao)
        fs.writeFileSync(str+'.txt', conversao)
    }

}