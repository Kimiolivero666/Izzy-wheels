/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ItemList from '../../components/item/ItemList';
import { getProduct } from "../../components/ListProduct";
import { Col, Row } from "react-bootstrap";
import disneyBanner from '../../assets/disney/sectionDisney.webp'
import disneyLogo from '../../assets/disney/Disney-x-Izzy---Web-Logo.webp'
import './disney.css'

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
      <div className="encabezado">
        <Row className='no-gutters'>
          <Col md={7}>
            <div className="encabezado-izq">
              <img src={disneyBanner} alt="" />
            </div>
          </Col>
          <Col md={5}>
            <div className="encabezado-der">
              <div className="box-encabezado-der text-center">
                <img src={disneyLogo} alt=""/>
                <div className="box-encabezado-der-p mb-5">
                  <p>SAY HELLO TO DISNEY X IZZY! THIS MAGICAL COLLECTION FEATURES DISNEY'S MUCH-LOVED CHARACTERS. THE RANGE INCLUDES DESIGNS FEATURING THE LIKES OF FAN FAVOURITES, ANNA & ELSA FROM DISNEY'S FROZEN, MICKEY AND MINNIE MOUSE, MARVEL'S SPIDER-MAN, AND STAR WARS!</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="my-5">
        <ItemList product={disneyProducts} />
      </div>
    </div>
  );
};

export default Disney;
