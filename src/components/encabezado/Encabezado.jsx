/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from 'react-bootstrap'
import './encabezado.css'


const Encabezado = (props) => {
    return (


        <div className="encabezado">
            <Row className='no-gutters'>
                <Col md={7}>
                    <div className="encabezado-izq">
                        <img src={props.imgppal} alt="" />
                    </div>
                </Col>
                <Col md={5}>
                    <div className="encabezado-der">
                        <div className="box-encabezado-der text-center">
                            <img src={props.img2} alt="" />
                            <div className="box-encabezado-der-p mb-5">
                                <p>{props.text}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Encabezado