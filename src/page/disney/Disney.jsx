/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ItemList from '../../components/item/ItemList';
import { getProduct } from "../../components/ListProduct";
import './disney.css'
import Encabezado from "../../components/encabezado/Encabezado";


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
        <Encabezado />
      </div>

      <div className="my-5  product">
        <ItemList product={disneyProducts} />
      </div>

    </div>
  );
};

export default Disney;
