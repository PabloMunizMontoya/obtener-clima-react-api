import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  //2.2 creamos el state del formulario, para guardar los datos del formulario, lo creamos en app y lo pasamos a formulario como prop. esto lo hacemos aca para poder consultar este estate desde app y poder entonces consultar la api
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
})

//2.2.4 extraemos con destructuring los valores de busqueda
const {ciudad, pais} = busqueda

//5. creamos un tercer estado para guardar el resultado de la api
const [resultado, guardarResultado]  = useState({})

//4.1 creamos el useEstate consultar para que no pase lo que mencionamos abajo y que la consulta se haga a la api solo cuando la palabra que define ciudad este entera.
const [consultar, guardarConsultar ] = useState(false)

//8. creamos useState para el error que sucede cuando un usuario pone una ciudad inexistente.
const [error, guardarError] = useState(false)

//4. creamos un useEffect que toma ciudad y pais como dependencias, es por esta razón que el estado busqueda esta en app, este useEffect toma cada cambio que hacemos en ciudad y pais, pero como ciudad es un input text cada que escribimos una letra el useEffect actúa y como lo vamos a usar para llamar a la api no queremos que cada letra tipeada haga un llamado a la api. 4.5=> ahora pasamos como dependencia la variable consultar que al cambiar dispara el useEffect, esta variable consultar cambia de estado cuando ciudad y pais están completos y son correcto y son enviados desde el submit en formulario. 
useEffect(() => {
  const consultarAPI = async () => {

    //4.2 aca validamos si consultar es true ejecuta la petición de la api, si no al los campos estar vacíos se ejecuta la petición a la api y sale un error 404.
    if(consultar) {

    //4.1 importamos la url de la api, con una busqueda activa http://api.openweathermap.org/data/2.5/weather?q=guadalajara,mexico&appid=3935e24d25c491e6ff2069ac32274f4f, como vemos la api tiene valores api key, ciudad y pais, estos son los valores que debemos insertar desde el formulario y desde la variable appId. 
    const appId = '3935e24d25c491e6ff2069ac32274f4f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},mexico&appid=${appId}`

    //4.2 En la línea de código que has proporcionado, const respuesta = await fetch(url), fetch se utiliza para hacer una solicitud de red a una URL específica que se pasa como argumento a la función. La palabra clave await se utiliza para esperar a que se resuelva la promesa devuelta por fetch.
    const respuesta = await fetch(url)

    //4.3 Una vez que la promesa se resuelve, el resultado se almacena en la variable respuesta. Por lo general, la respuesta se devuelve en formato JSON, por lo que es posible que desees utilizar el método .json() para analizar los datos recibidos
    const resultado = await respuesta.json()

    //5.1 guardamos el resultado en en state resultado
    guardarResultado(resultado)

    //5.2 tenemos que volver a false la variable consultar. si no al haber un erro digamos si pones mal el nombre de la ciudad, no podrías volver a hacer una busqueda sin recargar la pagina por que el estado ya estaría en true.  
    guardarConsultar(false) 


    //8.1 creamos un condicional para anunciar el error 404, cuando el usuario pone mal el nombre de una ciudad, el resultado en consola tiene una propiedad cod, cuando este es 404 es por que esta mal. 
    if(resultado.cod === '404') {
      guardarError(true)
    } else {
      guardarError(false)
    }
    }
  }
  consultarAPI()
}, [consultar])

//8.2 vamos a crear un condicional para mostrar un componente u otro en función de si error es true o false.
let componente
if(error) {
  componente = <Error mensaje = 'No hay resultados'/>
} else {
  componente = <Clima
  /* 5.2 le enviamos el resultado como prop */
  resultado = {resultado}
/>
}

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

                {/* 2.2.1 pasamos al formulario la variable y la function que modifica el estado de la variable */}
                <Formulario
                  busqueda= {busqueda}
                  guardarBusqueda={guardarBusqueda}
                  /* 4.2 ponemos como prop guardarConsultar para pasarla al formulario  */
                  guardarConsultar={guardarConsultar}
                />
              </div>
              <div className='col m6 s12'>
                {/* 8.3 renderizamos el componente qeu quede como resultante de let componente si hay un error se muestra el componente Error si no se muestra el componente Resultado */}
                {componente}
              </div>
            </div>
          </div>
        </div>
      
      
    </Fragment>
    
  );
}

export default App;
