import toast from "react-hot-toast";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

const intialState = {
    test: null,
}

export const fetchTest = createAsyncThunk('test/fetchTest', async (id) => {
    try {
        const response = await axiosInstance.get(`/tests/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        toast.error('Failed to fetch test');   
    }
});

export const submitTest = createAsyncThunk('test/submitTest', async (data) => {
    try {
        const response =  axiosInstance.post('/submission', data);
        toast.promise(Promise.resolve(response), {
            loading: 'Submitting test...',
            success: 'Test submitted successfully',
            error: 'Failed to submit test'
        });
        return true;
    } catch (error) {
        toast.error('Failed to submit test');  
    }
});

const testSlice = createSlice({
    name: 'test',
    initialState: intialState,
    reducers: {
        clearTest: (state) => {
            state.test = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTest.fulfilled, (state, action) => {
            state.test = action.payload?.data;
        })
        .addCase(submitTest.fulfilled, (state, action) => {
            state.test = null;
    });
    }
});

export default testSlice.reducer;