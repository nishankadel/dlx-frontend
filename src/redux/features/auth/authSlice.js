import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "./authAPI";

export const login = createAsyncThunk(
  "auth/login",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const { data } = await AuthApi.signIn(formData);

      if (data.success === false) {
        toast.error(data.message);
        navigate("/auth/login");
      }
      if (data.success === true) {
        toast.success(data.message);
        navigate("/");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const { data } = await AuthApi.signUp(formData);
      console.log(data);
      if (data.success === false) {
        toast.error(data.message);
        navigate("/auth/register");
      }
      if (data.success === true) {
        toast.success(data.message);
        navigate("/auth/login");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    userData: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.removeItem("profile");
      state.userData = null;
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      if (typeof action.payload.token !== "undefined") {
        localStorage.setItem("profile", JSON.stringify(action.payload.token));

        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      } else {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userData = action.payload;
      }
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },

    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      if (typeof action.payload.token !== "undefined") {
        localStorage.setItem("profile", JSON.stringify(action.payload.token));
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userData = action.payload;
      } else {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userData = action.payload;
      }
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;
export const selectUser = (state) => state.auth;
export default authSlice.reducer;
