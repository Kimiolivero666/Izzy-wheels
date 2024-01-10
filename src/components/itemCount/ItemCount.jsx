/* eslint-disable react/prop-types */
import { useState } from 'react'
import './itemCount.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ItemCount = ({ initial, stock, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    const handleAddToCart = () => {
        onAdd(quantity)
        scrollToTop ()
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };



    return (
        <div className='ItemCount'>
            <div className="title-itemCount">
                <h3>Quantity</h3>
            </div>
            <div className="quantity">
                <p>{quantity}</p>
                <div className="botton-inc-dec">
                    <button><MdKeyboardArrowUp onClick={increment} /> </button>
                    <button><MdKeyboardArrowDown onClick={decrement} /></button>
                </div>
            </div>
            <div className="btn-onAdd">
                <Link to={'/cart'}>
                <button  onClick={handleAddToCart} disabled={!stock}>ADD TO CART</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemCount