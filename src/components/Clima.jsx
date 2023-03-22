import React from 'react'

//5.3. exportamos resultado que viene como propr desde app
const Clima = ({resultado}) => {

    //5.4 extraemos las propiedades de resultado, resultado es un objeto con muchos objetos adentro y muchas propiedades con valores, de estos tomamos la prop name y el objeto main.
    const {name, main} = resultado

    //7. condicional para no mostrar el componente si name no existe
    if(!name){
        return null
    }

    //6. convertimos grados kelvin a centígrados
    const kelvin = 273.15

    const gradosCentigrados = '\u2103'

    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                {/* 5.5 renderizamos el nombre de la ciudad  */}
                <h2> El clima de {name} es:</h2>
                <p className='temperatura'>
                    {/* 5.6 renderizamos la propiedad del objeto main, esta propiedad esta en grados kelvin, entonces usamos la formula para convertir kelvin a grados c y le decimos que nos redondea el numero y nos muestre solo dos dígitos */}
                    {parseFloat (main?.temp - kelvin, 10).toFixed(2)} <span> {gradosCentigrados} </span>
                </p>
                <p> Temperatura Maxima:
                    {parseFloat (main?.temp_max - kelvin, 10).toFixed(2)} <span> {gradosCentigrados} </span>
                </p>
                <p> Temperatura Minima:
                    {parseFloat (main?.temp_min - kelvin, 10).toFixed(2)} <span> {gradosCentigrados} </span>
                </p>
            </div>
        </div>
    );
}
 
export default Clima;