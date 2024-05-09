import React, { useContext } from 'react';
import { MyContext } from '../context/context';

const Result = () => {
    const { totalVote } = useContext(MyContext);

    // Check if totalVote is null or undefined, then assign an empty object

    return (
        <div>
           
            {Object.entries(totalVote).map(([name, count]) => (
                <p key={name}>{name}: {count}</p>
            ))}
        </div>
    );
}

export default Result;
