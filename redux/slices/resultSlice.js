import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInstance";
import toast from "react-hot-toast";


const intialState = {
    result: null,
    testSummary: null,
}

export const getSubmissions = createAsyncThunk('result/getSubmissions', async () => {
    try {
        const response =  axiosInstance.get('/submission');
        toast.promise(response, {
            loading: 'Fetching submissions...',
            success: 'Submissions fetched successfully',
            error: 'Failed to fetch submissions'
        });
        // console.log("respone in slice",(await response).data);
        return (await response).data.data;
    } catch (error) {
        toast.error('Failed to fetch submissions');
    }
});

export const fetchResult = createAsyncThunk('result/fetchResult', async (id) => {
    try {
        const response =  axiosInstance.post(`/results/${id}`);
        toast.promise(response, {
            loading: 'Fetching result...',
            success: 'Result fetched successfully',
            error: 'Failed to fetch result'
        }); 
        return (await response).data;
    } catch (error) {
        toast.error('Failed to fetch result');   
    }
});

export const fecthTestSummary = createAsyncThunk('result/fetchTestSummary', async (id) => {
    try {
        const response =  axiosInstance.get(`/results/test-summary/${id}`);
        toast.promise(response, {
            loading: 'Fetching test summary...',
            success: 'Test summary fetched successfully',
            error: 'Failed to fetch test summary'
        });
        return (await response).data;
    } catch (error) {
        toast.error('Failed to fetch test summary');
    }
}); 

const resultSlice = createSlice({
    name: 'result',
    initialState: intialState,
    reducers: {
        clearResult: (state) => {
            state.result = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchResult.fulfilled, (state, action) => {
            // console.log("action",action.payload);
            state.result = action.payload?.data;
        });
    }
});

export const { clearResult } = resultSlice.actions;
export default resultSlice.reducer;
