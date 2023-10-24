import { addNewContactThunk, deleteContactThunk, getAllthunk, updateContactThunk } from "./thunk";
import { handlerAddNewContact, handlerGetAllData, handlerDeleteContact, updateContactContact } from "./handlers";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoggedUser: false,
    table: {
        items: [],
    },
    filter: "",
    dataForUpdate: ''
};

const tableSlice = createSlice({
    name: 'table',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getAllthunk.fulfilled, handlerGetAllData)
            .addCase(addNewContactThunk.fulfilled, handlerAddNewContact)
            .addCase(deleteContactThunk.fulfilled, handlerDeleteContact)
            .addCase(updateContactThunk.fulfilled, updateContactContact)
    },
    reducers: {
        setFilter: (state, { payload }) => { state.filter = payload },
        closeModal(state) { state.dataForUpdate = '' },
        openChangeModal(state, { payload }) {
            state.dataForUpdate = payload;
        }
    }
})

export const reducerTable = tableSlice.reducer;
export const { closeModal, setFilter, openChangeModal } = tableSlice.actions;
