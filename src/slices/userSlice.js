import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  userDetails: null,
};

const userSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.userDetails = null;
    },
    loginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.userDetails = action.payload;
    },
    loginUserFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
      state.userDetails = null;
    },

    logoutUser: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.userDetails = null;
    },

    logoutUserSuccess: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.userDetails = null;
    },
  },
});

export const {
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  logoutUser,
  logoutUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
