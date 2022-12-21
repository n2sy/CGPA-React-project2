


import React, { useState } from 'react'
import Details from '../components/Details'
import Liste from '../components/Liste'

function Cvtheque() {
    const [selectedCand, setSelectedCand] = useState();
    // console.log("dans CV", selectedCand);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-5'>
                    <Liste onCandSelected={setSelectedCand}></Liste>
                </div>

                <div className='col-md-7'>
                    <Details selCand={selectedCand}></Details>
                </div>

            </div>
        </div>
    )
}

export default Cvtheque