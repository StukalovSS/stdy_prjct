import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IData {
  data: string;
}

export const mainSlice = createSlice({
  name: "main",
  initialState: { data: "" },
  reducers: {
    setData(state, action: PayloadAction<string>) {
      state.data = action.payload;
    },
    resetData(state) {
      state.data = "";
    },
  }
});

export const mainActions = mainSlice.actions;
export const mainReducer = mainSlice.reducer;