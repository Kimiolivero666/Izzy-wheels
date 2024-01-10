import { GiShoppingBag } from 'react-icons/gi';
import './cartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { TotalQuantity} = useContext(CartContext);
  return (
    <div className='conteiner-bag'>
           
      <Link to='/cart'><GiShoppingBag className='bag'/></Link>
      {TotalQuantity() > 0 && (
        <p className='number'>{TotalQuantity()}</p>
      ) }
    </div>
  )
}

export default CartWidget