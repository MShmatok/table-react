import { createSelector } from "@reduxjs/toolkit";

export const selectAllTable = state => state.table.table.items;
export const selectIsLoading = state => state.table.isLoading;
export const selectorIsLoading = state => state.table.isLoading;
export const selectorIsOpenModal = state => state.table.dataForUpdate;
export const selectorDataForModal = state => state.table.dataForUpdate;
export const selectFilter = state => state.table.filter;


export const selectFilterName = state => state.table.filter.name;
export const selectFilterEmail = state => state.table.filter.email;
export const selectFilterBirthday_date = state => state.table.filter.birthday_date;
export const selectFilterPhone_number = state => state.table.filter.phone_number;
export const selectFilterAddress = state => state.table.filter.address;



export const selectorFilteredTable = state => state.table.table.items;
// export const selectorFilteredTable = createSelector([selectAllTable, selectFilter], (allTable, filter) => {
//     return allTable.filter(item => {
//         return item.name
//             .trim()
//             .toLocaleLowerCase()
//             .includes(filter.trim().toLocaleLowerCase());
//     })
// });