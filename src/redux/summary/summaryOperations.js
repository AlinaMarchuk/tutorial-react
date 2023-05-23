import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSummary } from 'components/api/getSummary';

export const getSummaryOperation = createAsyncThunk(
  'summary/getSummary',
  async (_, thunkAPI) => {
    try {
      const { data } = await getSummary();
      return data;
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
