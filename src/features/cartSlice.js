import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
            // return state = { cartItems: [], amount: 0 }
        },
    }
})
// console.log(cartSlice);
export const { clearCart } = cartSlice.actions
export default cartSlice.reducer