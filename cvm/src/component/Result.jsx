import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { MyContext } from '../context/context';
import "../style/Result.css";

const Result = () => {
    const { currentUser } = useContext(MyContext);

    const handleResultClick = () => {
        // Check if the current user is Chinmaya
        if (currentUser === 'Chinmaya') {
            Swal.fire({
                icon: 'info',
                title: 'Only Chinmaya Can View the Result',
                text: 'Please contact Chinmaya to view the result.'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: 'You are not authorized to view the result.',
                footer: 'Only Chinmaya can view the result.'
            });
        }
    };

    return (
        <div>
            <button className='result-button' onClick={handleResultClick}>Result</button>
        </div>
    );
}

export default Result;
