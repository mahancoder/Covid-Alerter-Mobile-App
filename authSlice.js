import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    sessionId: '',
  },
  reducers: {
    empty: state => {
      state.sessionId = '';
    },
    set: (state, action) => {
      state.sessionId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {empty, set} = authSlice.actions;

export default authSlice.reducer;
