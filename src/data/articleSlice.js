import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllData = createAsyncThunk('get-article-list', async (url) => {
    const response = await fetch(url)
    return response.json()
})

const articlesSlice = createSlice({
    name: 'article-list',
    initialState: {
        data: [], fetchStatus: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllData.fulfilled, (state, action) => {
            state.data = action.payload
            state.fetchStatus = 'success'
        }).addCase(fetchAllData.pending, (state) => {
            state.fetchStatus = 'loading'
        }).addCase(fetchAllData.rejected, (state) => {
            state.fetchStatus = 'error'
        })
    }

})

export default articlesSlice