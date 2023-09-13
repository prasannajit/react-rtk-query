import { createAsyncThunk } from "@reduxjs/toolkit";

export const addUser = createAsyncThunk('users/add',async(name)=>{
    const response = await fetch('http://localhost:3005/users',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({name})
    });
    const data = await response.json();
    return data;
});