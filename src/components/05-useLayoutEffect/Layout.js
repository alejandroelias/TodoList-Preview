import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCouter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1);


    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data);

    //!null = true
    //!!null =false
    //null && 'Hola mundo' -> "Hola mundo"
    const { quote } = !!data && data[0];


    const pTag = useRef();

    useLayoutEffect(() => {
        console.log('hey')
    }, [])


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />


            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>


            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
            </button>


        </div>
    )
}
