/* eslint-disable react/prop-types */
import { Col, Container, Row } from 'react-bootstrap'
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'
import Acordion from '../acordeon/Acordion'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'



const ItemDetail = ({ img, title, price, stock, id, }) => {
    const [diameter, setDiameter] = useState('');
    const [message, setMessage] = useState('');

    const { addItem } = useContext(CartContext);



  
    const handleDiameterChange = (selectedDiameter) => {
      setDiameter(selectedDiameter);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const onAdd = (quantity) => {
      if (diameter && message) {
        console.log({ title, quantity, diameter, message });
        // Aquí puedes redirigir al usuario al carrito si el diámetro y el mensaje están presentes
      } else {
        window.alert('Por favor, completa el diámetro y el mensaje antes de agregar al carrito.');
      }
      const item = {
        id: id,
        title: title,
        price: price,
        img: img
      };
      addItem(item, quantity);
    };
  



    return (
        <div className="ItemDetail">
            <Container>
                <Row>

                    <Col md={7} className='ItemDetail-left text-center'>
                        <img className=" img-detalle-producto" src={img} alt="" />
                    </Col>
                    <Col md={4} className='ItemDetail-right'>

                        <div className='box'>
                            <h3><strong>{title}</strong></h3>
                            <p >€ {price}</p>
                            <h6>Size (Diameter)</h6>
                            <Acordion handleDiameterChange={handleDiameterChange}/>
                            <h6 className='mt-3'>Who are the wheel covers for? (Their name so we can write them a little note)</h6>
                            <div className="form-input">
                                <textarea name="message" cols="38" rows="5" placeholder="Message" onChange={handleMessageChange}></textarea>
                            </div>
                            <div className="mb-5">
                                <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                            </div>
                        </div>

                    </Col>
                    <Col lg={1}></Col>
                </Row>
                <Row>
                    <Col md={5}>

                        <div className='box-text my-5'>
                            <h5 className='mb-5'>Disney x Izzy Wheels</h5>

                            <p>These wheelchair wheel covers come as a pair, one for each wheel. This stylish product is lightweight, waterproof, and scratch-proof. There are 3 velcro straps at the back of each to easily fasten the wheel covers directly to the spokes of the wheel of any manual wheelchair. </p>

                            <p>FREE worldwide shipping if you order more than one pair of wheel covers.</p>

                            <p>10% of proceeds from all Disney-themed wheelchair covers will be donated to Whizz-Kidz, a charity focused on transforming the lives of children with disabilities across the UK. </p>

                            <p>If you require more information or a different size not listed in the dropdown menu please contact us on hello@izzywheels.com or visit our Help and FAQ page.</p>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemDetail