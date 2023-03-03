export default interface IProdutoCarrinho {
    id: string
    imagem: string
    nome: string
    categoria: string
    tamanhos: string[]
    valor: number
    quantidadeCompra: number
}