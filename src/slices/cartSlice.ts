import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

interface CartStateProps {
  value: Array<any>;
  total: number;
}

const initialState: CartStateProps = {
  value: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<any>) => {
      state.value = [...state.value, payload];
      state.value.map((element) => {
        if (_.isEqual(element, payload)) {
          const filteredArray = state.value.filter(
            (element) => element.id !== payload.id
          );
          state.value = [
            ...filteredArray,
            { ...element, quantity: element.quantity + 1 },
          ];
        }
      });
    },

    removeFromCart: (state, { payload }: PayloadAction<any>) => {
      const newCart = state.value.filter(
        (element) => element.id !== payload.id
      );
      state.value = newCart;
    },
    calculateTotal: (state) => {
      const arrayOfPrices = state.value.map(
        (element) => parseFloat(element.price) * parseInt(element.quantity)
      );
      state.total = arrayOfPrices.reduce((acc, cum) => acc + cum, 0);
    },
    increaseQuantity: (state, { payload }: PayloadAction<any>) => {
      const clonedArray = _.cloneDeep(state.value);
      clonedArray.map((element) => {
        if (_.isEqual(element, payload)) {
          const filteredArray = clonedArray.filter(
            (element) => element.id !== payload.id
          );
          state.value = [
            ...filteredArray,
            { ...element, quantity: element.quantity + 1 },
          ];
        }
      });
    },
    decreaseQuantity: (state, { payload }: PayloadAction<any>) => {
      const clonedArray = _.cloneDeep(state.value);
      clonedArray.map((element) => {
        if (_.isEqual(element, payload)) {
          const filteredArray = clonedArray.filter(
            (element) => element.id !== payload.id
          );
          state.value = [
            ...filteredArray,
            { ...element, quantity: --element.quantity },
          ];
          if (element.quantity <= 0) {
            console.log(element.quantity);
            state.value = [...filteredArray];
          }
        }
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  calculateTotal,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
