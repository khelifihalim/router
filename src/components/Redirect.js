import React from 'react';
import {useHistory} from 'react-router-dom';

function Redirect() {
    const history = useHistory()
    const redirectToDetails = () => {
        let url = "/Description"
        history.push(url)
    }

  return (
    <div>

        <button onClick={redirectToDetails}>redirect</button>
      
    </div>
  )
}

export default Redirect

