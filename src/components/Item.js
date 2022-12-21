


import React from 'react'

function Item(props) {
    return (
        <li onClick={() => { props.selectedCand(props.cand) }} className='list-group-item'>
            <img style={{ width: '50px', height: '50px' }} src={require(`../assets/${props.cand.avatar}`)}></img>
            {`${props.cand.prenom} ${props.cand.nom}`}
        </li>
    )
}

export default Item