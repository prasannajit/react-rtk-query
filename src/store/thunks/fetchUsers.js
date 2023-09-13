import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/fetch', async()=>{
    const response = await fetch("http://localhost:3005/users",{
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
});
