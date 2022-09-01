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
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id)
            cartItem.amount += 1
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id)
            console.log(cartItem);
            cartItem.amount -= 1
        },
    }
})
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions
export default cartSlice.reducer