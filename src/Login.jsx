import { useState } from "react"
import { Link,useNavigate} from "react-router-dom"
import axios from 'axios'


const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")


  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3000/login',{email,password})
    .then(res=>{console.log(res)
      if(res.data === "sucess"){
        navigate('/home')
      }
      
    })
}

  return (
    <div className="Login">
       <form onSubmit={handleSubmit}>
         <h1>Login Here</h1>
        <input type={'email'} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'></input>
        <br></br>
        <input type={'text'} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'></input>
        <br></br>
        <button type="submit">submit</button>
        <p>Dont Have an Account <Link to={'/signup'}>Signup</Link> </p>
      </form>
    </div>
  )
}

export default Login
