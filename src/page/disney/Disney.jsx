/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ItemList from '../../components/item/ItemList';
import { getProduct } from "../../components/ListProduct";
import './disney.css'
import Encabezado from "../../components/encabezado/Encabezado";
import disneyLogo from '../../assets/encabezado/Disney-x-Izzy---Web-Logo.webp'
import disneyBanner from '../../assets/encabezado/sectionDisney.webp'



const Disney = () => {
  const [disneyProducts, setDisneyProducts] = useState([]);

  useEffect(() => {
    getProduct()
      .then((products) => {
        const disneyProductsFiltered = products.filter(prod => prod.category === 'disney');
        setDisneyProducts(disneyProductsFiltered);
      })
      .catch((error) => {
        console.error("Error fetching Disney products:", error);
      });
  }, []);

  return (
    <div className='Disney'>
      <div className="encabezado-disney">
        <Encabezado imgppal={disneyBanner} img2={disneyLogo} text="SAY HELLO TO DISNEY X IZZY! THIS MAGICAL COLLECTION FEATURES DISNEY'S MUCH-LOVED CHARACTERS. THE RANGE INCLUDES DESIGNS FEATURING THE LIKES OF FAN FAVOURITES, ANNA & ELSA FROM DISNEY'S FROZEN, MICKEY AND MINNIE MOUSE, MARVEL'S SPIDER-MAN, AND STAR WARS!"/>
      </div>

      <div className="my-5  product">
        <ItemList product={disneyProducts} />
      </div>

    </div>
  );
};

export default Disney;
