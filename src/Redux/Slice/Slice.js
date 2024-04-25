import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(window?.localStorage.getItem("cart"))|| []

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        updateCart:(state, action)=>{
            state=state.push(action.payload)
        }
    }
})

export const {updateCart} = cartSlice.actions
export default cartSlice.reducer