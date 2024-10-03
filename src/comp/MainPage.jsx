import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { userActions } from '../features/userSlice'

const MainPage = () => {
    const nav=useNavigate();
    const dispatch=useDispatch()

    const users=useSelector((state)=>state.contacts.users)
  
    

    const handleNav=()=>{
        nav("/create")
    }

    const togle=(id)=>{
        dispatch(userActions.toogle(id));
    }


  return (
    <div>
        <h1>
            Contacts
        </h1>
        <div>
            <button onClick={handleNav} >Create</button>
        </div>

        <table border={"2"}>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
            </tr>
            {
                users.length>0?(
                    users.map((item)=>(
                        <tr key={item.id}  style={item.status==="good"?{backgroundColor:"yellow"}:{backgroundColor:"red"}}>
                            <td>{item.name}</td>
                            <td>{item.number}</td>
                            <td>{item.email}</td>
                            <td style={{cursor:"pointer"}} onClick={()=>togle(item.id)}>{item.status}</td>
                        </tr>
                    ))
                ):(<tr>
                    No users
                </tr>)
            }
        </table>
    </div>
  )
}

export default MainPage