/* eslint-disable react/no-unescaped-entities */
import './help.css'
import b953 from '../../assets/help/b953.webp'
import Guide from '../../assets/help/Guide.webp'
import gte from '../../assets/help/gte.webp'
import { BrownBotton } from '../../components/brownBotton/BrownBotton'
import { Col, Container, Row } from 'react-bootstrap'

const Help = () => {
    
    return (
        <div className='Help'>
            <div className="help-container">
                <img src={b953} alt="" />
                
                <div className='box-container'>
                    <Container>
                    <Row>
                        <Col md={2} className='bgr'></Col>
                        <Col md={8} bg-danger>
                    <div className="container-text-help text-center">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <div className="box-text-help">
                            <h4>HOW DO I KNOW WHAT SIZE WHEEL COVER I NEED?</h4>
                            <p>To measure what size wheel cover you need: use a measuring tape to measure the diameter of the area inside the hand rim on the wheel. Generally, the measurement is between 45cm - 50cm on a manual wheelchair. See the diagram below with the area marked with a red dotted line and arrows.</p>
                            <div className="box-img">
                                <img src={Guide} alt="" />
                            </div>

                            <h4>HOW DO I FIT THE WHEEL COVERS ONTO MY WHEELCHAIR?</h4>
                            <p>Our wheel covers are flat round disks and have 3 velcro straps at the back of them to easily secure them directly to the spokes of your wheels. Please watch our demo video below.</p>

                            <h4>DO YOU MAKE WHEEL COVERS FOR POWER CHAIRS AND TREKINETIC POWER GTE?</h4>
                            <p>Our wheel covers are generally made to fit on manual wheelchairs. However, we can make smaller wheel covers and custom sizes to fit some other types of wheels. Please see sample below. If you are interested in this service contact our designers at hello@izzywheels.com</p>
                            <div className="box-img">
                                <img src={gte} alt="" />
                            </div>

                            <h4>ARE IZZY WHEELS WATER-PROOF & WHAT ARE THEY MADE OF?</h4>
                            <p>As we are an Irish company we understand harsh rainy weather. All Izzy Wheels are made of high-quality 3mm plastic which is strong, lightweight, water-proof, and fade-proof. There are velcro straps at the back to fasten the wheel covers directly to the spokes on your wheels.</p>

                            <h4>CAN I PRINT MY OWN DESIGN ONTO WHEEL COVERS?</h4>
                            <p>Yes! If you have a design that you would like printed we can provide that service. You must send us the design in print-ready quality in PDF format. The dimensions are 500mm with a 135mm cut out in the center. We can not produce the design if you have used copyrighted characters unless you have been given formal permission by the licensor. Here is the link to order. Please message us before ordering at hello@izzywheels.com</p>

                            <h4>DO YOU SHIP WORLDWIDE?</h4>
                            <p>Yes, of course! We will ship your fabulous Izzy Wheels right to your door and provide you with a tracking link so you can follow your parcel's journey.</p>

                            <h4>HOW MUCH DOES SHIPPING COST?</h4>
                            <p>Ireland €12, The United Kingdom €22, Europe €25, USA €35, Canada €35, Australia €40, New Zealand €50, and the rest of the world €50. FREE worldwide shipping if you order more than one pair of wheel covers. The shipping cost will be added at the checkout when you are ordering. Shipping is provided by DHL and each order will come with a tracking link when the shipment is on the way. Shipments to countries outside of the EU may be subject to customs fees. Luxury gift wrapping is included with every order.</p>

                            <h4>HOW LONG DOES SHIPPING TAKE?</h4>
                            <p>Orders are generally shipped 10 business days from when you place your order. Each pair of Izzy Wheels are made to order especially for each person. As soon as your wheel covers are ready they are beautifully gift wrapped and sent by express post. Please note that during the holiday season, delivery times may take slightly longer.</p>

                            <h4>WHAT IS THE RETURNS POLICY?</h4>
                            <p>Refunds and exchanges will be given up to 14 days from when the product was received provided the wheel covers are in their perfect and undamaged condition. The buyer is responsible for the products until they are returned to us safely therefore we recommend requesting a tracking number from your postal provider. Custom sizes or customized designs cannot be exchanged or refunded. For more information on returns visit our Delivery & Returns page.</p>


                            <h4>I AM AN ARTIST, CAN I CREATE A DESIGN?</h4>
                            <p>We invite artists and designers from around the world to send us their portfolios via email. We choose to work with artists and brands who we feel fit the Izzy Wheels style, message, and ethos. Please visit our Collab With Us page to apply.
                            </p>

                            <h4>DO YOU OFFER GIFT VOUCHERS?</h4>
                            <p>Yes, we do! Gift vouchers can be used to purchase any pair of wheel covers from our collection. You will receive a personalized gift voucher via email with a gift code. Click here for more information.</p>

                            <div className="brown-btn mb-5 pb-5">
                                <BrownBotton titulo='SHOP NOW' />
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col md={2} className='bgr'></Col>
                    </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Help