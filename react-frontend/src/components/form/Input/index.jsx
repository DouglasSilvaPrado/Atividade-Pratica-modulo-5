import React from 'react'

function Input(props) {
    return ( 
        <>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                className={props.className}
                placeholder={props.placeholder}
                required={props.required}
                value={props.value}
                onClick={props.click}
                onChange={props.onChange}
            />
        </>
     );
}

export default Input;
