import {configureStore} from '@reduxjs/toolkit'
import adminSlice from '../features/logicSlice'
import userSlice from '../features/userSlice';

const store=configureStore({
    reducer:{
        adminAuth:adminSlice,
        contacts:userSlice
    }
})

export default store;