import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegisterUserLoading: false,
  isRegisterUserSuccess: false,
  isRegisterUserError: false,
};

const registerUserSlice = createSlice({
  name: "registerUser",
  initialState,
  reducers: {
    initRegisterUser: (state, action) => {
      state.isRegisterUserLoading = true;
      state.isRegisterUserSuccess = false;
      state.isRegisterUserError = false;
    },
    registerUserSuccess: (state) => {
      state.isRegisterUserLoading = false;
      state.isRegisterUserSuccess = true;
      state.isRegisterUserError = false;
    },
    registerUserError: (state) => {
      state.isRegisterUserLoading = false;
      state.isRegisterUserSuccess = false;
      state.isRegisterUserError = true;
    },
  },
});

export const { initRegisterUser, registerUserSuccess, registerUserError } =
  registerUserSlice.actions;

export default registerUserSlice.reducer;
