// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import articlesSlice from "./articleSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, articlesSlice.reducer);

const store = configureStore({
    reducer: {
        articleList: persistedReducer, // Use the persisted reducer here
    },
});

export const persistor = persistStore(store); // Create a persistor

export default store;
