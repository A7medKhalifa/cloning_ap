import { createSlice } from "@reduxjs/toolkit";
import { EntityKeys } from "src/redux/keys";
import { RootState } from "../store";
import { initialState } from "./types";
import thunks from "./thunks";



const slice = createSlice({
    name: EntityKeys.AUTH,
    initialState: initialState,
    reducers: {
        logout: () => initialState,
        changeLang: (state, action) => { state.lang = action.payload },
    },
    extraReducers(builder) {

    },
})
export const selectLang = (state: RootState) => state.auth.lang


const AuthSlice = {
    thunks,
    slice,
    logout: slice.actions.logout,
    changeLang: slice.actions.changeLang
}
export default AuthSlice