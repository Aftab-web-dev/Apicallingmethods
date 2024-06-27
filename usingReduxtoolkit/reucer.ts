import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { TrafficPointGetResponse } from '../../models/api/TrafficPointApi';

interface initialStateType {
    loading: boolean,
    error: string|null,
    success: TrafficPointGetResponse|'',
}
const initialState:initialStateType = {
  loading: false,
  error: null,
  success: '',
};

export const busStopsSubmission:any = createAsyncThunk(
  'posts/busStopsSubmission',
  async (postData:any, { rejectWithValue }) => {
    try {
        const headers = {
            token: 'test-my-token-authentication',
            'Content-Type': 'application/json',
          };
      const response = await axios.post(${BASE_URL}workflowapis-tcpo/811/6980/v1/workitem/new/create,postData,{headers});
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postSlice:any = createSlice({
  name: 'post',
  initialState,
  reducers: {
      resetState: (state) => {
        state.loading = initialState.loading;
        state.error = initialState.error;
        state.success = initialState.success;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(busStopsSubmission.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = '';
      })
      .addCase(busStopsSubmission.fulfilled, (state,action:any) => {
        state.loading = false;
        state.success = action.payload;
        state.error = '';
      })
      .addCase(busStopsSubmission.rejected, (state:any, action:any) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : 'Failed to create post';
        state.success = '';
      });
  },
});

// // Export the async thunk and reducer

export const {resetState} = postSlice.actions;
export default postSlice.reducer;
