/* eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  toast  from "react-hot-toast";
import axiosInstance from '../../config/axiosInstance.js';
import axios from "axios";

// Initialize state with default values, check for client-side access
const initialState = {
  isLoggedIn: typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') === 'true' : false,
  role: typeof window !== 'undefined' ? localStorage.getItem('role') : "",
  data: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('data')) : {},
};
export const createAccount = createAsyncThunk('/auth/signup', async (data, { rejectWithValue }) => {
  try {
    const response =  axiosInstance.post("users/signup", data);
    toast.promise(response, {
      loading: 'Wait, creating your account...',
      success: 'Account created successfully!',
      error: 'Failed to create account'
    });
    return (await response).data;
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
    return (await response);
  } catch (e) {
    toast.error(e?.response?.data?.message || 'An error occurred');
    return rejectWithValue(e?.response?.data || 'An error occurred');
  }
});

export const googleSinup = createAsyncThunk('/auth/google', async () => {
  try {
    // window.location.href = "http://localhost:8000/api/v1/users/auth/google";
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

export const logout = createAsyncThunk('/auth/logout', async () => {
  try {
    const response = axiosInstance.post("users/logout");
    console.log(response);
    toast.promise(response, {
      loading: 'Logging you out...',
      success: 'Logged out successfully!',
      error: 'Failed to log you out'
    });
    return response;
  } catch (e) {
    toast.error("An error occurred");
    return false;
  }
});

export const updatePassword = createAsyncThunk('/auth/updatePassword', async (data, { rejectWithValue }) => {
  try {
    const response =  axiosInstance.put("/users/update-password", data);
    toast.promise(response, {
      loading: 'Updating your password...',
      success: 'Password updated successfully!',
      error: 'Failed to update password'
    });
    return true;
  } catch (e) {
    toast.error(e?.response?.data?.message || 'An error occurred');
    return rejectWithValue(e?.response?.data || 'An error occurred');
  }
});

export const forgotPassword = createAsyncThunk('/auth/forgotPassword', async (data, { rejectWithValue }) => {
  try {
    const response = axiosInstance.post('/users/request-password-reset',data);
    toast.promise(Promise.resolve(response), {
      loading: 'Sending you a reset link...',
      success: 'Reset link sent successfully!',
      error: 'Failed to send reset link'
    });
    return true;
  } catch (e) {
    toast.error(e?.response?.data?.message || 'An error occurred');
    return rejectWithValue(e?.response?.data || 'An error occurred');
  }
});

export const resetPassword = createAsyncThunk('/auth/resetPassword',async(data)=>{
  try {
    const response = axiosInstance.post('/users/reset-password',data);
    toast.promise(Promise.resolve(response),{
      loading:'updating your Password',
      success:'Your Password is Updated',
      error:'Unable to update your Password'
    });
    return true;
  } catch (error) {
    toast.error('Network Error While updating your password');
    return false;
  }
})

export const getDetails = createAsyncThunk('/auth/getDetails', async (data, { rejectWithValue }) => {
  try {
    const response =  axiosInstance.get(`/users/get-details`);
    toast.promise(response, {
      loading: 'Fetching your details...',
      success: 'Details fetched successfully!',
      error: 'Failed to fetch details'
    });
    return  response;
  } catch (e) {
    toast.error(e?.response?.data?.message || 'An error occurred');
    return rejectWithValue(e?.response?.data || 'An error occurred');
  }
});

export const deleteUser = createAsyncThunk('/auth/deleteUser', async (data, { rejectWithValue }) => {
  try {
    console.log("data is",data);
    const response =  axiosInstance.delete(`/users/${data}`);
    toast.promise(response, {
      loading: 'Deleting your account...',
      success: 'Account deleted successfully!',
      error: 'Failed to delete account'
    });
    return true;
  } catch (e) {
    toast.error(e?.response?.data?.message || 'An error occurred');
    return rejectWithValue(e?.response?.data || 'An error occurred');
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        console.log("action payload",action.payload.data);
        if(typeof window !== 'undefined'){
          localStorage.setItem('isLoggedIn',true);
          console.log("role is",action.payload.data.data?.user?.role);
          console.log("data is",action.payload.data.data?.user);
          localStorage.setItem('role',action.payload.data.data?.user?.role);
          localStorage.setItem('data',JSON.stringify(action.payload.data.data?.user));
        }
        state.isLoggedIn = true;
        state.role = action.payload.data?.user?.role || "";
        state.data = action.payload.data?.user || {};
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        // console.log("action payload",action.payload.data);
        console.log("action payload getd",action.payload.data);
        console.log("state",state);
        if(typeof window !== 'undefined'){
          localStorage.setItem('isLoggedIn',true);
          localStorage.setItem('role',action.payload.data.data?.user?.role);
          localStorage.setItem('data',JSON.stringify(action.payload.data.data?.user));
        }
        state.isLoggedIn = true;
        state.role = action.payload.data.data?.user?.role || "";
        state.data = action.payload.data.data?.user || {};
      })
      .addCase(logout.fulfilled, (state, action) => {
        if(typeof window !== 'undefined'){
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('role');
          localStorage.removeItem('data');
        }
        return initialState;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        console.log("signup is",action.payload.data);
        state.isLoggedIn = true;
        state.role = action.payload.data.role || "";
        state.data = action.payload.data || {};
      })
  }
});

export default authSlice.reducer;
