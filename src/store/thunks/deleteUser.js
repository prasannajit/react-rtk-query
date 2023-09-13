import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUser = createAsyncThunk('users/delete',async(id)=>{
    const response = await fetch(`http://localhost:3005/users/${id}`,{
        method: 'DELETE'
    });
    const data = await response.json();
    return id;
});