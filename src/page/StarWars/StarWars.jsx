import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../components/ListProduct";
import Jumbotroom from "../../components/jumbatroon/Jumbotroom";
import ItemList from "../../components/item/ItemList";


const StarWars = () => {
    const [starWarsProducts, setStarWarsProducts] = useState([]);
    useEffect(() => {
        getProduct()
            .then((products) => {
                const marvelProductsFiltered = products.filter(prod => prod.category === 'starWars');
                setStarWarsProducts(marvelProductsFiltered);
            })
            .catch((error) => {
                console.error("Error fetching Star Wars products:", error);
            });
    }, []);

    return (
        <div className="StarWars">
            <Jumbotroom />
            <div className="my-5">
                <ItemList product={starWarsProducts} />
            </div>
        </div>
    )
}

export default StarWars