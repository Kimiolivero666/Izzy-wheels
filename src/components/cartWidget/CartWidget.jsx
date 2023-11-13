import { GiShoppingBag } from 'react-icons/gi';
import './cartWidget.css'

const CartWidget = () => {
  return (
    <div className='conteiner-bag'>
        <GiShoppingBag className='bag'/>
        <p className='number'>0</p>
    </div>
  )
}

export default CartWidget