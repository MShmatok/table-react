import { addNewContactThunk, deleteContactThunk, getAllthunk, updateContactThunk } from "./thunk";
import { handlerAddNewContact, handlerGetAllData, handlerDeleteContact, updateContactContact } from "./handlers";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoggedUser: false,
    table: {
        items: [],
    },
    filter: { searchName: '', searchEmail: '', searchBirthday_date: '', searchPhone_number: '', searchAddress: '' },
    dataForUpdate: '',
    dataForAdd: ''
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
        setFilter: (state, { payload }) => { state.filter[payload.name] = payload.value },
        closeModal(state) { state.dataForUpdate = '' },
        openChangeModal(state, { payload }) {
            state.dataForUpdate = payload;
        },
        closeModalAdd(state) { state.dataForAdd = '' },
        openModalAdd(state, { payload }) {
            state.dataForAdd = payload;
        }
    }
})

export const reducerTable = tableSlice.reducer;
export const { closeModal, setFilter, openChangeModal, closeModalAdd, openModalAdd } = tableSlice.actions;
