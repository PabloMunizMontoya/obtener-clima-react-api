import React, {Fragment} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {
  return (
    <Fragment>
      <Header
        /*  1. ponemos la prop al header 
        titulo = 'Clima React APP' */
        titulo = 'Clima react app'
      />

        <div className='contenedor-form'>
          <div className='container'>
            <div className='row'>
              {/* esta es uan forma muy similar a la de bootstrap, en donde tenemos 12 espacios de columnas, entonces con m le décimos que para tamaño mediano tome 6 y s para tamaño pequeño tome 12 */}
              <div className='col m6 s12'>
                <Formulario/>
              </div>
              <div className='col m6 s12'>
                2
              </div>
            </div>
          </div>
        </div>
      
      
    </Fragment>
    
  );
}

export default App;
