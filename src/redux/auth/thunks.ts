import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthAPI from "./api";

const doSignUpStep1: any = createAsyncThunk<any, any, any>(
    'auth/signUp1',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.sign_up_step1(data);
            // alert(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doSignUpStep2: any = createAsyncThunk<any, any, any>(
    'auth/signUp2',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.sign_up_step2(data);
            // alert(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const AuthThunks = {
    doSignUpStep1,
    doSignUpStep2
};

export default AuthThunks;

