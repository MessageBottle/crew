import { configureStore } from '@reduxjs/toolkit';

import crewReducer from './features/crewSlice';
import userReducer from './features/userSlice';

const store = configureStore({
    reducer: {
        crew: crewReducer,
        user: userReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // TODO: remove these ignores for non-serializability of userImpl which is received from firebase
            serializableCheck: {
                ignoredActions: ['user/userSignedIn'],
                ignoredPaths: ['user.data'],
            },
        }),
});

export default store;
