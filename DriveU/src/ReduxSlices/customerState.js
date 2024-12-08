import { createSlice } from "@reduxjs/toolkit"


const initialState={
    customers: {
        name: '',
        email:'',
        phone: '',
        user: '',
        password: '',
        address: '',
        landmark: '',
    },
}

export const customerSlice =createSlice({
    name: 'customers',
    initialState,
    reducers:{
        setCustomers: (state,action)=>{
            const { key, value}=action.payload;
            state.customers[key]=value
        },
    }
})

export const{setCustomers}=customerSlice.actions
export default customerSlice.reducer