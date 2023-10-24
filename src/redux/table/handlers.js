export const handlerGetAllData = (state, { payload }) => {
    state.table.items = payload;
}

export const handlerAddNewContact = (state, { payload }) => {
    state.table.items.push(payload);
}

export const handlerDeleteContact = (state, { payload }) => {
    state.table.items = state.table.items.filter((el) => el.id !== payload);
}

export const updateContactContact = (state, { payload }) => {
    const array = state.table.items;
    let indexContactUpdate;
    for (let index = 0; index < array.length; index++) {
        if (array[index].id === payload.id) {
            indexContactUpdate = index;
            break;
        }
    }
    array[indexContactUpdate] = payload;

}


export const handlePending = (state) => {
    state.table.isLoading = true;
    state.table.error = '';
}
export const handleFulfilled = (state) => {
    state.table.isLoading = false;
}
export const handleRejected = (state, { error }) => {
    state.table.isLoading = false;
    state.table.error = error.message;
}

