import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from '../../config/axiosInstance.js';

const initialState = {
  questions: [],
  question: null,
  loading: false,
  error: null,
};

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/questions');
      console.log(response);
      toast.promise(Promise.resolve(response), {
        error: "Unable to fetch Questions",
        loading: "Fetching Questions",
        success: "Questions Fetched Successfully"
      });
      return (response.data); // Ensure response.data is returned
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getQuestionById = createAsyncThunk(
  'questions/getQuestion',
  async (id, { rejectWithValue }) => {
    try {
      console.log("id is",id);
      const response = await axiosInstance.get(`/questions/${id}`);
      toast.promise(Promise.resolve(response), {
        error: "Unable to fetch Question",
        loading: "Fetching Question",
        success: "Question Fetched Successfully"
      });
      console.log("question is",response.data);
      return response.data; // Ensure response.data is returned
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createQuestion = createAsyncThunk(
  'questions/createQuestion',
  async (newQuestion, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/questions', newQuestion);
      toast.promise(Promise.resolve(response), {
        error: "Unable to Create Question",
        loading: "Creating Question",
        success: "Question Created Successfully"
      });
      return response.data; // Ensure response.data is returned
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteQuestion = createAsyncThunk(
  'questions/deleteQuestion',
  async (id, { rejectWithValue }) => {
    try {
      const response =  axiosInstance.delete(`/questions/${id}`);
      toast.promise(response,{
        error: "Unable to Delete Question",
        loading: "Deleting Question",
        success: "Question Deleted Successfully"
      })
      return response; // Return id for deletion
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        console.log("Questions Fetched Successfully",action.payload.data);
        state.loading = false;
        state.questions = action.payload?.data;

      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createQuestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.questions.push(action.payload);
      })
      .addCase(createQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteQuestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = state.questions.filter(
          (question) => question._id !== action.payload
        );
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default questionSlice.reducer;
