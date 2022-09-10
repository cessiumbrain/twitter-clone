import { useState } from "react"

const FormInput = (props) =>{
const [focused, setFocused]= useState('false')

    return(
        <div>
            <label>{props.label}</label>
            <input 
            onChange={(e)=>{props.setFormValues({
                ...props.formValues,
                [e.target.name]: e.target.value
            })}}
            required={true} 
            name={props.name}
            type={props.type}
            pattern={props.pattern}
            onBlur={(e)=>{props.handleBlur(e, setFocused)}}
            focused={focused}></input>
            <span>{props.errorMessage}</span>
        </div>
    )
}

export default FormInput