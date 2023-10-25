const { createSlice } = require("@reduxjs/toolkit")

const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
}

const handleRejected = (state, { error, payload }) => {
    state.isLoading = false;
    state.error = payload ?? error.message;
}

const handleFulfilled = (state) => {
    state.isLoading = false;
}

const initialState = {
    isLoading: false,
    error: '',
    isOpenModal: false,
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    extraReducers: (builder) => {
        builder.addMatcher((action) => action.type.endsWith('/pending'),
            handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'),
                handleRejected)
            .addMatcher((action) => action.type.endsWith('/fulfilled'),
                handleFulfilled)
    }
})

export const reducerRoot = rootSlice.reducer;
