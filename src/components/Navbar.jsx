import React, { useContext } from 'react'
import FormContext from '../context/FormContext'

const Navbar = () => {
    const value = useContext(FormContext);

    return (
        <div>
            <h1>Hi, {value.name}</h1>
        </div>
    )
}

export default Navbar
