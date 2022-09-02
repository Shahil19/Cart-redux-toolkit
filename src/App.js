import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartContainer from './Components/CartContainer';
import Modal from './Components/Modal';
import Navbar from './Components/Navbar';
import { calculateTotal, getCartItems } from './features/cartSlice';

const App = () => {
  const dispatch = useDispatch()
  const { cartItems, isLoading } = useSelector(store => store.cart)
  const { isOpen } = useSelector(store => store.modal)

  useEffect(() => {
    dispatch(calculateTotal())
  }, [dispatch, cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])


  if (isLoading) {
    return (
      <div className='loading'>
        <h3>Loading...</h3>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;