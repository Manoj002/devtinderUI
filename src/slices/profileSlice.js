import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGetProfileLoading: false,
  isUpdateProfileLoading: false,
  isUpdateProfileError: false,
  isUpdateProfileSuccess: false,
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
    editProfile: (state, action) => {
      state.isUpdateProfileLoading = true;
      state.isUpdateProfileError = false;
      state.isUpdateProfileSuccess = false;
    },
    editProfileSuccess: (state) => {
      state.isUpdateProfileLoading = false;
      state.isUpdateProfileSuccess = true;
      state.isUpdateProfileError = false;
    },
    editProfileError: (state, action) => {
      state.isUpdateProfileLoading = false;
      state.isUpdateProfileSuccess = false;
      state.isUpdateProfileError = true;
    },
  },
});

export const {
  initGetProfile,
  getProfileSuccess,
  getProfileError,
  editProfile,
  editProfileSuccess,
  editProfileError,
} = profileSlice.actions;

export default profileSlice.reducer;
