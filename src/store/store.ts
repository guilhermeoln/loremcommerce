import { configureStore } from '@reduxjs/toolkit';
import produtosSlice from './reducers/produtos';
import carrinhoSlice from './reducers/carrinho';


const store = configureStore({
    reducer: {
        produtos: produtosSlice,
        carrinho: carrinhoSlice
    }
})




export default store;