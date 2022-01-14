import React, { useContext } from 'react'
import FormContext from '../context/FormContext';

const Form = () => {
    const value  = useContext(FormContext);

    return (
        <div>
            <form>
                <label>Your Name: </label>
                <input type = 'text' onChange={ (e) => value.setName(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Form
