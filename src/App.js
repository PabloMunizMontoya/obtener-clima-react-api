import React, {Fragment} from 'react'
import Header from './components/Header';


function App() {
  return (
    <Fragment>
      <Header
        /* 1. ponemos la prop al header */
        titulo = 'Clima React APP'
      >

      </Header>
      
    </Fragment>
    
  );
}

export default App;
