import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk)=>{
    const [isLoading, setIsLoading]=useState(false);
    const [isError, setIsError]=useState(false);
    const dispatch = useDispatch();
    const runThunk = useCallback((arg)=>{
        setIsLoading(true);
        dispatch(thunk(arg)).unwrap().then(()=>{
            console.log('success');
        }).catch((e)=>{
            setIsError(e);
        }).finally(()=>{
            setIsLoading(false);
        });
    },[]);
    return [isLoading, isError, runThunk];
};