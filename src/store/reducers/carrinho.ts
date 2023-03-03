import { createSlice } from "@reduxjs/toolkit";
import IProdutoCarrinho from "../../interfaces/produtoCarrinho";



const initialState: IProdutoCarrinho[] | [] = [];


const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            let searchProduct = state.some(productInCart => productInCart?.id === payload.id);

            if (!searchProduct) {
                alert('Produto adicionado com sucesso!')

                return [
                    ...state,
                    {
                        ...payload,
                        quantidadeCompra: 1
                    }
                ]
            }
        },
        removeProduct: (state, { payload }) => {
            return state.filter((produtoCarrinho) => produtoCarrinho.id != payload.id);
        },
        modificarQuantidade: (state, { payload }) => {
            state = state.map((produtoCarrinho) => {
                if(produtoCarrinho.id === payload.id) produtoCarrinho.quantidadeCompra += payload.quantidade
                return produtoCarrinho
            })
        }
    }
})

export const { addToCart, removeProduct, modificarQuantidade } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;