import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { adminActions } from '../features/logicSlice'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const dispatch=useDispatch();
    const intial={
        name:"",
        email:"",
        password:""
    }
    const nav=useNavigate();
    const [admin,setAdmin]=useState(intial);

    const handleChange=(e)=>{
        const {value,name}=e.target
        setAdmin({...admin,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(adminActions.register({
            name:admin.name,
            email:admin.email,
            password:admin.password,
            auth:true
        }));

        nav("/login")
    }
    
  return (
    <div>
        <h1>Register Admin</h1>

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 placeholder='Name'
                  value={admin.name}
                   name='name'
                   onChange={handleChange}
                   required
                    />

                <input type="email"
                 placeholder='Email'
                  value={admin.email}
                   name='email'
                   onChange={handleChange}
                   required
                    />

                <input type="password"
                 placeholder='Password' 
                  value={admin.password}
                   name='password'
                   onChange={handleChange}
                   required
                   />

                <div>
                <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp