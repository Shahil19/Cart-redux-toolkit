import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartContainer = () => {
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
        </section>
    )
}

export default CartContainer