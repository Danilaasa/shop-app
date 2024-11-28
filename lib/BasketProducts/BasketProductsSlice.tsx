import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/api/types';


interface InitialState {
    products: Product[]
}


const initialState:InitialState =  {
    products: []
}

const BasketProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    incremented: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
    decremented: (state, action: PayloadAction<Product['id']>) => {
        state.products = state.products.filter(product => product.id !== action.payload)
    }
  }
})

export default BasketProductsSlice.reducer
export const BasketActions = BasketProductsSlice.actions 





