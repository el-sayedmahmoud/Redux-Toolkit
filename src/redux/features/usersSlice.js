import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUser =createAsyncThunk("users/fetchUses", async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;

})

const initialState={
    loading:false,
    data:[],
    error:null,
}

export const usersSlice = createSlice ({
    name :'users',
    initialState,
    reducers :{},
    extraReducer:{
        [getUser.pending] : (state ,action)=>{
            state.loading =true;
        },
        [getUser.fulfilled] : (state ,action)=>{
            state.loading =false;
            state.data = action.payload
        },
        [getUser.pending] : (state ,action)=>{
            state.loading =false;
            state.error = "error"
        }
    }
})


export const {}= usersSlice.actions;

export default usersSlice.reducer;