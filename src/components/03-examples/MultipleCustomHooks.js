import React from 'react'
import { useCounter } from '../../hooks/useCouter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);


    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(data);

    //!null = true
    //!!null =false
    //null && 'Hola mundo' -> "Hola mundo"
    const {author, quote} = !!data && data[0];


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ? 
                    (
                        <div className = "alert alert-info text-center">
                            Loading
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blocquote-footer">{author}</footer>
                        </blockquote>  
                    )
            }

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
            </button>

               
        </div>
    )
}
