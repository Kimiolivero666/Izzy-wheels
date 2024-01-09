import './work.css'
import b953 from '../../assets/help/b953.webp'
import { Col, Container, Form, Row } from 'react-bootstrap'
import sectionStarWars from '../../assets/encabezado/sectionStarWars.webp.jpg'
import { useForm } from "react-hook-form"


const Work = () => {

  const { register, formState: { errors } } = useForm({
    mode: "onBlur"
  });

  return (
    <div className='work'>
      <div className="work-container">
        <img src={b953} alt="" />
        <div className="box-container">
          <Container>
            <Row>
              <Col md={2} className='bgr'></Col>
              <Col md={8}>
                <div className="container-text-help text-center">
                  <h2>WOULD YOU LIKE TO JOIN TEAM ?</h2>
                  <div className="box-text-help">
                    <h4>WE ARE HIRING!</h4>
                    <p>As we embark on our next phase of growth, we need a focused team to support with orders and the development of our social media channels. We create valuable products, provide unforgettable customer experiences, and collaborate with exceptional brands in order to foster a more inclusive and diverse world.</p>

                    <p>Izzy Wheels has worked with some of the biggest brands in the world including Disney, Marvel, Pixar, Star Wars, Barbie and Hello Kitty.</p>

                    <p>We are currently looking for a Dublin-based studio intern with a passion for design!</p>

                    <p>Please include your CV, portfolio or link to Instagram with examples of your work in the application below.</p>

                    <h4 className='title-left'>JOB SPEC</h4>

                    <h6>Delivering Happiness:</h6>
                    <ul>
                      <li>Fulfilling orders</li>
                      <li>Customer service</li>
                    </ul>

                    <h6>Delivering Happiness:</h6>
                    <ul className='mb-5'>
                      <li>Content creation </li>
                      <li>Scheduling posts </li>
                      <li>Assist with photoshoots</li>
                      <li>Engage with influencers in the Disability space </li>
                      <li>Drive brand growth across Instagram, TikTok, Facebook, and Twitter </li>
                      <li>Design email campaigns for subscribers</li>
                      <li>Grow the Izzy Wheels community </li>
                    </ul>

                    <h4 className='mb-5 title-left'>BENEFITS</h4>
                    <ul className='mb-5'>
                      <li>Flexible working hours </li>
                      <li>Paid internship </li>
                      <li>Work closely with Forbes Under 30 list makers</li>
                      <li>Gain valuable entrepreneurial experience </li>
                      <li>Training in e-commerce and social media </li>
                      <li>Attend industry events </li>
                      <li>Work with world-renowned photographers and artists </li>
                      <li>Attend meetings with global brands </li>
                      <li>Job progression </li>
                      <li>Create a positive impact for people with disabilities </li>
                    </ul>
                    <div className="title-left">
                      <h4>LOCATION</h4>
                      <p>Izzy Wheels, The Digital Hub, Thomas Street, Dublin 8, Ireland, D08 TCV4</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={2} className='bgr'></Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="form-container mb-5">
        <Container>
          <Row className='mt-5 no-gutters'>
            <Col lg={6} className='img-left'>
              <img src={sectionStarWars} alt="" />
            </Col>
            <Col lg={6}>
              <div className="form text-center">
                <h4 className='form-title'>APPLY TODAY!</h4>
                <Form className='box-form'>
                  <div className="form-Name-Email">
                    <p className="name">
                      <input type="text" className="validate feedback-input" placeholder="Name" {...register('name', { required: true })} />
                      {errors.name && <span className='obligatorio'>Este campo es obligatorio</span>}
                    </p>
                    <p className="email">
                      <input type="text" className="validate feedback-input" placeholder="Email" {...register('email', { required: true })} />
                      {errors.email && <span className='obligatorio'>Este campo es obligatorio</span>}
                    </p>
                  </div>
                  <p className="last-name">
                    <input type="text" className="validate feedback-input" placeholder="Subjet" {...register('last-name', { required: true })} />
                    {errors['last-name'] && <span className='obligatorio'>Este campo es obligatorio</span>}
                  </p>
                  <p className="text">
                    <textarea className="validate-feedback feedback-input" placeholder="Type your message here..." {...register('comment')}></textarea>
                  </p>

                  <div className="Upload-File">
                    <input type="submit" value="Upload File" id="button-blue" />
                    <p>Upload supported file (Max 15MB)
                    </p>
                  </div>

                  <div className="submit">
                    <input type="submit" value="SUBMIT" id="button-blue" />
                    <div className="ease"></div>
                  </div>

                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Work