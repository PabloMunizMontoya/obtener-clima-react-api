import React, {useState} from 'react'

const Formulario = () => {

    //2. creamos el state del formulario, para guardar los datos del formulario.
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

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

    return ( 
        <form>
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
        </form> 
     );
}
 
export default Formulario;