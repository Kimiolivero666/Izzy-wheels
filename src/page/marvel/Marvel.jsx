import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../components/ListProduct";
import ItemList from "../../components/item/ItemList";
import Jumbotroom from "../../components/jumbatroon/Jumbotroom";


const Marvel = () => {
    const [marvelProducts, setMarvelProducts] = useState([]);
    useEffect(() => {
        getProduct()
            .then((products) => {
                const marvelProductsFiltered = products.filter(prod => prod.category === 'marvel');
                setMarvelProducts(marvelProductsFiltered);
            })
            .catch((error) => {
                console.error("Error fetching Marvel products:", error);
            });
    }, []);

    return (
        <div className='Marvel'>
            <Jumbotroom />
            <div className="my-5">
                <ItemList product={marvelProducts} />
            </div>
        </div>
    )
}

export default Marvel