import React, { useState, useEffect, useContext } from 'react';
import candidates from '../Data/candidateData';
import "../style/Candidate.css";
import { MyContext } from '../context/context';

const Candidate = () => {
  const [votedCandidate, setVotedCandidate] = useState(null);
  const [votedMessageVisible, setVotedMessageVisible] = useState(false);
  const { isVerified, setIsVerified, totalVote, setTotalVoted,setSelectedParty } = useContext(MyContext);

  useEffect(() => {
    console.log("isVerified value changed to:", isVerified);
  }, [isVerified]);

  const blurContainer = isVerified ? 'notBlur' : 'blur';

  const handleVoted = (ID) => {
    setVotedCandidate(ID);
    setVotedMessageVisible(true);
    setSelectedParty(ID)
    // Hide the voted message after 2 seconds
    setTimeout(() => {
      setVotedMessageVisible(false);
      setIsVerified(false)
    }, 2000);

    // Update total vote count
    setTotalVoted(prevVotes => {
      const updatedVotes = { ...prevVotes };
      candidates.forEach(candidate => {
        if (candidate.id === ID) {
          updatedVotes[candidate.name] = (updatedVotes[candidate.name] || 0) + 1;
        }
      });
      return updatedVotes;
    });
  }

  return (
    <div className={`candidates-container ${blurContainer}`}>
      {votedMessageVisible && (
        <div className="voted-message" >Thanks for voting!</div>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Logo</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.id} className="candidate">
              <td>{candidate.id}</td>
              <td>{candidate.name}</td>
              <td><img src={candidate.photo} alt={candidate.name} className="candidate-photo" /></td>
              <td>{candidate.logo}</td>
              <td>
                <button
                  className="vote-button"
                  onClick={() => handleVoted(candidate.id)}
                  style={{ backgroundColor: votedCandidate === candidate.id ? 'green' : '' }}
                  disabled={votedCandidate === candidate.id}
                >
                  {votedCandidate === candidate.id ? "VOTED" : ""}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Candidate;
