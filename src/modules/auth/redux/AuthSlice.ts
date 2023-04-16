import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../api/userApi";

export const login = createAsyncThunk("auth/login", async (payload: any) => {
  const { data } = await userApi.login(payload);

  const user = data.data;

  return user;
});

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
  },

  reducers: {},

  extraReducers: {
    [login.fulfilled]: (state: any, action: any) => {
      state.currentUser = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export default reducer;
