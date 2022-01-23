import { configureStore } from '@reduxjs/toolkit';
import crewReducer from './crew/crewSlice';
import userReducer from './user/userSlice';

export default configureStore({
    reducer: {
        crew: crewReducer,
        user: userReducer,
    },
});
