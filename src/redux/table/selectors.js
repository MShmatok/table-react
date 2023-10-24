export const selectAllTable = state => state.table.table.items;
export const selectorIsLoading = state => state.table.isLoading;

export const selectorDataForModal = state => state.table.dataForUpdate;
export const selectorDataForModalAdd = state => state.table.dataForAdd;

export const selectFilter = state => state.table.filter;

export const selectFilterName = state => state.table.filter.searchName;
export const selectFilterEmail = state => state.table.filter.searchEmail;
export const selectFilterBirthday_date = state => state.table.filter.searchBirthday_date;
export const selectFilterPhone_number = state => state.table.filter.searchPhone_number;
export const selectFilterAddress = state => state.table.filter.searchAddress;

export const selectorFilteredTable = state => state.table.table.items;
