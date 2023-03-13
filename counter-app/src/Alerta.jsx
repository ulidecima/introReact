import React, { useState } from 'react';

function Alerta() {
    return(
        <div className="alert alert-danger" role="alert">
            El valor del contador es mayor que 4
        </div>)
}

export default Alerta;