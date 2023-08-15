import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutStateProps {
    card: {
        name: string;
        cardNumber: string;
        month: string;
        year: string;
    },
}

const initialState: CheckoutStateProps = {
    card: {
        name: "",
        cardNumber: "",
        month: "",
        year: ""
    }
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: initialState,
    reducers: {
        updateCardDetails: (state, { payload }: PayloadAction<any>) => {
            state.card = payload;
        }
    }
})

export const { updateCardDetails } = checkoutSlice.actions
export default checkoutSlice.reducer