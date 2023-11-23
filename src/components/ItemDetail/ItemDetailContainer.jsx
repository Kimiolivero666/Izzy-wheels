import { useEffect, useState } from "react";
import { getProductById } from "../ListProduct";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById('1')
            .then((resp) => {
                setProduct(resp);
            });
    }, []);



    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    );
};

export default ItemDetailContainer;
