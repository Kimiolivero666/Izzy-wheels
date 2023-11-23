import { useState } from 'react';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import './acordion.css'

const Accordion = () => {
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select'); // Estado inicial

    const options = ['50cm', '47cm', '45cm', '42cm'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsActive(false);
    };

    return (
        <div className="accordion">
            <div className="box">
                <div className={`accordion-header ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>

                    {selectedOption}
                    <div className="icon-arrow">
                        {isActive ? < SlArrowUp /> : <SlArrowDown />}
                    </div>
                </div>
            </div>
            {isActive && (
                <div className="accordion-content">
                    <ul>
                        {options.map((option, index) => (
                            <li key={index} onClick={() => handleOptionClick(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Accordion;
