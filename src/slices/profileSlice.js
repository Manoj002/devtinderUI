import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGetProfileLoading: false,
  isGetProfileError: false,
  userProfileDetails: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    initGetProfile: (state, action) => {
      state.isGetProfileLoading = true;
      state.isGetProfileError = false;
      state.userProfileDetails = null;
    },
    getProfileSuccess: (state, action) => {
      state.isGetProfileLoading = false;
      state.isGetProfileError = false;
      state.userProfileDetails = action.payload;
    },
    getProfileError: (state) => {
      state.isGetProfileLoading = false;
      state.isGetProfileError = true;
      state.userProfileDetails = null;
    },
  },
});

export const { initGetProfile, getProfileSuccess, getProfileError } =
  profileSlice.actions;

export default profileSlice.reducer;
