import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./articleSlice";

const store = configureStore({
    reducer: {
        articleList: articlesSlice.reducer,
    }
})

export default store