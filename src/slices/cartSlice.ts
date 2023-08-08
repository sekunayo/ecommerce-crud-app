import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    value: Array<any>
}

const initialState: CartState = {
    value: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const newCart = [...state.value, action.payload]
            state.value = newCart;
        },

        removeFromCart: (state, action: PayloadAction<any>) => {
            const newCart = state.value.filter((element) => element.id !== action.payload.id)
            state.value = newCart;
        }
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer