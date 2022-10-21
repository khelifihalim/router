import React from 'react';
import {useHistory} from 'react-router-dom';


const Description =() => {

  const history = useHistory()
  const retdirecHome = ()=>{
    let url= "/"
    history.push(url)
  }

  return (
    <div className='description'>
      <div className='desc'>
        <h2>{}</h2>
        <h1>this is the description</h1>
        <a href='/' alt='immmmg'>bande-annonce</a>
      </div>
      
      <div className='btn'>
        <button onClick={retdirecHome}>return to home page</button>
      </div>
      
    </div>
    
  )
}

export default Description
