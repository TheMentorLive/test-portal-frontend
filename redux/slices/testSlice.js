import toast from "react-hot-toast";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";

const intialState = {
    test: null,
    testList: [],
    allowedTests: []
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

export const fetchAllTests = createAsyncThunk('test/fetchAllTests', async () => {
    try {
        const response =  axiosInstance.get('/tests');
        toast.promise(Promise.resolve(response), {
            loading: 'Fetching tests...',
            success: 'Tests fetched successfully',
            error: 'Failed to fetch tests'
        });
        return (await response).data;
    } catch (error) {
        toast.error('Failed to fetch tests');   
    }
});

export const isElgibleForTest = createAsyncThunk('test/isElgibleForTest', async (id) => {
    try {
        console.log("id",id);
        const response = await axiosInstance.post(`/payment/is-elgiblefor-test`,{testId:id});
        console.log(response.data);
        return response.data;
    } catch (error) {
        toast.error('Failed to check eligibility');   
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
        })
        .addCase(fetchAllTests.fulfilled, (state, action) => {
            console.log("action",action.payload);
            state.testList = [...action.payload?.data];
        })
        .addCase(isElgibleForTest.fulfilled, (state, action) => {
            console.log("action e",action.payload);
            state.allowedTests = action.payload?.data?.payment;
        })
    }
});

export default testSlice.reducer;