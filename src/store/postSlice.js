import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts} from '../services/PostService';

export const getPostsfromApi = createAsyncThunk('posts/getPosts', async (payload, { dispatch }) => {
    
    const response = await getPosts();
    console.log("*****888********888*8****888********",response);
	return response;
});

const decksSlice = createSlice({
	name: 'decksState',
	initialState: {
		posts: [],
		loading: 'idle',

	},
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPostsfromApi.pending, (state, action) => {
				state.loading = 'pending';
			})

			.addCase(getPostsfromApi.fulfilled, (state, action) => {
				state.posts = action.payload;
				state.loading = 'fullfilled';
			})
	
	},
});



export default decksSlice.reducer;
