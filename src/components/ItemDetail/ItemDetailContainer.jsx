import { useEffect, useState } from "react";
import { getProductById } from "../ListProduct";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams(); 
    

    useEffect(() => {
        getProductById(itemId)
            .then((resp) => {
                setProduct(resp);
            })
            .catch((error) => {
                // Manejar errores aquí
                console.error("Error fetching data:", error);
            });
    }, [itemId]);


    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
