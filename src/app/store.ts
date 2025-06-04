import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import authReducer from "../features/auth/authSlice";
import themeReducer from "../features/theme/themeSlice";

//persist user in localstorage
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth"],
// };

const rootReducer = combineReducers({ auth: authReducer });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
