/* eslint-disable react/no-unescaped-entities */

import './jumbotron2.css'
import jumbotron2 from '../../assets/jumbotron2.jpg'


const Jumbotron2 = () => {
  return (
    <div className='Jumbotron2'>
          <img src={jumbotron2} alt="" style={{
    objectFit: 'cover',
    width: '100%',
    height: '100vh',
  }}/>
   <div className="title-jumbotron2">
 <h1>our story </h1>
 <h1>gif voucher</h1>
 <h1>join mailing list </h1>
 </div>
 
    </div>
  )
}

export default Jumbotron2