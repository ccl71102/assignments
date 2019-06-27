import React from "react";

const Form = props => {

const {handleSubmit, name, value, handleChange, placeholder} = props;

    return (
        <form onClick = {handleSubmit}>
            <input name={name}
            value = {value}            
            onChange = {handleChange}
            placeholder={placeholder}/>
        <button >Submit</button>
        </form>
    );
}

export default Form;