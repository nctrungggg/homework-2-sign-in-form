import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import countryApi from "../../../api/countryApi";
import userApi from "../../../api/userApi";
import { StorageKeys } from "../../../constants/constants";

export const login = createAsyncThunk("auth/login", async (payload: any) => {
  const { data } = await userApi.login(payload);

  const user = data.data;
  console.log(user);

  // save data to local storage
  sessionStorage.setItem(StorageKeys.TOKEN, user.token);
  sessionStorage.setItem(StorageKeys.USER, JSON.stringify(user));

  return user;
});

export const register = createAsyncThunk(
  "auth/register",
  async (payload: any) => {
    const data = await userApi.register(payload);
    console.log(data);

    const userRigister = data.data;

    // save data to local storage
    sessionStorage.setItem(StorageKeys.TOKEN, userRigister.token);
    sessionStorage.setItem(StorageKeys.USER, JSON.stringify(userRigister));

    return userRigister;
  }
);

export const getCountry = createAsyncThunk(
  "auth/register/country",
  async () => {
    const { data } = await countryApi.getCountry();
    const country = data.data;

    return country;
  }
);

export const getCity = createAsyncThunk(
  "auth/register/city",
  async (id: number) => {
    const data = await countryApi.getCity(id);

    const city = data.data.data;

    return city;
  }
);

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    country: [],
    city: [],
  },

  reducers: {},

  extraReducers: {
    [login.fulfilled]: (state: any, action: any) => {
      state.currentUser = action.payload;
    },

    [register.fulfilled]: (state: any, action: any) => {
      state.currentUser = action.payload;
    },

    [getCountry.fulfilled]: (state: any, action: any) => {
      state.country = action.payload;
    },

    [getCity.fulfilled]: (state: any, action: any) => {
      state.city = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export default reducer;
