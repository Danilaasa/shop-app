import { configureStore } from "@reduxjs/toolkit";
import BasketProductReducer from './BasketProducts/BasketProductsSlice';


export const store = configureStore({
    reducer: {
        basket: BasketProductReducer
    },
})

export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']