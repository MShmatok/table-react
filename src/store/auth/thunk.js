import { createAsyncThunk } from "@reduxjs/toolkit";
import { logOut, login, refreshUser } from "api/authAPI";
import { toast } from "react-toastify";

export const loginThunk = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
    try {
        return await login(data)
    } catch (error) {
        toast('Authorization error. Try again!');
        return rejectWithValue(error.message);
    }
})

export const refreshUserThunk = createAsyncThunk('auth/refresh', (data) => refreshUser(data))
export const logOutThunk = createAsyncThunk('auth/logOut', () => logOut())

