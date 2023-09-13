import React from "react";
import { fetchUsers, addUser, deleteUser } from "../../store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { faker } from '@faker-js/faker';
import { useThunk } from "../../hooks";

const UsersList = ()=>{
    const [isLoadingAddUSer, isErrorAddUser, runThunkAddUser] = useThunk(addUser);
    const [isLoadingFetchUsers, isErrorFetchUsers, runThunkFetchUsers] = useThunk(fetchUsers);
    const [isLoadingDeleteUser, isErrorDeleteUser, runThunkDeleteUser] = useThunk(deleteUser);
    const {data:users} = useSelector((state)=>{return state.users})
    const renderUsers = ()=>{
        return users.map((user)=>{
            return <li key={user.id}>{user.name} <button onClick={(e)=>{handleDeleteButtonClick(user.id)}}>Delete</button></li>
        });
    };
    const handleDeleteButtonClick = (id)=>{
        runThunkDeleteUser(id);
    };
    const handleClick = (e)=>{
        runThunkAddUser(faker.name.firstName());
    };
    useEffect(()=>{
        runThunkFetchUsers();
    },[runThunkFetchUsers]);
    return (
        <>
            {isLoadingAddUSer?<p>User creation happening</p>:<button onClick={handleClick}>Add user</button>}
            {isLoadingFetchUsers && <p>Loading ... </p>}
            {users && <ul>
                {renderUsers()}
            </ul>}
            {isErrorFetchUsers && <p>Error</p>}
        </>
    );
};

export default UsersList;