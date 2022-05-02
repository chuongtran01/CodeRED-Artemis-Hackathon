import React from 'react';

import Accident from './Accident';

import './AccidentList.css';

const AccidentList = ({accidents, setAccidents}) => {

    return(
        <div className = "accident-position">
            <h1> Accident Log </h1>
            <table>
                <tr>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Time</th>
                </tr>
                {
                    accidents.map(accident => {
                        return <Accident 
                            accident = {accident}
                            accidents = {accidents}
                            setAccidents = {setAccidents}
                        />
                    })
                }
            </table>
        </div>
    );
}

export default AccidentList;