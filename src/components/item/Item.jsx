/* eslint-disable react/prop-types */
import './item.css'

const Item = ({ title, price, img }) => {
    return (
        <div className='Item'>
            <div className="box-card">
                <div className="item-img text-center">
                    <img src={img} alt="" />
                </div>
                <div className="item-card text-center">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-price pt-3">
                        <h4>€ {price}</h4>
                    </div>
                    <div className="button">
                        <button>Quick View</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item