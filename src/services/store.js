import { configureStore } from '@reduxjs/toolkit'
import userReducer from './actions';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'userdata',
    storage,
};

const reducers = combineReducers({ userobject: userReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});