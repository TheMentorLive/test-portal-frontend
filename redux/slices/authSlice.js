/* eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  toast  from "react-hot-toast";
import axiosInstance from '../../config/axiosInstance.js';

// Initialize state with default values, check for client-side access
const initialState = {
  isLoggedIn: typeof window !== 'undefined' ? localStorage.getItem("isLoggedIn") === 'true' : false,
  role: typeof window !== 'undefined' ? localStorage.getItem("role") || "" : "",
  data: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("data")) || {} : {}
};

export const createAccount = createAsyncThunk('/auth/signup', async (data, { rejectWithValue }) => {
  try {
    const response =  axiosInstance.post("users/signup", data);
    toast.promise(response, {
      loading: 'Wait, creating your account...',
      success: 'Account created successfully!',
      error: 'Failed to create account'
    });
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message || 'An error');
    return rejectWithValue(e?.response?.data || 'An error occurred');
  }
});

export const login = createAsyncThunk('/auth/signin', async (data, { rejectWithValue }) => {
  try {
    const response =  axiosInstance.post("users/login", data);
    toast.promise(response, {
      loading: 'Wait, authenticating you...',
      success: (data) => data?.data?.message || 'Logged in successfully!',
      error: 'Failed to authenticate you'
    });
    return response;
  } catch (e) {
    toast.error(e?.response?.data?.message || 'An error occurred');
    return rejectWithValue(e?.response?.data || 'An error occurred');
  }
});

export const googleSinup = createAsyncThunk('/auth/google', async () => {
  try {
    // window.location.href = "http://localhost:8000/api/v1/users/auth/google";
    window.location.href = "https://test-platform-backend.onrender.com/api/v1/users/auth/google";

  } catch (e) {
    toast.error("An error occurred");
  }
});

export const linkedinSignup = createAsyncThunk('/auth/linkedin', async () => {
  try {
    // window.location.href = "http://localhost:8000/api/v1/users/auth/linkedin";
    window.location.href = "https://test-platform-backend.onrender.com/api/v1/users/auth/linkedin";
  } catch (e) {
    toast.error("An error occurred");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
      state.isLoggedIn = false;
      state.role = "";
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem("data", JSON.stringify(action.payload.data));
          localStorage.setItem("isLoggedIn", 'true');
          localStorage.setItem("role", action.payload.data.user?.role || "");
        }
        state.isLoggedIn = true;
        state.role = action.payload.data.user?.role || "";
        state.data = action.payload.data || {};
      })
  }
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
