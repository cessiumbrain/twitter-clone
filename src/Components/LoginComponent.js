import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";


const Login = (props) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('')
    let navigate = useNavigate()

    useEffect(()=>{
        console.log(props.currentUser)
    })
    return(
        <div className="login-div">

                <label>email</label>
                <input onChange={(e)=>{setUsername(e.target.value)}} type="text">
                </input>
                <label>password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password"></input>
                <button onClick={()=>{
                props.login(username, password)
                .then(()=>{navigate('/')})
                }}>Login</button>


        </div>
    )
}

export default Login