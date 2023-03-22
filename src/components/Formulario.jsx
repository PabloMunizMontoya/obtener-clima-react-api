import React, {useState} from 'react'

//2.2.2 y 4.3 extraemos las props dadas desde app.
const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {


    //3.4 creamos la variable error
    const [error, guardarError]  = useState(false)

    //2.1 extraemos ciudad y pais de la variable busqueda
    const {ciudad, pais} = busqueda

    //2.2 function que coloca los elementos en el state.
    const handleChange = e =>{

        //2.3 actualizamos el state, como la variable es un objeto, siempre para actualizarla le decimos que haga una copia con el spread operator y que tome los nombre y los valores del evento.
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // 3.1 function que se dispara al el usuario darle al boton de submit
    const handleSubmit = e => {
        e.preventDefault()

        //3.2 validamos
        if(ciudad.trim() === '' || pais.trim === '') {
            guardarError(true)
            return
        } else {
            guardarError(false)
        }

        //4.4 pasamos al componente principal la info, a traves de el useState guardarConsultar.En realidad lo que estamos haciendo es pasando el estado de false a true, para que el useEffect en app se dispare cuando consultar cambie de estado, entonces: una vez que la info esta validada y correcta al final de esta function pasamos la function que cambia el estado consultar de false a true.  
        guardarConsultar(true)
    }
    

    return ( 
        <form
            /* 3 creamos un escuchador de eventos para el submit */
            onSubmit={handleSubmit}
        >
            {/* 3.5 con la variable error y su valor true o false hacemos un ternario para renderizar ciertas cosas */} 
            {error ? <p className='red darken-4 error'>Todos los campos son obligatorios</p> : null}
            <div className= 'input-field col s12'>
                {/* esta manera de escribir el form en html en donde primero vemos el input y luego el label es por materialize */}
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    /* 2.4 agregamos el escuchador de cambios que dispara la function que actualiza el estado de la variable busqueda */
                    onChange={handleChange}
                />
                {/* aca le decimos al label que se corresponda con el id del input */}
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>
            <div className='input-field col s12'>
                <select 
                    name='pais'
                    id='pais' 
                    value={pais}
                    /* 2.4 agregamos el escuchador de cambios que dispara la function que actualiza el estado de la variable busqueda */
                    onChange={handleChange}
                >
                    <option value=""> -- seleccione un pais --</option>
                    <option value="US"> Estados Unidos</option>
                    <option value="MX"> Mexico</option>
                    <option value="AR"> Argentina</option>
                    <option value="CO"> Colombia</option>
                    <option value="CR"> Costa Rica</option>
                    <option value="ES"> España</option>
                    <option value="PE"> Peru</option>
                </select>
                <label htmlFor='pais'>Pais: </label>
            </div>
            <div className='input-field col s12'>
                <input 
                    type="submit"
                    value='Buscar Clima'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                />
            </div>
        </form> 
     );
}
 
export default Formulario;