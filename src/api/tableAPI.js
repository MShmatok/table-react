import { instance } from './authAPI'

export const getAllTable = async (filter) => {

    let { data: { results, count } } = await instance(`/table/?limit=1000&offset=0&name=${filter.searchName}&email=${filter.searchEmail}&birthday_date=${filter.searchBirthday_date}&phone_number=${filter.searchPhone_number}&address=${filter.searchAddress}`);

    if (count > 1000) {
        const data = await instance(`/table/?limit=${count}&offset=0&name=${filter.searchName}&email=${filter.searchEmail}&birthday_date=${filter.searchBirthday_date}&phone_number=${filter.searchPhone_number}&address=${filter.searchAddress}`);
        results = data.results;
    }
    return results
}

export const addContact = async (data) => {
    const response = await instance.post('/table', {
        name: data.name,
        number: data.number,
    })
    return response.data;
}

export const deleteContact = async (id) => {
    await instance.delete(`/table/${id}/`)
}

export const updateContact = async ({ id, name, email, birthday_date, phone_number, address }) => {
    const body = { name, email, birthday_date, phone_number, address };
    if (!address) {
        delete body.address;
    }

    const { data } = await instance.put(`/table/${id}/`, body);
    return data;
}
