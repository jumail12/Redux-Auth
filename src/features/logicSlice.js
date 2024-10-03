import {createSlice} from "@reduxjs/toolkit"

const intial={
    admin:[]
}

const adminSlice=createSlice({
    name:"admin",
    initialState:intial,
    reducers:{
        register:(state,action)=>{
            state.admin=action.payload
        }
    }
});


export const adminActions=adminSlice.actions;
export default adminSlice.reducer;