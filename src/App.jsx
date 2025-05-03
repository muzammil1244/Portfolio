import { useState } from 'react'

import './App.css'
import Header from './component/header';
import { PageOne } from './component/pageone';
import { SePage } from './component/sePage';
import { TPaeg } from './component/TPage';
import { FPage } from './component/FPage';
import { Five } from './component/Five';
import { Six } from './component/Six';


function App() {

  return (
    <>
      <div className="    scrollbar-hide">  
       
      <PageOne/>

      
     <SePage/>
     <TPaeg/>
     <FPage/>
     <Five/>
     <Six/>
      </div>
    </>
  )
}

export default App;
