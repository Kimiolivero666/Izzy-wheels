/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './WhiteBotton.css'

const WhiteBotton = (props) => {
    return (
        <div>
            <div className="btn">
                <button>{props.titulo}</button>
            </div>
        </div>
    )
}

export default WhiteBotton