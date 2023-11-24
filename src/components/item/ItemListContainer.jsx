import { useState, useEffect } from "react"
import { getProduct, getProductByCategory } from "../ListProduct"

import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const { categoryId } = useParams() 

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProduct

        asyncFunc(categoryId) 
            .then((resp) => {
                setProduct(resp)
            })
            .catch((error) => {
                
                console.error("Error fetching data:", error)
            })

    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <ItemListContainer product={product} />
        </div>
    )
}

export default ItemListContainer
