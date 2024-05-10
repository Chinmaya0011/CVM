
import './App.css'
import CandidateList from './page/CandidateList'
import VerifyVoter from './component/VerifyVoter'
import { useState } from 'react'
import Result from './component/Result'
import SelectedParty from './component/SelectedParty'
import Header from './component/Header'
function App() {

  return (
      <>
      <Header/>
      <div className='chinmaya'>
        
<div className='myVote'>
        <VerifyVoter />
               <SelectedParty/>

          <CandidateList /> 
         
     </div> 
     <Result/>
     </div>
     </>
  );
}


export default App
