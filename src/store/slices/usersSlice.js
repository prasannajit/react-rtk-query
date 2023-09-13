import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUser, deleteUser } from "../thunks";
const usersSlice = createSlice({
    name:'users',
    initialState: {data:[],isLoading: false, error: null},
    reducers: {},
    extraReducers(builder){
        // builder.addCase('users/fetch/pending',(state,action)=>{

        // });
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(addUser.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error = action.error;
        });
        builder.addCase(deleteUser.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            const index = state.data.findIndex((user)=>{
                return user.id === action.payload;
            });
            state.data.splice(index,1);
        });
        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error = action.error;
        });
    }
});

export const usersReducer = usersSlice.reducer;