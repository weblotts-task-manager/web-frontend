import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import api from "../../api/axios";

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

// Thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await api.post("/auth/login", credentials);
      // console.log(res.data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("auth");
      window.location.reload();
    },
    refreshTokenAction(
      state,
      action: PayloadAction<{
        token: string;
        refreshToken: string;
      }>
    ) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
    },
    authValueChange(
      state,
      action: PayloadAction<{
        key: string;
        value: any;
      }>
    ) {
      const { key, value } = action.payload as any;
      (state as any)[key] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            user: object;
            accessToken: string;
            refreshToken: string;
          }>
        ) => {
          console.log(action);
          const token = action.payload.accessToken;
          const refreshToken = action.payload.refreshToken;
          state.token = token;
          state.refreshToken = refreshToken;
          console.log(action);
          window.localStorage.setItem(
            "auth",
            JSON.stringify({
              token,
              refreshToken,
              isAuthenticated: true,
            })
          );
          state.isAuthenticated = true;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, refreshTokenAction, authValueChange } =
  authSlice.actions;
export default authSlice.reducer;
