import { createSlice } from "@reduxjs/toolkit";

const storredUser = JSON.parse(localStorage.getItem("user"));

const userSlice = createSlice({
  name: "user",
  initialState: storredUser
    ? {
        name: storredUser.name,
        email: storredUser.email,
        userId: storredUser.userId,
        photoURL: storredUser.photoURL,
        accessToken: storredUser.accessToken,
        isLoggedIn: true,
      }
    : {
        name: "",
        email: "",
        userId: "",
        photoURL: "",
        accessToken: "",
        isLoggedIn: false,
      },
  reducers: {
    getCurrentUser: (state, action) => {
      state.name = action.payload.displayName;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.photoURL = action.payload.photoURL;
      state.isLoggedIn = true;
    },
    signoutCurrentUser: (state) => {
      state.name = "";
      state.email = "";
      state.accessToken = "";
      state.userId = "";
      state.photoURL = "";
      state.isLoggedIn = false;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
