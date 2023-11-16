
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
    <div className="brown-btn">
    <BrownBotton titulo='SHOP NOW'/>
    </div>
  </Col>
  <Col xs={12} md={4} className='text-center section-banner d-none d-md-block'>
    <img src={der} alt="" />
  </Col>
</Row>
</Container>
 
    </div>
  );
};

export default Home;
