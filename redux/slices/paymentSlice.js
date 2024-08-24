import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance.js";
import toast from "react-hot-toast";

const initialState = {
    key:"",
    orderResponse:{},
    allPayments:{},
    finalMonths:{},
    monthlySalesRecord:[]
};


export const getRazorPayId = createAsyncThunk("/razorPay/getId" , async () => {
    try {
        const response = await axiosInstance.get("/payment/getrazorpaykey");
        console.log("razorpayid",await response.data);
        return response.data;
    } catch (error){
        toast.error("failed to get the razorpay key.");
    }
});

export const purchaseTest = createAsyncThunk("/purchaseTes" , async (data) => {
    try {
        const response = await axiosInstance.post("/payment/checkout",{...data});
        // console.log("purchaseTest",await response.data);
        return  response.data;
    } catch (error){
        toast.error(error?.response?.data?.message);
    }
});

export const getPaymentRecord = createAsyncThunk("/payments/record" , async () => {
    try {
        const response =  axiosInstance.get("/payments?count=100");
        return (await response).data;
    } catch (error){
        toast.error(error?.response?.data?.message);
    }
});


export const verifyUserPayment = createAsyncThunk("/payment/verify" , async (data) => {
    try {
        const response = await axiosInstance.post("/payment/verify",data);
        console.log("verifyUserPayment",await response.data);
        return response.data;
    } catch (error){
        toast.error(error?.data?.message);
    }
});

const razorPaySlice = createSlice({
    name: "razorPay",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getRazorPayId.fulfilled, (state, action) => {
            state.key = action?.payload?.data?.key;
        })
        .addCase(purchaseTest.fulfilled, (state, action) => {
            console.log("payements: razorpay", action?.payload?.data);
            state.orderResponse = {...action?.payload?.data};
        })
        .addCase(getPaymentRecord.fulfilled, (state, action) => {
            console.log("payents: razorpay", action?.payload?.allPayments);
            state.allPayments = action?.payload?.allPayments;
            state.finalMonths = action?.payload?.finalMonths;
            state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
            console.log(action?.payload);
        })

    }
});


export default razorPaySlice.reducer;