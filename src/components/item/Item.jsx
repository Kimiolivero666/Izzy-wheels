/* eslint-disable react/prop-types */
import './item.css'

const Item = ({  title, price, img }) => {
    return (
        <div className='Item'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h4>€ {price}</h4>
            <button>Quick View</button>
        </div>
    )
}

export default Item