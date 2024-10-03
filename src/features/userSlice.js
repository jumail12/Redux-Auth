import {createSlice} from "@reduxjs/toolkit"

const intial={
    users:[]
}

const userSlice=createSlice({
    name:"user",
    initialState:intial,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload);
        },
        toogle:(state,action)=>{
            const user=state.users.find((u)=>u.id===action.payload)
            if(user && user.status==="good"){
                user.status="bad";
            }else{
                user.status="good";
            }
        }
    }
})

 export const userActions=userSlice.actions;
export default userSlice.reducer;