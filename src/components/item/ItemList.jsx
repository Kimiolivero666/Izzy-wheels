/* eslint-disable react/prop-types */

import Item from './Item'
import './itemList.css'

const ItemList = ({ product }) => {
    return (
        <div className="ItemList text-center">
        
                    {product.map((prod) => <Item key={prod.id} {...prod} />)}
            
        </div>
    )
}

export default ItemList