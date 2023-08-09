import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartStateProps {
    value: Array<any>,
    total: number
}

const initialState: CartStateProps = {
    value: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }: PayloadAction<any>) => {
            state.value = [...state.value, payload]
            state.value.map((element) => {
                if (element === payload) {
                    const filteredArray = state.value.filter((element) => element.id !== payload.id);
                    state.value = [...filteredArray, { ...element, quantity: element.quantity++ }]
                }

            })

        },

        removeFromCart: (state, { payload }: PayloadAction<any>) => {
            const newCart = state.value.filter((element) => element.id !== payload.id)
            state.value = newCart;
        },
        calculateTotal: (state) => {
            const arrayOfPrices = state.value.map((element) => parseFloat(element.price) * parseInt(element.quantity))
            state.total = arrayOfPrices.reduce((acc, cum) => acc + cum, 0)
        },
        increaseQuantity: (state, { payload, }: PayloadAction<any>) => {
            const currentElement = state.value.find((element) => element.id === payload.id);
            const newArray = state.value.filter((element) => element.id !== payload.id);
            state.value = [...newArray, { ...currentElement, quantity: currentElement.quantity + 1 }];
        }
    },
})

export const { addToCart, removeFromCart, calculateTotal } = cartSlice.actions

export default cartSlice.reducer