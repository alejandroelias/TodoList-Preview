import React from 'react'
import { useForm } from '../../useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });

    const {name, email, password}=formValues;  


    return (
        <>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div>
                <input 
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input 
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input 
                    type="password"
                    name='password'
                    className='form-control'
                    placeholder='*********'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

        </>
    )
}
   