import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';
import toast from 'react-hot-toast';
import { all } from 'axios';

const initialState = {
    allUsers: {
        count: 0,
        data: [],
    },
    Payments: {},
};

export const fetchAllUsers = createAsyncThunk('dashboard/fetchAllUsers', async () => {
    try {
        const response = await axiosInstance.get('/users');
        return response.data;
    } catch (error) {
        toast.error('Failed to fetch users');
    }
});

export const getAllPayments = createAsyncThunk('dashboard/getAllPayments', async () => {
    try {
        const response = await axiosInstance.get('/payment/all-payments');
        return response.data;
    } catch (error) {
        toast.error('Failed to fetch payments');
    }
});


const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
    },
    extraReducers:(builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            // console.log("action payload is",action.payload);
            state.allUsers.count = action.payload?.data?.count;
            state.allUsers.data = action.payload?.data?.users;
        })
        .addCase(getAllPayments.fulfilled, (state, action) => {
            state.Payments = action.payload?.data;
        });
    }
});

export default dashboardSlice.reducer;