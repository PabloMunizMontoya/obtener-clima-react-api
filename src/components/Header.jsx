import React from 'react';

//1.1 extraemos la prop titulo 
const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className = 'nav-wrapper light-blue darken-2'>
                {/* 1.2 renderizamos la propiedad */}
                {/* estamos usando materialize, un framework css de google con estilos, para que renderize de esta manera el pide que sea un a y no un h1, por eso usamos un ancor y lo anulamos con esta sintaxis #! */}
                <a href="#!" className='brand-logo'>{titulo}</a>
            </div>
        </nav>  
     );
}
 
export default Header;