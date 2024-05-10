import React, { useContext } from 'react';
import { MyContext } from '../context/context';
import candidates from '../Data/candidateData';

const SelectedParty = () => {
    const { selectedParty } = useContext(MyContext);

    // Filter candidates based on selectedParty and map over the filtered array to render JSX
    const selectedCandidates = candidates
        .filter(candidate => candidate.id === selectedParty)
        .map(candidate => (
            <div key={candidate.id}>
                {candidate.logo}
            </div>
        ));

    return (
        <div>
            {selectedCandidates}
        </div>
    );
}

export default SelectedParty;
