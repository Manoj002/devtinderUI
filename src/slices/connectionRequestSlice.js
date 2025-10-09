import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnectionRequestLoading: false,
  isConnectionRequestSuccess: false,
  isConnectionRequestError: false,
  isConnectionRequestData: null,
};

const connectionRequestSlice = createSlice({
  name: "connectionRequest",
  initialState,
  reducers: {
    initConnectionRequest: (state, action) => {
      state.isConnectionRequestLoading = true;
      state.isConnectionRequestSuccess = false;
      state.isConnectionRequestError = false;
      state.isConnectionRequestData = null;
    },
    connectionRequestSuccess: (state, action) => {
      state.isConnectionRequestLoading = false;
      state.isConnectionRequestSuccess = true;
      state.isConnectionRequestError = false;
      state.isConnectionRequestData = action.payload;
    },
    connectionRequestError: (state, action) => {
      state.isConnectionRequestLoading = false;
      state.isConnectionRequestSuccess = false;
      state.isConnectionRequestError = true;
      state.isConnectionRequestData = null;
    },
  },
});

export const {
  initConnectionRequest,
  connectionRequestSuccess,
  connectionRequestError,
} = connectionRequestSlice.actions;

export default connectionRequestSlice.reducer;
