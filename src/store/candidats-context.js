import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';



const CandidatContext = createContext(
    {
        allCandidats: [],
        nbCandidats: 0,
        getAllCandidats: () => { },
        getCandidatById: () => { },
        deleteCandidat: () => { },
        updateCandidat: () => { },
        addCandidat: () => { }
    }
);

export function CandidatContextProvider(props) {
    const [allCandidats, setAllCandidats] = useState([]);

    function getAllCandidats() {
        fetch('http://localhost:3000/cv/persons')
            .then(res => res.json())
            .then(data => {
                setAllCandidats(data);
            })
    }
    function getCandidatById(id) {
        return fetch(`http://localhost:3000/cv/persons/${id}`);
    }

    function deleteCandidat(id) {
        return fetch(`http://localhost:3000/cv/persons/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem('mytoken')
            }
        })

    }

    function updateCandidat(cand, id) {

        return fetch(`http://localhost:3000/cv/persons/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cand),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem('mytoken')
            }
        })
    }

    function addCandidat(newCand) {
        return fetch(`http://localhost:3000/cv/persons`, {
            method: 'POST',
            body: JSON.stringify(newCand),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem('mytoken')
            }
        })
    }

    const context = {
        allCandidats: allCandidats,
        nbCandidats: allCandidats.length,
        getAllCandidats: getAllCandidats,
        getCandidatById: getCandidatById,
        deleteCandidat: deleteCandidat,
        updateCandidat: updateCandidat,
        addCandidat: addCandidat
    }
    return <CandidatContext.Provider value={context}>
        {props.children}
    </CandidatContext.Provider>
}

export default CandidatContext;