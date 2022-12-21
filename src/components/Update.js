

import React, { useContext, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CandidatContext from '../store/candidats-context';

function Update() {
    const [Candidat, setCandidat] = useState();
    const navigate = useNavigate();
    const prenom = useRef();
    const nom = useRef();
    const age = useRef();
    const profession = useRef();
    const { id } = useParams();
    const candCtx = useContext(CandidatContext);
    candCtx.getCandidatById(id).then(res => res.json()).then(data => {
        setCandidat(data)
    })

    function submitHandler(e) {
        e.preventDefault();
        const uCand = {
            _id: id,
            prenom: prenom.current.value,
            nom: nom.current.value,
            age: Number(age.current.value),
            profession: profession.current.value
        }
        candCtx.updateCandidat(uCand, id).then(res => res.json())
            .then(data => {
                alert(data['message']);
                navigate("/cv")

            })
            .catch(err => {
                console.log(err);
            })
    }
    if (Candidat)
        return (

            <div className="container alert alert-info col-md-8">
                <form className="well form-horizontal" onSubmit={submitHandler} >
                    <div className="profile-userpic">
                        {/* <img src="" className="img-responsive" alt=""></img> */}
                    </div>
                    <fieldset>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Prénom</label>
                            <input className="form-control" required type="text" defaultValue={Candidat.prenom} ref={prenom} />                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label">Nom</label>
                            <input className="form-control" required type="text" defaultValue={Candidat.nom} ref={nom} /></div>

                        <div className="form-group">
                            <label className="col-md-4 control-label">Age</label>
                            <input className="form-control" required type="number" defaultValue={Candidat.age} ref={age} /></div>


                        <div className="form-group">
                            <label className="col-md-4 control-label">Profession</label>
                            <input className="form-control" type="text" defaultValue={Candidat.profession} ref={profession} /></div>

                    </fieldset>
                    <button type="submit" className="btn-success">Valider</button>
                </form>
            </div>

        )
}

export default Update