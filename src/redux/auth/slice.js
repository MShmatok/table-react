const { createSlice } = require("@reduxjs/toolkit");
const { loginThunk, refreshUserThunk, logOutThunk } = require("./thunk");

const initialState = {
    token: '',
    isRefreshing: false,
    userName: ""
}
const handleLogin = (state, { payload }) => {
    state.token = payload.token
    state.userName = payload.userName
}
const handleLogOut = (state) => {
    state.token = '';
}

const handleRefreshUser = (state, { payload }) => {
    state.token = payload.token;
    state.userName = payload.userName
    state.isRefreshing = false;
}
const handleRefreshUserEnd = (state) => {
    state.isRefreshing = false;
}
const handleRefreshUserStart = (state) => {
    state.isRefreshing = true;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, handleLogin)
            .addCase(refreshUserThunk.pending, handleRefreshUserStart)
            .addCase(refreshUserThunk.fulfilled, handleRefreshUser)
            .addCase(refreshUserThunk.rejected, handleRefreshUserEnd)
            .addCase(logOutThunk.fulfilled, handleLogOut)
    }
})

export const reducerAuth = authSlice.reducer