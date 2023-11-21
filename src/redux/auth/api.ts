import { api } from "../_axios"

const login = (body: any) => api.post('login', body)


const AuthAPI = {
    login,
};

export default AuthAPI;
