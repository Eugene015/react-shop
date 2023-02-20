import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoaded: false,
  user: {},
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isUserLoaded = true;
    },
    removeUser: (state) => {
      state.user = {};
      state.isUserLoaded = false;
    },
  },
});

export const { setUser, removeUser } = userReducer.actions;

export default userReducer.reducer;
