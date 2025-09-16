import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./reducers/mainSlice";


const rootReducer = combineReducers({
  mainReducer: mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),      
});

export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
