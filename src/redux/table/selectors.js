import { createSelector } from "@reduxjs/toolkit";

export const selectAllTable = state => state.contact.Table.items;
export const selectIsLoading = state => state.contact.isLoading;
export const selectorIsLoading = state => state.contact.isLoading;
export const selectorIsOpenModal = state => state.contact.dataForUpdate;
export const selectorDataForModal = state => state.contact.dataForUpdate;
const selectFilter = state => state.contact.filter;

export const selectorFilteredTable = createSelector([selectAllTable, selectFilter], (allTable, filter) => {
    return allTable.filter(item => {
        return item.name
            .trim()
            .toLocaleLowerCase()
            .includes(filter.trim().toLocaleLowerCase());
    })
});