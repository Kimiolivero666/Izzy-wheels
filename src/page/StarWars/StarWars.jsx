import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../components/ListProduct";
import ItemList from "../../components/item/ItemList";
import './starwars.css'
import Encabezado from "../../components/encabezado/Encabezado";
import logoIzzy from '../../assets/logo-footer.png'
import sectionStarWars from '../../assets/encabezado/sectionStarWars.webp.jpg'


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
            <div className="encabezado-starWars">
                <Encabezado imgppal={sectionStarWars}img2={logoIzzy} text="Izzy Wheels are proud to have an incredible community of
Spokes People from all over the world.  Each person's wheel covers express their personality and individuality."/>
            </div>
            <div className="my-5">
                <ItemList product={starWarsProducts} />
            </div>
        </div>
    )
}

export default StarWars