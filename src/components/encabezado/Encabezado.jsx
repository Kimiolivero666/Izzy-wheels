/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from 'react-bootstrap'
import './encabezado.css'
import disneyBanner from '../../assets/disney/sectionDisney.webp'
import disneyLogo from '../../assets/disney/Disney-x-Izzy---Web-Logo.webp'

const Encabezado = () => {
    return (


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
                            <img src={disneyLogo} alt="" />
                            <div className="box-encabezado-der-p mb-5">
                                <p>SAY HELLO TO DISNEY X IZZY! THIS MAGICAL COLLECTION FEATURES DISNEY'S MUCH-LOVED CHARACTERS. THE RANGE
                                    INCLUDES DESIGNS FEATURING THE LIKES OF FAN FAVOURITES, ANNA & ELSA FROM DISNEY'S FROZEN, MICKEY AND MINNIE
                                    MOUSE, MARVEL'S SPIDER-MAN, AND STAR WARS!</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Encabezado