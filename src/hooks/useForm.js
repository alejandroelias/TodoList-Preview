import { useState } from 'react'


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    return [values, handleInputChange]
    
}


//Este es un customHook que se encarga de manejar los formularios