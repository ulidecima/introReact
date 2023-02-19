import React, { useState } from 'react';
import PropTypes from 'prop-types';


function ContadorApp(props){
    // A value se le asigna el valor de props
    const { value } = props;
    const [contador, setContador] = useState(value);


    const imprimeValor = () => {
        // Arrow function que imprime el valor de value
        console.log(value);
    }

    const restar = () => {
        setContador(contador - 1);
    }
    const sumar = () => {
        setContador(contador + 1);
    }
    const reestablecer = () => {
        setContador(value);
    }

    return (
        // Al clickear el boton, el valor de value sera mostrado por consola
        <div className='container'>
            <div className='container-counterApp'>
                <h1>CounterApp</h1>
            </div>
            <div className='container-mostrar-valor'>
                <h2>{ contador }</h2>
            </div>
            <div>
                <div className='container-botones'>
                    <button onClick = { sumar }>Sumar</button>
                    <button onClick = { restar }>Restar</button>
                </div>
                <div className='container-reestablecer'>
                    <button onClick = { reestablecer }>Reestablecer</button>
                </div>
            </div>
        </div>
    )
}

ContadorApp.propTypes = {
    // Para verificar que el valor ingresado para value sea un numero,
    // de lo contrario muestra una advertencia en la consola
    value: PropTypes.number.isRequired
}

export default ContadorApp
