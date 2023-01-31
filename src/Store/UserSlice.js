import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name:"",
        email:"",
        userId:"",
        photoURL: "",
        accessToken: "",
        isLoggedIn: false
    },
    reducers : {
        getCurrentUser: (state, action) => {
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.accessToken = action.payload.accessToken;
            state.userId = action.payload.userId;
            state.photoURL = action.payload.photoURL;
            state.isLoggedIn = true;
        },
        deleteCurrentUser: (state) => {
            state.name = "";
            state.email = "";
            state.accessToken = "";
            state.userId = "";
            state.photoURL = "";
            state.isLoggedIn = false;
        }
    }
});

export const actions = userSlice.actions;
export default userSlice.reducer;