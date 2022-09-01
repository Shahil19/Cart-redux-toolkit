import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { openModal } from '../features/modalSlice'
import CartItem from './CartItem'

const CartContainer = () => {
    const dispatch = useDispatch()

    const { amount, total, cartItems } = useSelector(store => store.cart)

    const renderedCartItems = cartItems.map(item => (
        <CartItem key={item.id} {...item} />
    ))

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {renderedCartItems}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>Total <span>${total.toFixed(2)}</span></h4>
                </div>
                <button
                    onClick={() => dispatch(openModal())}
                    className="btn clear-btn">Clear Cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
