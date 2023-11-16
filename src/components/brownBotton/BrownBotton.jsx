/* eslint-disable react/prop-types */
import './brownBotton.css'

export const BrownBotton = (props) => {
    return (

        <div>
            <div className="btn-brown">
                <button>{props.titulo}</button>
            </div>
        </div>
    )
}
