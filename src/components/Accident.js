import React from 'react';

import './Accident.css';

const Accident = ({accident, accidents, setAccidents}) => {
    
    const handleDelete = (event) => {
        event.preventDefault();

        setAccidents(
            accidents.filter(currentAccident => currentAccident.id !== accident.id)
        )
    };

    return(
        <tr>
            <td>{accident.loc}</td>   
            <td>{accident.desc}</td>
            <td>{accident.time}</td>
            <button onClick={handleDelete}>Delete</button>
        </tr>
       
    );
}

export default Accident;