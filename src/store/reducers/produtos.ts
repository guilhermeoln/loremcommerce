import { v4 as uuid } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import IProduto from '../../interfaces/produto';


const initialState: IProduto[] = [
    {
        id: uuid(),
        imagem: 'https://www.pngplay.com/wp-content/uploads/12/T-Shirt-Transparent-Clip-Art-Image.png',
        nome: 'T-SHIRT LOREM IPSUM',
        categoria: 'camisetas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 110,
        destaque: true
    },
    {
        id: uuid(),
        imagem: 'https://images.tcdn.com.br/img/img_prod/473150/bermuda_tupode_994_chino_preto_9281_1_bdc2d246ba9ecc061c758c3e38a3296e.png',
        nome: 'BERMUDA LOREM IPSUM',
        categoria: 'bermudas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 60,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://images.tcdn.com.br/img/img_prod/473150/bermuda_tupode_994_chino_preto_9281_1_bdc2d246ba9ecc061c758c3e38a3296e.png',
        nome: 'BERMUDA LOREM IPSUM',
        categoria: 'bermudas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 60,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://www.pngplay.com/wp-content/uploads/12/T-Shirt-Transparent-Clip-Art-Image.png',
        nome: 'T-SHIRT LOREM IPSUM',
        categoria: 'camisetas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 129,
        destaque: true
    },
    {
        id: uuid(),
        imagem: 'https://www.pngplay.com/wp-content/uploads/12/T-Shirt-Transparent-Clip-Art-Image.png',
        nome: 'T-SHIRT LOREM IPSUM',
        categoria: 'camisetas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 129,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://www.pngplay.com/wp-content/uploads/12/T-Shirt-Transparent-Clip-Art-Image.png',
        nome: 'T-SHIRT LOREM IPSUM',
        categoria: 'camisetas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 129,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://www.pngplay.com/wp-content/uploads/12/T-Shirt-Transparent-Clip-Art-Image.png',
        nome: 'T-SHIRT LOREM IPSUM',
        categoria: 'camisetas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 100,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://images.tcdn.com.br/img/img_prod/473150/bermuda_tupode_994_chino_preto_9281_1_bdc2d246ba9ecc061c758c3e38a3296e.png',
        nome: 'BERMUDA LOREM IPSUM',
        categoria: 'bermudas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 60,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://images.tcdn.com.br/img/img_prod/473150/bermuda_tupode_994_chino_preto_9281_1_bdc2d246ba9ecc061c758c3e38a3296e.png',
        nome: 'BERMUDA LOREM IPSUM',
        categoria: 'bermudas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 65,
        destaque: true
    },
    {
        id: uuid(),
        imagem: 'https://images.tcdn.com.br/img/img_prod/473150/bermuda_tupode_994_chino_preto_9281_1_bdc2d246ba9ecc061c758c3e38a3296e.png',
        nome: 'BERMUDA LOREM IPSUM',
        categoria: 'bermudas',
        tamanhos: [
            'P',
            'M',
            'G'
        ],
        valor: 77,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/dropshop/catalog/ultraboost-4-0/fundo-branco/ultra-preto-sola-branca-2.jpg',
        nome: 'SAPATO LOREM IPSUM',
        categoria: 'calçados',
        tamanhos: [
            '37',
            '38',
            '39'
        ],
        valor: 120,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/dropshop/catalog/ultraboost-4-0/fundo-branco/ultra-preto-sola-branca-2.jpg',
        nome: 'SAPATO LOREM IPSUM',
        categoria: 'calçados',
        tamanhos: [
            '37',
            '38',
            '39'
        ],
        valor: 140,
        destaque: false
    },
    {
        id: uuid(),
        imagem: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/dropshop/catalog/ultraboost-4-0/fundo-branco/ultra-preto-sola-branca-2.jpg',
        nome: 'SAPATO LOREM IPSUM',
        categoria: 'calçados',
        tamanhos: [
            '37',
            '38',
            '39'
        ],
        valor: 210,
        destaque: true
    }
]


const produtosSlice = createSlice({
    name: 'produtos',
    initialState,
    reducers: {
    }
})


export default produtosSlice.reducer;