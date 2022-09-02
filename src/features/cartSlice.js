import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cartItems: [],
    amount: 1,
    total: 0,
    isLoading: true,
};

const url = "https://course-api.com/react-useReducer-cart-project";

/* export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
}) */

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

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
            cartItem.amount -= 1
        },

        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach(item => {
                amount = amount + item.amount
                total = total + (item.price * item.amount)
            })

            state.amount = amount
            state.total = total
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: state => {
            state.isLoading = false
        }
    }
})
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions
export default cartSlice.reducer