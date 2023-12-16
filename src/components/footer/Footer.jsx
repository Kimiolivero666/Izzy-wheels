/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import ListFooter from '../ListFooter/ListFooter';
import logoFooter from '../../assets/logo-footer.png'


const Footer = () => {
    return (
        <div className='Footer'>
            <Container>
                <Row>
                    <Col lg={6} className="text-center d-none d-lg-block">
                        <div className="titulo-footer">
                            <h2>IF YOU CAN'T STAND UP, STAND OUT!</h2>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="redes-sociales d-flex">
                            <h2>FOLLOW US ON</h2>
                            <div className="icons">
                                <BiLogoFacebook className='logos' />
                                <AiOutlineInstagram className='logos' />
                                <AiOutlineTwitter className='logos' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="section-footer pt-5">
                <Container>
                    <Row className='mt-5'>
                        <Col lg={2}>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <ListFooter button='SHOP' title1='WHEEL COVERS' title2='GIFT VOUCHERS' />
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <ListFooter button='ABOUT' title1='OUR STORY' title2='PUBLIC SPEAKING' />
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <ListFooter button='HELP' title1='CONTACT US' title2='RETURNS' title3='HELP & FAQs' />
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <ListFooter button='COMPANY' title1='SUBSCRIBE' title2='WORK WITH US' title3='PRESS' />
                        </Col>
                    </Row>
                    <Row className='mt-5 py-5 text-center logo-footer'>
                        <Col>
                            <img src={logoFooter} alt="" />
                        </Col>
                    </Row>

                    <Row className='py-5 text-center'>
                        <Col className='encabezado-final'>
                            <p>©2023 Izzy Wheels</p>
                            <p>Designer Wheel Covers</p>
                            <p>If You Can't Stand Up, Stand Out!</p>
                            <p>All Rights Reserved</p>
                        </Col>
                    </Row>

                </Container>
            </div>

        </div>
    )
}

export default Footer