import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../components/ListProduct";
import ItemList from "../../components/item/ItemList";
import { Container } from "react-bootstrap";
import './store.css'


const Store = () => {
    const [storeProducts, setStoreProducts] = useState([]);


    useEffect(() => {
        getProduct()
            .then((products) => {
                setStoreProducts(products)
            })
            .catch((error) => {
                console.error("Error fetching Store products:", error);
            });
    }, []);


    return (
        <div className="Store">
            
            
            <Container>
                <div className="title-store text-center">
                    <h1>THE COLLECTION</h1>
                    <p>Masterpieces for your wheels
                        designed with love by top artists</p>
                </div>
            </Container>
            <div className="my-5">
                <ItemList product={storeProducts} />
            </div>
        </div>
    )
}

export default Store