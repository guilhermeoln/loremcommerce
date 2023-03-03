export default interface IProduto {
    id: string
    imagem: string
    nome: string
    categoria: string
    tamanhos: string[]
    valor: number
    destaque: boolean
}