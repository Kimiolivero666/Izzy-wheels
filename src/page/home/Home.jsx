
import './home.css';
import Jumbotroom from '../../components/jumbatroon/Jumbotroom';
import { Col, Container, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

import SpiderManRed from '../../assets/home/Spider-Man-Red.png';
import Encantowheelchair from '../../assets/home/Encanto-wheelchair.webp';
import FindingNemo from '../../assets/home/Finding-Nemo-Izzy-Wheels.webp';
import Mickey from '../../assets/home/38036e_0c0cfd18222e4d7191da1d3ddf24f93c~mv2.gif';
import WhiteBotton from '../../components/whiteBotton/WhiteBotton';

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
    </div>
  );
};

export default Home;
