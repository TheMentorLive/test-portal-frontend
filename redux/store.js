import {configureStore} from '@reduxjs/toolkit'

import authReducer from './slices/authSlice.js';
import questionsReducer from './slices/questionSlice.js';
import testReducer from './slices/testSlice.js';
import resultReducer from './slices/resultSlice.js';
import paymentReducer from './slices/paymentSlice.js';
import dashboardReducer from './slices/dashboardSlice.js';

const store = configureStore({
    reducer:{
        auth: authReducer,
        questions: questionsReducer,
        test: testReducer,
        result: resultReducer,
        payment: paymentReducer,
        dashboard: dashboardReducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({serializableCheck:false}),
    devTools:true
});

export default store;