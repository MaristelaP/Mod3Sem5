import React, { useState } from "react";

const Pet = () => {

    const [nomePet, setNomePet] = useState()

    return(
        <div>
            <h3>Meus Pets</h3>
            <input type="text" />
            <button>Enviar</button>
        </div>
    )
}

export default Pet;