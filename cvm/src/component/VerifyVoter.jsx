import React, { useContext, useState } from 'react';
import "../style/VerifyVoter.css";
import { MyContext } from '../context/context';

const VerifyVoter = () => {
    const [voterNo, setVoterNo] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');
const{setIsVerified}=useContext(MyContext)
    const handleClick = (newClick) => {
        if (voterNo.length < 10) {
            if (voterNo.length < 3 && /^[A-Za-z]$/.test(newClick)) {
                setVoterNo(prev => prev + newClick);
            } else if (voterNo.length >= 3 && /^[0-9]$/.test(newClick)) {
                setVoterNo(prev => prev + newClick);
            } else {
                setVerificationMessage("Invalid voter number format!");
            }
        } else {
            setVerificationMessage("Voter number length should be 10 digits!");
        }
    };

    const verifyVoter = () => {
        if (voterNo.length === 10) {
            setVerificationMessage("Your voter number is verified!");
            setIsVerified(true);
        } else {
            setVerificationMessage("Voter number length should be 10 digits!");
            setIsVerified(false);
        }
    };

    const resetVoterNo = () => {
        setVoterNo('');
        setVerificationMessage('');
    };

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    return (
        <div className='voterVerify'>
            <div className='display'>{voterNo}</div>
            <div className="message" style={{ color: verificationMessage.includes('verified') ? 'green' : 'red' }}>
                {verificationMessage}
            </div>
            <div>
                {[...numbers].map(number => (
                    <p key={number} onClick={() => handleClick(number)} className='numbers'>{number}</p>
                ))}
                {[...letters].map(letter => (
                    <p key={letter} onClick={() => handleClick(letter)} className='alphabet'>{letter}</p>
                ))}
            </div>
            <div className='verresButton'>
                <button onClick={verifyVoter} className='verifyButton'>Verify Voter</button>
                <button onClick={resetVoterNo} className='resetButton'>Reset</button>
            </div>
            <ul>
        <li>Voter verification rule:</li>
        <li>Voter number should be 10 characters long.</li>
        <li>The first three characters should be letters (alphabets).</li>
        <li>The remaining seven characters should be numbers.</li>
    </ul>
        </div>
    );
};

export default VerifyVoter;
