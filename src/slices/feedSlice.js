import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFeedLoading: false,
  isFeedError: false,
  feedData: null,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    getFeed: (state, action) => {
      state.isFeedLoading = true;
      state.isFeedError = false;
      state.feedData = null;
    },
    getFeedSuccess: (state, action) => {
      state.isFeedLoading = false;
      state.isFeedError = false;
      state.feedData = action.payload;
    },
    getFeedError: (state, action) => {
      state.isFeedLoading = false;
      state.isFeedError = true;
      state.feedData = null;
    },
  },
});

export const { getFeed, getFeedSuccess, getFeedError } = feedSlice.actions;

export default feedSlice.reducer;
