import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { userActions } from '../features/userSlice';
import {useDispatch} from "react-redux"


const CreateContact = () => {
    const [user,setUser]=useState({
        name:"",
        number:"",
        email:""
    });

    const dispatch=useDispatch();
    const nav=useNavigate();

    const handleChange=(e)=>{
        const {value,name} =e.target
        setUser({...user,[name]:value})
    }

    const handleSub=(e)=>{
        e.preventDefault()
       dispatch(userActions.addUser({
        name:user.name,
        number:user.number,
        email:user.email,
        id:Date.now(),
        status:"good"
       }));
     setUser("");
       nav("/main")
    }
  return (
    <div>
        <div>
            <h1> CreateContact</h1>

            <div>
                <form onSubmit={handleSub}>
                    <input type="text" placeholder='name' name='name' value={user.name} onChange={handleChange} />
                    <input type="text" placeholder='Phone number' value={user.number} name='number' onChange={handleChange}/>
                    <input type="email" placeholder='email' value={user.email} name='email'onChange={handleChange} />
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateContact