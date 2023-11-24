import { useEffect, useState } from "react";
import ItemList from '../../components/item/ItemList';
import { getProduct } from "../../components/ListProduct";
import Jumbotroom from "../../components/jumbatroon/Jumbotroom";

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
      <Jumbotroom />
      <div className="my-5">
        <ItemList product={disneyProducts} />
      </div>
    </div>
  );
};

export default Disney;
