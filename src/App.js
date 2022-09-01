import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartContainer from './Components/CartContainer';
import Modal from './Components/Modal';
import Navbar from './Components/Navbar';
import { calculateTotal } from './features/cartSlice';

const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(store => store.cart)
  const { isOpen } = useSelector(store => store.modal)

  console.log(isOpen);
  useEffect(() => {
    dispatch(calculateTotal())
  }, [dispatch, cartItems])

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;