import './App.css';
import Menu from './components/Menu';

import { BrowserRouter,Route } from 'react-router-dom';

import Home from './components/Home';
import Description from './components/Description';


const App = () =>{

  
      
  return (
    <BrowserRouter>
    
        <Menu />

        <Route exact path='/' component={ Home } />

        <Route path='/Description' component={ Description } />

    </BrowserRouter>
  );
}

export default App;
