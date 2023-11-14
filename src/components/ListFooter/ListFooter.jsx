/* eslint-disable react/prop-types */
import './ListFooter.css'

const ListFooter = (props) => {
    return (
        <div className='ListFooter'>
            <button className='btn-section-footer'>{props.button}</button>
            <div className='br my-5'></div>
            <h2>{props.title1}</h2>
            <h2>{props.title2}</h2>
            <h2>{props.title3}</h2>
        </div>
    )
}

export default ListFooter