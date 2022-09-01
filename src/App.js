import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar';
import { calculateTotal } from './features/cartSlice';

const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(store => store.cart)

  useEffect(() => {
    dispatch(calculateTotal())
  }, [dispatch, cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;