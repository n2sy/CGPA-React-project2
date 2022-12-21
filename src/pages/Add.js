

import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import CandidatContext from '../store/candidats-context';

function Add() {
    const prenom = useRef();
    const nom = useRef();
    const age = useRef();
    const profession = useRef();
    const avatar = useRef();
    const candCtx = useContext(CandidatContext);
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        candCtx.addCandidat(
            {
                prenom: prenom.current.value,
                nom: nom.current.value,
                age: Number(age.current.value),
                profession: profession.current.value,
                avatar: avatar.current.value
            }
        ).then(res => res.json())
            .then(data => {
                alert(data['message']);
                navigate("/cv")
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (

        <div className="container" >
            <form onSubmit={submitHandler}>

                <label for="prenom">Prénom</label>
                <input required type="text" className="form-control" id="prenom" name="prenom" ref={prenom} />

                <label for="nom">Nom</label>
                <input required type="text" className="form-control" id="nom" name="nom" ref={nom} />
                <label for="age">Age</label>
                <input type="number" className="form-control" id="age" name="age" ref={age} />

                <label for="profession">Profession</label>
                <input required type="text" className="form-control" id="profession" name="profession" ref={profession} />

                <label for="path">Url de l'avatar</label>
                <input type="text" className="form-control" id="path" name="path" ref={avatar} />

                <button type="submit" className="btn btn-primary">
                    Ajouter CV
                </button>
            </form>
        </div>
    )
}

export default Add