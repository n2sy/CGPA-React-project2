import { createContext, useState } from "react";



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
        fetch('https://candidats-api.vercel.app/cv/persons')
            .then(res => res.json())
            .then(data => {
                setAllCandidats(data);
            })
    }

    const context = {
        allCandidats: allCandidats,
        nbCandidats: allCandidats.length,
        getAllCandidats: getAllCandidats,
        getCandidatById: () => { },
        deleteCandidat: () => { },
        updateCandidat: () => { },
        addCandidat: () => { }
    }
    return <CandidatContext.Provider value={context}>
        {props.children}
    </CandidatContext.Provider>
}

export default CandidatContext;