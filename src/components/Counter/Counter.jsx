import React from 'react'
import { useState } from 'react'

const Counter = () => {
    // const [state, setState] = useState(0)
    const [contador, setContador] = useState(1)
    
    // let contador = 0

    const aumentar = () => {
        setContador(contador + 1)
        console.log(contador);
        
    }
  return (
    <div>
        <p>contador: {contador}</p>
        <button onClick={aumentar} >+</button>
    </div>
  )
}

export default Counter