import React, {useState} from 'react'
import FormContext from '../context/FormContext';

const Wrapper = ({children}) => {
    const [name, setName] = useState('');

    return (
        <FormContext.Provider value = {{name, setName}}>
            <div>
                {children}
            </div>
        </FormContext.Provider>
    )
}

export default Wrapper


