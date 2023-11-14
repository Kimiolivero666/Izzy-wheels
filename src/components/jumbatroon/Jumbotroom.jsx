/* eslint-disable react/no-unescaped-entities */
import ImgJumbotron from '../../assets/jumbatronImagen.jpg'
import WhiteBotton from '../whiteBotton/WhiteBotton'
import './jumbotron.css'


const Jumbotroom = () => {
  return (
    <div className="Jumbotron">
        
        <img src={ImgJumbotron} alt="" style={{
          objectFit: 'cover',
          width: '100%',
          height: '100vh',
        }}/>
        <div className="title-jumbotron d-none d-lg-block">
        <h1>IF YOU CAN'T STAND UP, STAND OUT! </h1>
        </div>
       <div className="btn-jumbotron">
       <WhiteBotton titulo='SHOW NOW'/>
       </div>
       
</div>
  )
}

export default Jumbotroom