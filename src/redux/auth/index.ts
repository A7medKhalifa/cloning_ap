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
        changeTempData: (state, action) => { state.tempData = action.payload },
        changeDone: (state, action) => { state.Done = action.payload },
        changeOTPDone: (state, action) => { state.DoneOTP = action.payload },
    },
    extraReducers(builder) {
        //doSignUpStep1
        builder.addCase(thunks.doSignUpStep1.fulfilled, (state, action) => {
            state.Done = true
        });
        builder.addCase(thunks.doSignUpStep1.rejected, (state, action: any) => {
            console.log(action.payload.data)
        });

        //doSignUpStep2
        builder.addCase(thunks.doSignUpStep2.fulfilled, (state, action) => {
            state.Done = true
        });
        builder.addCase(thunks.doSignUpStep2.rejected, (state, action: any) => {
            console.log(action.payload.data)
        });
    },
})
export const selectLang = (state: RootState) => state.auth.lang
export const selectDone = (state: RootState) => state.auth.Done
export const selectOTPDone = (state: RootState) => state.auth.DoneOTP
export const selectTempData = (state: RootState) => state.auth.tempData


const AuthSlice = {
    thunks,
    slice,
    logout: slice.actions.logout,
    changeLang: slice.actions.changeLang,
    changeTempData: slice.actions.changeTempData,
    changeDone: slice.actions.changeDone,
    changeOTPDone: slice.actions.changeOTPDone,
}
export default AuthSlice