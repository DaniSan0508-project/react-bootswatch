const PRODUTOS = '_PRODUTOS';

export function erroValidacao(errors){
    this.errors = errors
}

export default class ProdutoService{

    validar = (produto) =>{
        const errors = []

            if(!produto.nome){
                errors.push('O campo nome é obrigatório')
            }

            if(!produto.sku){
                errors.push('O campo sku é obrigatório')
            }

            if(!produto.preco || produto.preco <= 0){
                errors.push('O campo preço é obrigatório e nao pode ser (0)')
            }

            if(!produto.fornecedor) {
                errors.push('O campo fornecedor é obrigatório')
            }
        if(errors.length > 0){
            throw new erroValidacao(errors)
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        if(!produtos){
            return []
        }
        return JSON.parse(produtos)
    }

    obterIndex = (sku) => {
        let index = null
        this.obterProdutos().forEach((produto,i)=>{
            if(produto.sku === sku){
                index = i
            }
        })
        return index
    }

    salvar = (produto) => {
        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }
        let index = this.obterIndex(produto.sku)
        if(index === null){
            produtos.push(produto)
        }
        produtos[index] = produto

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}