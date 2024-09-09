import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        reset(state){
            state.counter=0
        },
        countWithNum(state,action){
            state.counter+=Number(action.payload)
        }
    }
})

export default counterSlice.reducer
export const {increment,decrement,reset,countWithNum}=counterSlice.actions
