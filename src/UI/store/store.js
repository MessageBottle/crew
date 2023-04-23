import { combineReducers, configureStore } from '@reduxjs/toolkit';

import crewReducer from './crew/slice';
import queryReducer from './query/slice';
import userReducer from './user/slice';

const rootReducer = combineReducers({
    crew: crewReducer,
    query: queryReducer,
    user: userReducer,
});

export default configureStore({
    reducer: rootReducer,
});
