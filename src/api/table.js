import { instance } from './auth'

export const getAllTable = async () => {
    const { data: { count } } = await instance('/table/');
    const { data: { results } } = await instance(`/table/?limit=${count}&offset=0`);
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
    await instance.delete(`/table/${id}`)
}

export const updateContact = async ({ id, name, number }) => {
    const { data } = await instance.patch(`/table/${id}`, { name, number });
    return data;
}
