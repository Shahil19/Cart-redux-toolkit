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
        removeItem: {
            reducer(state, action) {
                const itemId = action.payload.itemId
                state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
            },
            prepare(id) {
                return {
                    payload: {
                        itemId: id
                    }
                }
            }
        }
    }
})
// console.log(cartSlice);
export const { clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer