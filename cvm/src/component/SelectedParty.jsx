import React, { useContext } from 'react';
import { MyContext } from '../context/context';
import candidates from '../Data/candidateData';
import '../style/SelectedParty.css'
const SelectedParty = () => {
    const { selectedParty } = useContext(MyContext);

    // Find the candidate matching the selectedParty
    const selectedCandidate = candidates.find(candidate => candidate.id === selectedParty);

    return (
        <div className='section9'>
        {selectedCandidate ? (
            <div className='selectedCandidate'>
                {selectedCandidate.logo}
            </div>
        ) : (
            <div className='selectedCandidate'></div>
        )}
    </div>
    
    );
}

export default SelectedParty;
