


import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CandidatContext from '../store/candidats-context';

function Infos() {
    const [oneCand, setOneCand] = useState();
    const { id } = useParams();
    const candCtx = useContext(CandidatContext);
    const navigate = useNavigate();
    candCtx.getCandidatById(id)
        .then(res => res.json())
        .then(data => {
            setOneCand(data);
        })

    function deleteHandler() {
        if (window.confirm('Etes vous sur de vouloir supprimer ce candidat ?'))
            candCtx.deleteCandidat(id)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    alert(data['message']);
                    //getAllCandidats();
                    navigate("/cv");
                })
                .catch(err => {
                    console.log(err);
                })
    }

    if (oneCand)
        return (
            <div className="d-flex justify-content-center">
                <div className="col-lg-8 push-lg-4">
                    <div className="tab-content p-b-3">
                        <div className="tab-pane active" id="profile">

                            <div className="d-flex justify-content-center">
                                <img width="150px" height="150px" className="rounded-circle align-content-center" src={require(`../assets/${oneCand.avatar}`)} alt=""></img>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="m-t-2"><span className="fa fa-clock-o ion-clock pull-xs-right"></span> Informations</h4>
                                    <table className="table table-hover table-striped">
                                        <tbody>a
                                            <tr>
                                                <td>
                                                    <strong>Prénom</strong> {oneCand.prenom}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Nom</strong> {oneCand.nom}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Age</strong>{oneCand.age} ans
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Profession</strong> {oneCand.profession}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Image</strong> path
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-center">
                                        <button onClick={deleteHandler} className="btn btn-danger">
                                            Delete
                                        </button>
                                        <button onClick={() => {
                                            navigate("edit")
                                        }} className="btn btn-primary" >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Infos