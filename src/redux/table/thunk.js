import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { selectFilter } from "./selectors";

const { createAsyncThunk } = require("@reduxjs/toolkit")
const { getAllTable, addContact, deleteContact, updateContact } = require("api/tableAPI")


export const getAllthunk = createAsyncThunk('table/getAll', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState();
        const result = await getAllTable(state.table.filter);
        return result;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})

export const getAllthunkSearch = createAsyncThunk('table/getAll', async (_, { rejectWithValue }) => {
    try {
        const result = await getAllTable();
        return result;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})

export const addNewContactThunk = createAsyncThunk('contact/addNewContact', async (data, { rejectWithValue }) => {
    try {
        const response = await addContact(data)
        toast(`Contact ${data.name} added successfully`);
        return response;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})

export const deleteContactThunk = createAsyncThunk('contact/deleteContact', async (id, { rejectWithValue }) => {
    try {
        await deleteContact(id);
        toast(`Contact deleted successfully`);
        return id;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})

export const updateContactThunk = createAsyncThunk('contact/updateContact', async (data, { rejectWithValue }) => {
    try {

        const upData = await updateContact(data);
        toast(`Contact ${data.name} updated successfully`);
        return upData;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})