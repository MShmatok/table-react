export const handlerAllProducts = (state, { payload }) => {
    state.Table.items = payload;
}

export const handlerAddNewContact = (state, { payload: { name, id, number } }) => {
    state.Table.items.push({ name, id, number });
}

export const handlerDeleteContact = (state, { payload }) => {
    state.Table.items = state.Table.items.filter((el) => el.id !== payload);
}

export const updateContactContact = (state, { payload }) => {
    const array = state.Table.items;
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
    state.Table.isLoading = true;
    state.Table.error = '';
}
export const handleFulfilled = (state) => {
    state.Table.isLoading = false;
}
export const handleRejected = (state, { error }) => {
    state.Table.isLoading = false;
    state.Table.error = error.message;
}

