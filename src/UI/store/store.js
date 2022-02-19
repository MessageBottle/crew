import { configureStore } from '@reduxjs/toolkit';

import crewsReducer from './features/crewsSlice';
import userReducer from './features/userSlice';

const store = configureStore({
    reducer: {
        crews: crewsReducer,
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
