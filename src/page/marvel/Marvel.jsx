import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../components/ListProduct";
import ItemList from "../../components/item/ItemList";
import Encabezado from "../../components/encabezado/Encabezado";
import sectionMarvel from '../../assets/encabezado/sectionMarvel.webp'
import logoIzzy from '../../assets/logo-footer.png'
import './marvel.css'


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
            <div className="encabezado-marvel">
                <Encabezado imgppal={sectionMarvel} img2={logoIzzy} text="0% of proceeds from all Marvel-themed wheelchair covers will be donated to The Make A Wish Foundation." />
            </div>
            <div className="my-5">
                <ItemList product={marvelProducts} />
            </div>
        </div>
    )
}

export default Marvel