/* eslint-disable react/prop-types */
import { useState } from 'react'
import './ItemCount.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

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
    }


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
                <button onClick={handleAddToCart} disabled={!stock}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ItemCount