


import React, { useContext } from 'react'
import CandidatContext from '../store/candidats-context'
import Item from './Item';

function Liste(props) {
    const candCtx = useContext(CandidatContext);
    candCtx.getAllCandidats();
    return (
        <>
            <ol className='list-group'>
                {candCtx.allCandidats.map((cand) => {
                    return <Item selectedCand={props.onCandSelected} key={cand._id} cand={cand}></Item>
                })}
            </ol>
        </>
    )
}

export default Liste;
