import {configureStore} from '@reduxjs/toolkit'

import authReducer from './slices/authSlice.js';
import questionsReducer from './slices/questionSlice.js';
import testReducer from './slices/testSlice.js';

const store = configureStore({
    reducer:{
        auth: authReducer,
        questions: questionsReducer,
        test: testReducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({serializableCheck:false}),
    devTools:true
});

export default store;