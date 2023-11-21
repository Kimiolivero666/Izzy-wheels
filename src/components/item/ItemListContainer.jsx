import { useState } from "react"
import { getProduct } from "../ListProduct"
import { useEffect } from "react"
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
            .then((resp) => {
                setProduct(resp)
            })


    }, [])

    return (
        <div className="ItemListContainer">
            <ItemList product={product} />
        </div>
    )
}

export default ItemListContainer