import axios from "axios";
export const instance = axios.create({ baseURL: 'https://technical-task-api.icapgroupgmbh.com/api/' });

// work  with token save/delete
const setToken = (token) => {
    localStorage.setItem('token', token);
}
const deleteToken = () => {
    localStorage.setItem('token', '');
}

// work  with API singIn
export const refreshUser = async () => {
    const token = localStorage.getItem('token');
    return { token, userName: 'testuser' };
}
export const login = async (dataUser) => {
    await instance.post('/login/', dataUser);
    setToken('token valid');
    return { token: 'token valid', userName: 'testuser' };
}

export const logOut = async () => {
    deleteToken();
}



