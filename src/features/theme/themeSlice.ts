import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  mode: "light" | "dark";
};

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined" && localStorage.getItem("theme")) {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  }
  return "light";
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
