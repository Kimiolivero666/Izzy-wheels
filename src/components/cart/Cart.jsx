import { Col, Container, Row } from 'react-bootstrap';
import { useContext } from "react";
import './cart.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import b953 from '../../assets/help/b953.webp'
import { IoMdClose } from "react-icons/io";
import { IoBag } from "react-icons/io5";


const Cart = () => {
  const { cart, Total, removeItem, TotalQuantity, updateItemQuantity } = useContext(CartContext);

  return (
    <div>
      <div className="cart-up">
        <img src={b953} alt="" />
      </div>

      {cart.length === 0 ? (
        <div className="no-hay-productos">
          <h1>No hay productos en el carrito</h1>
          <Link to={'/'} className="btn-no-hay-productos">Volver</Link>
        </div>
      ) : (
        <div>

          <Container>
            <Row>
              <Col lg={2}></Col>

              <Col  lg={6}>
                <div className="cart-container">
                  <h5>My cart</h5>
                  <div className="custom-hr"></div>

                  {
                    cart.map((prod) => (
                      <div key={prod.id} className='container-cart'>
                        <div className="container-cart-left d-flex my-5">
                          <img className="img-cart" src={prod.img} alt="" />

                          <div>
                            <h2 className="title-cart">{prod.title}</h2>
                            <p className="precio-unitario">€  {prod.price}</p>
                          </div>
                        </div>
                        <div className="container-cart-right  my-5">
                          <div className='updateItemQuantity'>
                            <button onClick={() => updateItemQuantity(prod.id, prod.quantity - 1)}>-</button>
                            <span>{prod.quantity}</span>
                            <button onClick={() => updateItemQuantity(prod.id, prod.quantity + 1)}>+</button>
                          </div>
                          <p className="precio-total-producto"> €  {prod.price * prod.quantity}</p>
                          <IoMdClose className="eliminar-producto" onClick={() => removeItem(prod.id)} />
                        </div>


                      </div>
                    ))
                  }

                  <div className="custom-hr"></div>
                </div>
              </Col>

              <Col lg={3}>
                {
                  <div className="precio-total">
                    <h5>Order summary</h5>
                    <div className="custom-hr"></div>
                    <div className=" total-cantidad-box">
                      <div className="total-pagar-box">
                        <h2 className="total-pagar">Total:</h2>
                        <span className="precio-total-pagar">€ {Total()}</span>
                      </div>
                      <h6 className='my-3 cantidad-producto'>Cantidad de productos: {TotalQuantity()}</h6>
                    </div>
                    <div className="custom-hr"></div>
                    <div className="mt-5 checkout">
                      <Link to='/checkout' ><button className="button-checkout">Checkout</button> </Link>
                    </div>
                    <div className="bag-checkout">
                    <IoBag />
                    <p>Secure Checkout</p>
                    </div>
                    

                  </div>
                }

              </Col>

              <Col lg={2}></Col>

            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Cart;




