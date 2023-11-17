/* eslint-disable react/no-unescaped-entities */

import './home.css';
import Jumbotroom from '../../components/jumbatroon/Jumbotroom';
import { Col, Container, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

import SpiderManRed from '../../assets/home/Spider-Man-Red.png';
import Encantowheelchair from '../../assets/home/Encanto-wheelchair.webp';
import FindingNemo from '../../assets/home/Finding-Nemo-Izzy-Wheels.webp';
import Mickey from '../../assets/home/38036e_0c0cfd18222e4d7191da1d3ddf24f93c~mv2.gif';
import WhiteBotton from '../../components/whiteBotton/WhiteBotton';
import izq from '../../assets/home/izq.jpg';
import der from '../../assets/home/der.jpg';
import DisneyxIzzy from '../../assets/home/Disney-x-Izzy---Web-Logo.webp';
import { BrownBotton } from '../../components/brownBotton/BrownBotton';
import derecha from '../../assets/home/derecha.jpg';
import izquierda from '../../assets/home/izquierda.jpg';
import Jumbotron2 from '../../components/jumbotron2/Jumbotron2';






const Home = () => {
  return (
    <div className='Home'>
      <Jumbotroom />
      <Container>
        <Row className='mt-5 imagenes-home text-center py-5'>
          <Col lg={2}></Col>
          <Col xs={6} md={3} lg={2}>
            <Zoom top>
              <img src={SpiderManRed} alt="" className="rotating-image" />
            </Zoom>
          </Col>
          <Col xs={6} md={3} lg={2}>
            <Zoom top>
              <img src={Encantowheelchair} alt="" className="rotating-image" />
            </Zoom>
          </Col>
          <Col xs={6} md={3} lg={2}>
            <Zoom top>
              <img src={FindingNemo} alt="" className="rotating-image" />
            </Zoom>
          </Col>
          <Col xs={6} md={3} lg={2}>
            <Zoom top>
              <img src={Mickey} alt="" className="rotating-image" />
            </Zoom>
          </Col>
        </Row>
        <div className="text-center mb-5">
          <WhiteBotton titulo='show now' />
        </div>
      </Container>
      <Container>
        <Row className='no-gutters'>
          <Col xs={12} md={4} className='text-center section-banner '>
            <img src={izq} alt="" />
          </Col>
          <Col xs={12} md={4} className='text-center section-banner-centro ' >
            <img src={DisneyxIzzy} alt="" />
            <p>IZZY WHEELS HAS JOINED FORCES</p>
            <p>WITH DISNEY TO LAUNCH A MAGICAL</p>
            <p>COLLECTION OF FASHIONABLE WHEEL</p>
            <p>COVERS FOR WHEELCHAIRS INCLUDING</p>
            <p>CHARACTERS FROM DISNEY, MARVEL &</p>
            <p>STAR WARS!</p>
            <Zoom top>
              <div className="brown-btn">
                <BrownBotton titulo='SHOP NOW' />
              </div>
            </Zoom>
          </Col>
          <Col xs={12} md={4} className='text-center section-banner d-none d-md-block'>
            <img src={der} alt="" />
          </Col>
        </Row>

      </Container>
      <h2 className='text-center titulo-h2-inicio'>WE SHIP WORLDWIDE!</h2>

      <Container>
        <Row className='no-gutters'>
          <Col xs={12} md={4} className='text-center section-banner '>
            <img src={izquierda} alt="" />
          </Col>
          <Col xs={12} md={4} className='text-center section-banner-centro-2 ' >
            <h3>WHO WE ARE</h3>
            <div>
              <p >Izzy Wheels was founded by the wonderfully colourful Irish sisters Ailbhe and Izzy. Izzy has been a wheelchair user all of her life. Ailbhe created a range of stylish wheel covers for her sister's chair so that she could express her personality. They now collaborate with artists and fashion designers all over the world to transform wheelchairs into fashion statements. </p>
            </div>
            <Zoom top>
              <div className="brown-btn">
                <BrownBotton titulo='READ MORE' />
              </div>
            </Zoom>
          </Col>
          <Col xs={12} md={4} className='text-center section-banner d-none d-md-block'>
            <img src={derecha} alt="" />
          </Col>
        </Row>

      </Container>

      <h2 className='text-center titulo-h2-inicio'>WE SHIP WORLDWIDE!</h2>

      <Jumbotron2/>

    </div>
  );
};

export default Home;
