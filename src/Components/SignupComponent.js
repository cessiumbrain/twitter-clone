import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import FormInput from './FormInput'

const Signup = (props)=>{
    const [formValues, setFormValues] = useState({})
    const [error, setError]= useState('no errors')
    const navigate = useNavigate

    const validateInputs = async ()=>{
        return inputs.every(item=>{
            const reg = new RegExp(item.pattern)
            return reg.test(formValues[item.name])
        })
        
    }

    function handleBlur(e, func){
        func('true')
    }
    const inputs = [
        {
            id: 1,
            name: 'username',
            label: 'username',
            type:'text',
            pattern: '.*',  
            errorMessage: 'input desired username'
        },
        {
            id: 2,
            name: 'email',
            label: 'email',
            type: 'email',
            pattern: '.*',
            errorMessage: 'input valid email'
        },
        {
            id: 3,
            name: 'password',
            label: 'password',
            type: 'password',
            pattern: '.*',
            errorMessage: 'input valid password'
        },
        {
            id: 4,
            name: 'displayName',
            label: 'display name',
            type: 'text',
            pattern: '.*',
            errorMessage: 'input display name'
        }
    ]

    const allInputsValid = inputs.every(input=>{
        const regex = new RegExp(input.pattern)
        return regex.test(formValues[input.name])
     })
    return(
        <div className="signup-div">
            <form className="signup-form">
                {inputs.map(input=>{
                return(
                    <FormInput 
                    handleBlur={handleBlur}
                    setFormValues={setFormValues}
                    formValues={formValues}
                    {...input}></FormInput>
                )
              })}
                <button  onClick={(e)=>{
                        e.preventDefault()
                        if(allInputsValid){
                         props.signup(formValues, navigate)   
                        }
                        


          
                        
                    // const valid = await validateInputs
                    // if(valid){
                    //     props.signup(formValues)
                    // } else {
                    //     console.log('false')
                    // }
                }
                }>Sign Up</button>
                <button>Log In</button>
                <div>{error}</div>
            </form>
              
                
        </div>
    )
}

export default Signup