
import './App.css'
import CandidateList from './page/CandidateList'
import VerifyVoter from './component/VerifyVoter'
import { useState } from 'react'
import Result from './component/Result'
function App() {

  return (
      <>
<div className='myVote'>
        <VerifyVoter />
          <CandidateList /> 
          
     </div> </>
  );
}


export default App
