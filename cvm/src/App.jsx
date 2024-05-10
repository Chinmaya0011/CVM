
import './App.css'
import CandidateList from './page/CandidateList'
import VerifyVoter from './component/VerifyVoter'
import { useState } from 'react'
import Result from './component/Result'
import SelectedParty from './component/SelectedParty'
function App() {

  return (
      <>
      <div className='chinmaya'>
<div className='myVote'>
        <VerifyVoter />
          <CandidateList /> 
          <SelectedParty/>
     </div> 
     <Result/>
     </div>
     </>
  );
}


export default App
