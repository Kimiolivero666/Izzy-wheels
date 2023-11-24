/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './item.css'

const Item = ({id, title, price, img }) => {

    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };


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
                     <Link to={`/item/${id}`} onClick={scrollToTop}><button>Quick View</button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item