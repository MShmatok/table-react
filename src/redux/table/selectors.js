import { createSelector } from "@reduxjs/toolkit";

export const selectAllTable = state => state.table.table.items;
export const selectIsLoading = state => state.table.isLoading;
export const selectorIsLoading = state => state.table.isLoading;
export const selectorIsOpenModal = state => state.table.dataForUpdate;
export const selectorDataForModal = state => state.table.dataForUpdate;
const selectFilter = state => state.table.filter;

export const selectorFilteredTable = createSelector([selectAllTable, selectFilter], (allTable, filter) => {
    return allTable.filter(item => {
        return item.name
            .trim()
            .toLocaleLowerCase()
            .includes(filter.trim().toLocaleLowerCase());
    })
});