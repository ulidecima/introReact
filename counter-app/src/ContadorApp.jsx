import React from 'react';
import PropTypes from 'prop-types';


function ContadorApp(props){
    // A value se le asigna el valor de props
    const { value } = props;


    const imprimeValor = () => {
        // Arrow function que imprime el valor de value
        console.log(value);
    }

    return (
        // Al clickear el boton, el valor de value sera mostrado por consola
        <div>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
            <button onClick={ imprimeValor }>Imprimir valor</button>
        </div>
    )
}

ContadorApp.propTypes = {
    // Para verificar que el valor ingresado para value sea un numero,
    // de lo contrario muestra una advertencia en la consola
    value: PropTypes.number.isRequired
}

export default ContadorApp
