import React from "react";

const Input = (props) =>{
      return(
          <input
          type="text"
          value={props.nomePet}
          onChange={(event) => props.setNomePet(event.target.value)}
        />
      )
  }
  
  export default Input