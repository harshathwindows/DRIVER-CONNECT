import { createSlice } from "@reduxjs/toolkit"

const initialState={
    
    cuslogin:{
        user: '',
        password:'',
    }
}

export const loginCustomer=createSlice({
    name: "cuslogin",
    initialState,
    reducers:{
        setLoginCustomer:(state,action)=>{
        const{key,value}=action.payload;
        state.cuslogin[key]=value
    },
    
}
})

export const{setLoginCustomer}=loginCustomer.actions
export default loginCustomer.reducer