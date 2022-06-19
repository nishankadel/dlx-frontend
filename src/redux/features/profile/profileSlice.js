import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ProfileAPI from "./profileAPI";

export const profile = createAsyncThunk(
  "user/profile",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await ProfileAPI.getProfile(token);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isLoading: false,
    profile: null,
    error: null,
  },
  extraReducers: {
    [profile.pending]: (state, action) => {
      state.isLoading = true;
    },
    [profile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    },
    [profile.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const getUser = (state) => state.profile;
export default profileSlice.reducer;
