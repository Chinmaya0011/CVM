import React, { createContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  // Define the state or data you want to share
  const [isVerified, setIsVerified] = useState(false);
  const [totalVote, setTotalVoted] = useState({}); // Initialize totalVote as an empty object

  return (
    // Provide the data to the children components
    <MyContext.Provider value={{ isVerified, setIsVerified, totalVote, setTotalVoted }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
