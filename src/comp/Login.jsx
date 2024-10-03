import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { adminActions } from '../features/logicSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [fdata,setFdata]=useState({
    email:"",
    password:""
  })

  const admin=useSelector((state)=>state.adminAuth.admin)
  const nav=useNavigate()



  const handleChange=(e)=>{
    const {value,name}=e.target
    setFdata({...fdata,[name]:value})
  }

  const handleSun=(e)=>{
    e.preventDefault()
    if(fdata.email===admin.email && fdata.password===admin.password){
     
      nav("/main")

    }else{
      alert("error in login")
    }

  }
  
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSun}>
          <input type="email" value={fdata.email} name='email' placeholder='Email' onChange={handleChange}  />
          <input type="password" value={fdata.password} name='password' placeholder=' password' onChange={handleChange} />
          <div>
            <button type='submit'>submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login