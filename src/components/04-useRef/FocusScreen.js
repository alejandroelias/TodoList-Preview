import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef()
    //El proposito de este ejercicio es que el button haga un focus en el input
    //Se puede hacer usando:

    const handleClick = () => {

        // document.querySelector('input').select();
        inputRef.current.select();
    }


    return (
        <div>
            <h1>Focus screen</h1>
            <hr />

            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>


        </div>
    )
}
